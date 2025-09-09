import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, Headphones } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Shop Smarter with{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ClickKart
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover millions of products at unbeatable prices. From electronics to fashion, 
                we've got everything you need delivered right to your door.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cart" size="lg" className="text-lg px-8 py-6">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Browse Categories
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-success/10 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-success" />
                </div>
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-medium">Best Quality</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="bg-warning/10 p-3 rounded-full">
                  <Headphones className="h-6 w-6 text-warning" />
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroBanner}
                alt="ClickKart Shopping Experience"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-success text-success-foreground p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">50% OFF</div>
              <div className="text-xs">Flash Sale</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">1M+</div>
              <div className="text-xs">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;