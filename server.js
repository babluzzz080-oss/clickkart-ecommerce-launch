require("dotenv").config();
const express = require("express"), cors = require("cors"), crypto = require("crypto"), Razorpay = require("razorpay");
const app = express();
app.use(express.json({ verify: (req, res, buf) => { req.raw = buf; } }));
app.use(cors({ origin: process.env.SITE_URL || "*" }));
const rz = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });
const SBU = process.env.SUPABASE_URL, SK = process.env.SUPABASE_SERVICE_KEY;
const sbr = (path, opt = {}) => fetch(SBU + "/rest/v1" + path, { ...opt, headers: { apikey: SK, Authorization: "Bearer " + SK, "Content-Type": "application/json", ...(opt.headers || {}) } });
const sp = (m, d) => Math.round(m * (100 - d) / 100);
const IST = { timeZone: "Asia/Kolkata" };
const nowIN = () => new Date().toLocaleString("en-IN", { ...IST, day: "numeric", month: "short", hour: "numeric", minute: "2-digit" });

// 1) Order banao. Daam server khud database se nikalta hai, browser ka daam nahin maanta.
app.post("/api/create-order", async (req, res) => {
  try {
    const { items, coupon, addr } = req.body;
    if (!Array.isArray(items) || !items.length || !addr || !/^\d{10}$/.test(String(addr.ph))) return res.status(400).json({ error: "Galat order" });
    const A = {};
    ["nm", "ph", "pin", "ho", "ar", "lm", "ci", "st", "ty"].forEach((k) => (A[k] = String(addr[k] || "").slice(0, 200)));
    const rows = await (await sbr("/store?key=eq.site&select=value")).json();
    const site = rows[0] && rows[0].value;
    if (!site) return res.status(500).json({ error: "Catalog nahin mila" });
    let m = 0, s = 0; const lines = [];
    for (const it of items) {
      const p = site.products.find((x) => x.id == it.id);
      const q = Math.max(1, Math.min(20, parseInt(it.q) || 1));
      if (!p || p.stock === false) return res.status(400).json({ error: "Product available nahin" });
      m += p.m * q; s += sp(p.m, site.disc) * q;
      lines.push({ id: p.id, n: p.b + " " + p.n, q, m: p.m, s: sp(p.m, site.disc) });
    }
    const c = (site.coupons || []).find((x) => x.code === String(coupon || "").toUpperCase());
    const cd = c ? Math.round(s * c.pct / 100) : 0, total = s - cd;
    if (!(total >= 1)) return res.status(400).json({ error: "Galat amount" });
    const id = "UZ" + Math.floor(1e9 + Math.random() * 9e9);
    const r1 = await rz.orders.create({ amount: total * 100, currency: "INR", receipt: id });
    const order = { id, items: lines, m, s, cd, code: c ? c.code : "", total, pm: "Razorpay", addr: A, st: 0, tm: [nowIN()], time: nowIN(), ts: Date.now(),
      ed: new Date(Date.now() + 4 * 864e5).toLocaleDateString("en-IN", { ...IST, weekday: "short", day: "numeric", month: "short" }) };
    const ins = await sbr("/orders", { method: "POST", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ id, phone: A.ph, data: order, status: "pending", rz_order: r1.id }) });
    if (!ins.ok) return res.status(500).json({ error: "Order save nahin hua" });
    res.json({ id: r1.id, amount: r1.amount, key: process.env.RAZORPAY_KEY_ID, orderId: id });
  } catch (e) { res.status(500).json({ error: "Order nahin ban saka" }); }
});

async function markPaid(rzOrder, payId) {
  const rows = await (await sbr("/orders?rz_order=eq." + encodeURIComponent(rzOrder) + "&select=id,data")).json();
  const row = rows[0]; if (!row) return null;
  const data = { ...row.data, pid: payId };
  await sbr("/orders?id=eq." + row.id, { method: "PATCH", headers: { Prefer: "return=minimal" }, body: JSON.stringify({ status: "paid", data }) });
  return data;
}

// 2) Payment verify karo aur order "paid" karo.
app.post("/api/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id: o, razorpay_payment_id: p, razorpay_signature: g } = req.body;
    const exp = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(o + "|" + p).digest("hex");
    if (exp !== g) return res.json({ ok: false });
    const order = await markPaid(o, p);
    res.json({ ok: !!order, order });
  } catch (e) { res.json({ ok: false }); }
});

// 3) Webhook (optional): agar customer payment ke baad app band kar de, tab bhi order paid ho jaata hai.
app.post("/api/webhook", async (req, res) => {
  try {
    const sec = process.env.RAZORPAY_WEBHOOK_SECRET; if (!sec) return res.sendStatus(200);
    const sig = crypto.createHmac("sha256", sec).update(req.raw).digest("hex");
    if (sig !== req.headers["x-razorpay-signature"]) return res.sendStatus(400);
    const pay = req.body.payload && req.body.payload.payment && req.body.payload.payment.entity;
    if (req.body.event === "payment.captured" && pay) await markPaid(pay.order_id, pay.id);
    res.sendStatus(200);
  } catch (e) { res.sendStatus(200); }
});

// 4) SMS OTP (MSG91). Ek number ko 60 second mein ek hi baar.
const MS = "https://control.msg91.com/api/v5/otp", last = {};
const num = (m) => "91" + String(m || "").replace(/\D/g, "").slice(-10);
app.post("/api/send-otp", async (req, res) => {
  try {
    const m = num(req.body.mobile);
    if (Date.now() - (last[m] || 0) < 60000) return res.json({ ok: false, error: "60 second ruken" });
    last[m] = Date.now();
    const r = await fetch(`${MS}?template_id=${process.env.MSG91_TEMPLATE_ID}&mobile=${m}`, { method: "POST", headers: { authkey: process.env.MSG91_AUTHKEY, "Content-Type": "application/json" }, body: "{}" });
    res.json({ ok: (await r.json()).type === "success" });
  } catch (e) { res.json({ ok: false }); }
});
app.post("/api/verify-otp", async (req, res) => {
  try {
    const r = await fetch(`${MS}/verify?mobile=${num(req.body.mobile)}&otp=${encodeURIComponent(req.body.otp)}`, { headers: { authkey: process.env.MSG91_AUTHKEY } });
    res.json({ ok: (await r.json()).type === "success" });
  } catch (e) { res.json({ ok: false }); }
});

app.get("/", (q, r) => r.send("Urbanza payment server chal raha hai"));
app.listen(process.env.PORT || 3000);
