require("dotenv").config();
const express = require("express"), cors = require("cors"), crypto = require("crypto"), Razorpay = require("razorpay");
const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.SITE_URL || "*" }));
const rz = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET });

// 1) Order banao. amount rupees mein aata hai, Razorpay ko paise mein dete hain.
app.post("/api/create-order", async (req, res) => {
  try {
    const amount = Math.round(Number(req.body.amount) * 100);
    if (!(amount >= 100)) return res.status(400).json({ error: "Galat amount" });
    const o = await rz.orders.create({ amount, currency: "INR", receipt: String(req.body.receipt || Date.now()) });
    res.json({ id: o.id, amount: o.amount, key: process.env.RAZORPAY_KEY_ID });
  } catch (e) { res.status(500).json({ error: "Order nahin ban saka" }); }
});

// 2) Payment sahi hai ya nahin, signature se check karo.
app.post("/api/verify-payment", (req, res) => {
  const { razorpay_order_id: o, razorpay_payment_id: p, razorpay_signature: s } = req.body;
  const expected = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET).update(o + "|" + p).digest("hex");
  res.json({ ok: expected === s });
});

// 3) SMS OTP (MSG91). Ek number ko 60 second mein ek hi baar OTP.
const MS = "https://control.msg91.com/api/v5/otp", last = {};
const num = (m) => "91" + String(m || "").replace(/\D/g, "").slice(-10);
app.post("/api/send-otp", async (req, res) => {
  try {
    const m = num(req.body.mobile);
    if (Date.now() - (last[m] || 0) < 60000) return res.json({ ok: false, error: "60 second ruken" });
    last[m] = Date.now();
    const r = await fetch(`${MS}?template_id=${process.env.MSG91_TEMPLATE_ID}&mobile=${m}`, { method: "POST", headers: { authkey: process.env.MSG91_AUTHKEY, "Content-Type": "application/json" }, body: "{}" });
    const j = await r.json();
    res.json({ ok: j.type === "success" });
  } catch (e) { res.json({ ok: false }); }
});
app.post("/api/verify-otp", async (req, res) => {
  try {
    const r = await fetch(`${MS}/verify?mobile=${num(req.body.mobile)}&otp=${encodeURIComponent(req.body.otp)}`, { headers: { authkey: process.env.MSG91_AUTHKEY } });
    const j = await r.json();
    res.json({ ok: j.type === "success" });
  } catch (e) { res.json({ ok: false }); }
});

app.get("/", (q, r) => r.send("Urbanza payment server chal raha hai"));
app.listen(process.env.PORT || 3000);
