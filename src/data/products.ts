export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  inStock: boolean;
  isNew?: boolean;
  category: string;
}

export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Apple iPhone 15 Pro Max 256GB - Natural Titanium",
    price: 134900,
    originalPrice: 149900,
    rating: 4.8,
    reviews: 2847,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    discount: 10,
    inStock: true,
    isNew: true,
    category: "Electronics"
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra 512GB - Titanium Black",
    price: 129999,
    originalPrice: 139999,
    rating: 4.7,
    reviews: 1956,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    discount: 7,
    inStock: true,
    category: "Electronics"
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    price: 29990,
    originalPrice: 34990,
    rating: 4.9,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    discount: 14,
    inStock: true,
    category: "Electronics"
  },
  {
    id: "4",
    name: "Nike Air Jordan 1 Retro High OG - Chicago",
    price: 16995,
    originalPrice: 19995,
    rating: 4.6,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    discount: 15,
    inStock: true,
    isNew: true,
    category: "Fashion"
  },
  {
    id: "5",
    name: "MacBook Air M3 13-inch 256GB - Midnight",
    price: 114900,
    originalPrice: 119900,
    rating: 4.8,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    discount: 4,
    inStock: true,
    category: "Electronics"
  },
  {
    id: "6",
    name: "Levi's 501 Original Fit Jeans - Dark Stonewash",
    price: 4499,
    originalPrice: 5999,
    rating: 4.4,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
    discount: 25,
    inStock: true,
    category: "Fashion"
  },
  {
    id: "7",
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
    price: 8999,
    originalPrice: 12999,
    rating: 4.7,
    reviews: 2143,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    discount: 31,
    inStock: true,
    category: "Home & Kitchen"
  },
  {
    id: "8",
    name: "The Complete Works of William Shakespeare",
    price: 1299,
    originalPrice: 1999,
    rating: 4.9,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=400&fit=crop",
    discount: 35,
    inStock: true,
    category: "Books"
  }
];

export const flashDeals: Product[] = [
  {
    id: "9",
    name: "Xiaomi Redmi Note 13 Pro 5G 256GB",
    price: 24999,
    originalPrice: 29999,
    rating: 4.5,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1592910147562-1bbb982c0beb?w=400&h=400&fit=crop",
    discount: 17,
    inStock: true,
    category: "Electronics"
  },
  {
    id: "10",
    name: "Adidas Ultraboost 22 Running Shoes",
    price: 12999,
    originalPrice: 16999,
    rating: 4.6,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    discount: 24,
    inStock: true,
    category: "Sports"
  },
  {
    id: "11",
    name: "Philips Air Fryer HD9200/90 4.1L",
    price: 7999,
    originalPrice: 12999,
    rating: 4.7,
    reviews: 1543,
    image: "https://images.unsplash.com/photo-1585515495983-985c46d4ee5a?w=400&h=400&fit=crop",
    discount: 38,
    inStock: true,
    category: "Home & Kitchen"
  },
  {
    id: "12",
    name: "Fossil Gen 6 Smartwatch - Rose Gold",
    price: 18995,
    originalPrice: 24995,
    rating: 4.3,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    discount: 24,
    inStock: false,
    category: "Electronics"
  }
];