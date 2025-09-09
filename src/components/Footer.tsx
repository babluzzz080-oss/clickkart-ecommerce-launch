import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "About ClickKart": [
      "About Us",
      "Careers",
      "Press",
      "Investor Relations",
      "Gift Cards"
    ],
    "Customer Service": [
      "Help Center",
      "Returns",
      "Product Recalls",
      "Contact Us",
      "Accessibility"
    ],
    "Make Money": [
      "Sell on ClickKart",
      "Become an Affiliate",
      "Advertise Your Products",
      "Self-Publish with Us",
      "Host a Hub"
    ],
    "Payment & Security": [
      "Payment Methods",
      "Conditions of Use",
      "Privacy Notice",
      "Your Ads Privacy",
      "Legal Info"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="bg-primary-glow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with ClickKart
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest deals, new product announcements, and exclusive offers straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-background text-foreground border-0 flex-1"
              />
              <Button variant="accent" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-accent p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold">ClickKart</h2>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted e-commerce destination for quality products, 
              competitive prices, and exceptional customer service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>support@clickkart.co.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-primary-foreground/10 text-primary-foreground hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-accent">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <div className="flex flex-col md:flex-row gap-4">
            <span>© 2024 ClickKart. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span>Made with ❤️ in India</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;