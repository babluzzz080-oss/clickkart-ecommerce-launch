import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { featuredProducts, flashDeals } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <ProductSection
          title="Flash Deals"
          subtitle="Limited time offers - grab them while they last!"
          products={flashDeals}
          isFlashDeal={true}
        />
        <ProductSection
          title="Featured Products"
          subtitle="Handpicked products that our customers love"
          products={featuredProducts}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
