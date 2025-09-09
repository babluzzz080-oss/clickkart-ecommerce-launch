import { useEffect, useState } from "react";

const TopBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  const banners = [
    {
      id: 1,
      title: "Mega Sale 70% OFF",
      subtitle: "Fashion & Electronics",
      bg: "bg-red-600"
    },
    {
      id: 2,
      title: "Free Delivery",
      subtitle: "On orders above ₹499",
      bg: "bg-green-600"
    },
    {
      id: 3,
      title: "New Arrivals",
      subtitle: "Latest Fashion Trends",
      bg: "bg-blue-600"
    },
    {
      id: 4,
      title: "Flash Deal",
      subtitle: "Limited Time Offer",
      bg: "bg-orange-600"
    },
    {
      id: 5,
      title: "Bank Offers",
      subtitle: "Extra 10% off with HDFC",
      bg: "bg-purple-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="w-full">
      <div className={`${banners[currentBanner].bg} text-white py-3 px-4 text-center transition-all duration-500`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-bold text-sm md:text-base">
              {banners[currentBanner].title}
            </span>
            <span className="text-xs md:text-sm opacity-90">
              - {banners[currentBanner].subtitle}
            </span>
          </div>
        </div>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 py-2 bg-gray-100">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentBanner ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBanner;