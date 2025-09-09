import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import ProductCard from "./ProductCard";
import { Product } from "@/data/products";

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  isFlashDeal?: boolean;
  showViewAll?: boolean;
}

const ProductSection = ({ 
  title, 
  subtitle, 
  products, 
  isFlashDeal = false, 
  showViewAll = true 
}: ProductSectionProps) => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              {isFlashDeal && (
                <div className="bg-sale text-sale-foreground p-2 rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
              )}
              <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
            </div>
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-2xl">
                {subtitle}
              </p>
            )}
            {isFlashDeal && (
              <div className="flex items-center gap-2 mt-3">
                <span className="text-sm font-medium text-sale">Ends in:</span>
                <div className="flex gap-1">
                  {["12", "34", "56"].map((time, index) => (
                    <div key={index} className="bg-sale text-sale-foreground px-2 py-1 rounded text-sm font-bold">
                      {time}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {showViewAll && (
            <Button variant="outline" className="self-start">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;