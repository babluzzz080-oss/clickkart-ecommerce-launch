import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TopBanner = () => {
  const banners = [
    {
      id: 1,
      title: "Mega Sale 70% OFF",
      subtitle: "Fashion & Electronics",
      bgColor: "bg-gradient-to-r from-red-500 to-red-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Free Delivery",
      subtitle: "On orders above ₹499",
      bgColor: "bg-gradient-to-r from-green-500 to-green-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "New Arrivals",
      subtitle: "Latest Fashion Trends",
      bgColor: "bg-gradient-to-r from-blue-500 to-blue-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "Flash Deal",
      subtitle: "Limited Time Offer",
      bgColor: "bg-gradient-to-r from-orange-500 to-orange-600",
      textColor: "text-white"
    },
    {
      id: 5,
      title: "Bank Offers",
      subtitle: "Extra 10% off with HDFC",
      bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
      textColor: "text-white"
    }
  ];

  return (
    <div className="w-full">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className={`${banner.bgColor} ${banner.textColor} py-3 px-4 text-center relative overflow-hidden`}>
                <div className="container mx-auto">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="font-bold text-sm md:text-base">
                      {banner.title}
                    </span>
                    <span className="text-xs md:text-sm opacity-90">
                      - {banner.subtitle}
                    </span>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute left-0 top-0 w-full h-full opacity-10">
                  <div className="absolute -left-4 -top-4 w-8 h-8 border-2 border-white rounded-full"></div>
                  <div className="absolute -right-4 -bottom-4 w-6 h-6 border-2 border-white rounded-full"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 h-6 w-6 text-white bg-black/20 border-none hover:bg-black/40" />
        <CarouselNext className="right-2 h-6 w-6 text-white bg-black/20 border-none hover:bg-black/40" />
      </Carousel>
    </div>
  );
};

export default TopBanner;