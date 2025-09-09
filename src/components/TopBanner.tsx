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
      <div className={`${banners[currentBanner].bg} text-white py-12 px-4 text-center transition-all duration-500 min-h-[200px] flex items-center`}>
        <div className="container mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              {banners[currentBanner].title}
            </h2>
            <p className="text-lg md:text-2xl opacity-90">
              {banners[currentBanner].subtitle}
            </p>
            <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors mt-6">
              Shop Now
            </button>
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