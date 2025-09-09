import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Sparkles, 
  Dumbbell, 
  Book, 
  ShoppingBasket,
  Laptop
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    color: "from-blue-500 to-blue-600",
    items: "2M+ Products"
  },
  {
    name: "Fashion",
    icon: Shirt,
    color: "from-pink-500 to-pink-600",
    items: "5M+ Products"
  },
  {
    name: "Mobiles",
    icon: Smartphone,
    color: "from-purple-500 to-purple-600",
    items: "50K+ Products"
  },
  {
    name: "Home & Kitchen",
    icon: Home,
    color: "from-green-500 to-green-600",
    items: "1M+ Products"
  },
  {
    name: "Beauty",
    icon: Sparkles,
    color: "from-orange-500 to-orange-600",
    items: "200K+ Products"
  },
  {
    name: "Sports",
    icon: Dumbbell,
    color: "from-red-500 to-red-600",
    items: "100K+ Products"
  },
  {
    name: "Books",
    icon: Book,
    color: "from-indigo-500 to-indigo-600",
    items: "500K+ Products"
  },
  {
    name: "Grocery",
    icon: ShoppingBasket,
    color: "from-emerald-500 to-emerald-600",
    items: "50K+ Products"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our vast collection across multiple categories and find exactly what you're looking for
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.items}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;