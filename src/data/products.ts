export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  salePrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  image: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: "smartphones",
    name: "Smartphones",
    image: "/placeholder.svg",
    subcategories: ["Android", "iOS", "Feature Phones"]
  },
  {
    id: "laptops",
    name: "Laptops",
    image: "/placeholder.svg",
    subcategories: ["Gaming", "Business", "Ultrabooks", "Chromebooks"]
  },
  {
    id: "tvs",
    name: "TVs & Displays",
    image: "/placeholder.svg",
    subcategories: ["Smart TVs", "OLED", "QLED", "4K", "8K", "Monitors"]
  },
  {
    id: "audio",
    name: "Audio",
    image: "/placeholder.svg",
    subcategories: ["Headphones", "Speakers", "Soundbars", "Earbuds"]
  },
  {
    id: "gaming",
    name: "Gaming",
    image: "/placeholder.svg",
    subcategories: ["Consoles", "Accessories", "Games"]
  },
  {
    id: "wearables",
    name: "Wearables",
    image: "/placeholder.svg",
    subcategories: ["Smartwatches", "Fitness Trackers", "VR Headsets"]
  },
  {
    id: "homeappliances",
    name: "Home Appliances",
    image: "/placeholder.svg",
    subcategories: ["Kitchen", "Cleaning", "Air Treatment", "Smart Home"]
  },
  {
    id: "fashion",
    name: "Fashion",
    image: "/placeholder.svg",
    subcategories: ["Clothing", "Footwear", "Accessories", "Watches"]
  },
  {
    id: "gadgets",
    name: "Tech Gadgets",
    image: "/placeholder.svg",
    subcategories: ["Cameras", "Drones", "Smart Devices", "Wearables"]
  }
];

// Import the additional products
import { additionalProducts } from './moreProducts';

// Original products
const originalProducts: Product[] = [
  {
    id: 1,
    name: "XTech Pro Smartphone",
    category: "smartphones",
    subcategory: "Android",
    price: 899.99,
    salePrice: 799.99,
    discount: 11,
    rating: 4.7,
    reviews: 245,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The XTech Pro is the latest flagship smartphone featuring a 6.7-inch AMOLED display, 5G connectivity, and an AI-powered camera system. With its powerful processor and all-day battery life, it's perfect for professionals and tech enthusiasts alike.",
    specifications: {
      "Display": "6.7-inch AMOLED, 120Hz",
      "Processor": "Octa-core 3.0 GHz",
      "RAM": "12GB",
      "Storage": "256GB",
      "Camera": "108MP triple camera system",
      "Battery": "5000mAh",
      "OS": "Android 13"
    },
    featured: true,
    bestSeller: true,
    tags: ["5G", "Fast Charging", "Water Resistant"]
  },
  {
    id: 2,
    name: "VoltBook Pro Laptop",
    category: "laptops",
    subcategory: "Ultrabooks",
    price: 1299.99,
    rating: 4.5,
    reviews: 189,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Ultra-thin, ultra-powerful. The VoltBook Pro is a premium laptop designed for productivity and performance. Featuring the latest processor, ample RAM, and a stunning high-resolution display.",
    specifications: {
      "Display": "14-inch 4K IPS",
      "Processor": "11th Gen Core i7",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Graphics": "Integrated Intel Iris Xe",
      "Battery": "Up to 12 hours",
      "OS": "Windows 11 Pro"
    },
    featured: true,
    new: true,
    tags: ["Lightweight", "SSD", "Backlit Keyboard"]
  },
  {
    id: 3,
    name: "SoundWave Wireless Headphones",
    category: "audio",
    subcategory: "Headphones",
    price: 249.99,
    salePrice: 199.99,
    discount: 20,
    rating: 4.8,
    reviews: 352,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Immerse yourself in crystal-clear sound with the SoundWave Wireless Headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort for extended listening sessions.",
    specifications: {
      "Type": "Over-ear",
      "Connectivity": "Bluetooth 5.2",
      "Battery": "30 hours",
      "Noise Cancellation": "Active",
      "Charging": "USB-C, Fast Charge",
      "Weight": "250g"
    },
    bestSeller: true,
    tags: ["Noise Cancellation", "Long Battery", "Comfortable"]
  },
  {
    id: 4,
    name: "GameStation X Console",
    category: "gaming",
    subcategory: "Consoles",
    price: 499.99,
    rating: 4.9,
    reviews: 427,
    inStock: false,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The next generation of gaming is here. The GameStation X delivers stunning 4K graphics, lightning-fast load times, and an extensive library of games. Get ready for the most immersive gaming experience yet.",
    specifications: {
      "Processor": "Custom 8-core AMD Zen 2",
      "Graphics": "AMD RDNA 2 GPU",
      "Memory": "16GB GDDR6",
      "Storage": "1TB SSD",
      "Resolution": "Up to 4K at 120fps",
      "Connectivity": "Wi-Fi 6, Bluetooth 5.1"
    },
    featured: true,
    new: true,
    tags: ["4K Gaming", "Ray Tracing", "SSD"]
  },
  {
    id: 5,
    name: "QuantumView 55\" OLED TV",
    category: "tvs",
    subcategory: "OLED",
    price: 1499.99,
    salePrice: 1299.99,
    discount: 13,
    rating: 4.6,
    reviews: 208,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Transform your home entertainment with the QuantumView OLED TV. Featuring perfect blacks, vibrant colors, and smart capabilities, this TV delivers an unparalleled viewing experience for movies, sports, and gaming.",
    specifications: {
      "Screen Size": "55 inches",
      "Display Type": "OLED",
      "Resolution": "4K Ultra HD",
      "HDR": "Dolby Vision, HDR10+",
      "Refresh Rate": "120Hz",
      "Smart TV": "Yes, WebOS",
      "HDMI Ports": "4 (HDMI 2.1)"
    },
    featured: true,
    tags: ["OLED", "Smart TV", "4K", "Dolby Vision"]
  },
  {
    id: 6,
    name: "TechFit Smart Watch",
    category: "wearables",
    subcategory: "Smartwatches",
    price: 299.99,
    rating: 4.4,
    reviews: 176,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Stay connected and track your fitness with the TechFit Smart Watch. With heart rate monitoring, sleep tracking, and workout detection, it's your perfect health companion. Plus, enjoy seamless notifications and app integration.",
    specifications: {
      "Display": "1.4-inch AMOLED",
      "Water Resistance": "50m",
      "Battery Life": "Up to 7 days",
      "Sensors": "Heart rate, SpO2, Accelerometer",
      "Connectivity": "Bluetooth 5.0, Wi-Fi",
      "Compatibility": "iOS, Android"
    },
    new: true,
    tags: ["Fitness Tracking", "Water Resistant", "GPS"]
  },
  {
    id: 7,
    name: "PowerCore 10000 Portable Charger",
    category: "accessories",
    subcategory: "Power Banks",
    price: 49.99,
    salePrice: 39.99,
    discount: 20,
    rating: 4.3,
    reviews: 522,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Never run out of battery again with the PowerCore 10000. This compact power bank delivers fast charging for smartphones, tablets, and other USB devices, ensuring you stay powered up on the go.",
    specifications: {
      "Capacity": "10000mAh",
      "Input": "USB-C, Micro-USB",
      "Output": "USB-A, USB-C",
      "Fast Charging": "QuickCharge 3.0, Power Delivery",
      "Weight": "180g",
      "Size": "92 x 60 x 22mm"
    },
    bestSeller: true,
    tags: ["Fast Charging", "Compact", "High Capacity"]
  },
  {
    id: 8,
    name: "UltraGear Gaming Monitor",
    category: "tvs",
    subcategory: "Monitors",
    price: 349.99,
    rating: 4.7,
    reviews: 158,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Gain the competitive edge with the UltraGear Gaming Monitor. Featuring a high refresh rate, low response time, and adaptive sync technology, it delivers smooth, tear-free gameplay for the ultimate gaming experience.",
    specifications: {
      "Size": "27 inches",
      "Resolution": "1440p WQHD",
      "Refresh Rate": "165Hz",
      "Response Time": "1ms",
      "Panel Type": "IPS",
      "Adaptive Sync": "G-Sync, FreeSync",
      "Inputs": "DisplayPort 1.4, HDMI 2.0"
    },
    featured: true,
    tags: ["Gaming", "High Refresh Rate", "IPS Panel"]
  }
];

// Combine original and additional products
export const products: Product[] = [...originalProducts, ...additionalProducts];

// Function to get products by category
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => product.category === categoryId);
};

// Function to get featured products
export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

// Function to get products on sale
export const getSaleProducts = () => {
  return products.filter(product => product.salePrice);
};

// Function to get new products
export const getNewProducts = () => {
  return products.filter(product => product.new);
};

// Function to get bestsellers
export const getBestSellers = () => {
  return products.filter(product => product.bestSeller);
};

// Function to get related products (products in the same category)
export const getRelatedProducts = (productId: number) => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, 4);
};

// Function to search products
export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.subcategory.toLowerCase().includes(searchTerm) ||
    (product.tags && product.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
  );
};
