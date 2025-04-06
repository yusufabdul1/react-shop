
import { Product } from './products';

export const additionalProducts: Product[] = [
  // Laptops
  {
    id: 101,
    name: "UltraBook Pro 16",
    category: "laptops",
    subcategory: "Ultrabooks",
    price: 1499.99,
    rating: 4.8,
    reviews: 126,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The UltraBook Pro 16 combines power and portability with its 11th Gen processor, stunning 16-inch display, and all-day battery life. Perfect for professionals and creatives.",
    specifications: {
      "Display": "16-inch Retina IPS",
      "Processor": "11th Gen Intel Core i7",
      "RAM": "16GB DDR4",
      "Storage": "1TB SSD",
      "Graphics": "NVIDIA GeForce RTX 3050Ti",
      "Battery": "Up to 12 hours",
      "OS": "Windows 11 Pro"
    },
    new: true,
    tags: ["Laptop", "Intel", "Windows", "SSD"]
  },
  {
    id: 102,
    name: "MacBook Air M2",
    category: "laptops",
    subcategory: "Ultrabooks",
    price: 1199.99,
    rating: 4.9,
    reviews: 203,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Supercharged by the M2 chip, the redesigned MacBook Air combines incredible performance and up to 18 hours of battery life into an impossibly thin design.",
    specifications: {
      "Display": "13.6-inch Liquid Retina",
      "Processor": "Apple M2 chip",
      "RAM": "8GB Unified Memory",
      "Storage": "256GB SSD",
      "Graphics": "10-core GPU",
      "Battery": "Up to 18 hours",
      "OS": "macOS"
    },
    featured: true,
    tags: ["Laptop", "Apple", "macOS", "M2"]
  },
  
  // Smartphones
  {
    id: 103,
    name: "Google Pixel 7 Pro",
    category: "smartphones",
    subcategory: "Android",
    price: 899.99,
    salePrice: 799.99,
    discount: 11,
    rating: 4.7,
    reviews: 187,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The Google Pixel 7 Pro has a refined design, next-gen Google Tensor processor, and the most advanced camera system on a Pixel. Experience Android at its best.",
    specifications: {
      "Display": "6.7-inch QHD+ LTPO OLED",
      "Processor": "Google Tensor G2",
      "RAM": "12GB",
      "Storage": "128GB",
      "Camera": "50MP triple camera system",
      "Battery": "5000mAh",
      "OS": "Android 13"
    },
    bestSeller: true,
    tags: ["Smartphone", "Android", "Google", "Camera"]
  },
  {
    id: 104,
    name: "iPhone 14 Pro",
    category: "smartphones",
    subcategory: "iOS",
    price: 999.99,
    rating: 4.8,
    reviews: 256,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The iPhone 14 Pro features the innovative Dynamic Island, a 48MP camera system, and the A16 Bionic chip. It redefines what a smartphone can do.",
    specifications: {
      "Display": "6.1-inch Super Retina XDR",
      "Processor": "A16 Bionic",
      "RAM": "6GB",
      "Storage": "128GB",
      "Camera": "48MP triple camera system",
      "Battery": "All-day battery life",
      "OS": "iOS 16"
    },
    featured: true,
    tags: ["Smartphone", "iOS", "Apple", "5G"]
  },
  
  // Home Appliances
  {
    id: 105,
    name: "SmartChef Pro Kitchen Mixer",
    category: "homeappliances",
    subcategory: "Kitchen",
    price: 349.99,
    salePrice: 299.99,
    discount: 14,
    rating: 4.6,
    reviews: 124,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The SmartChef Pro is a versatile kitchen mixer with 10 speed settings, a 5.5-quart stainless steel bowl, and multiple attachments for all your cooking and baking needs.",
    specifications: {
      "Power": "650 Watts",
      "Capacity": "5.5-quart bowl",
      "Speeds": "10 with pulse function",
      "Attachments": "Whisk, dough hook, flat beater",
      "Material": "Die-cast metal body",
      "Weight": "22 lbs",
      "Warranty": "3 years"
    },
    bestSeller: true,
    tags: ["Kitchen", "Appliance", "Mixer", "Cooking"]
  },
  {
    id: 106,
    name: "AirPure 3000 Smart Air Purifier",
    category: "homeappliances",
    subcategory: "Air Treatment",
    price: 249.99,
    rating: 4.7,
    reviews: 98,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The AirPure 3000 removes 99.97% of particles as small as 0.3 microns. With smart Wi-Fi connectivity, you can monitor and control air quality from your phone.",
    specifications: {
      "Coverage": "Up to 1500 sq ft",
      "CADR Rating": "315",
      "Filter": "True HEPA + Activated Carbon",
      "Smart Features": "Wi-Fi, App Control, Voice Control",
      "Noise Level": "24-54dB",
      "Power": "60 Watts",
      "Filter Life": "12 months"
    },
    new: true,
    tags: ["Air Purifier", "Smart Home", "HEPA", "Allergen"]
  },
  
  // Fashion
  {
    id: 107,
    name: "Classic Leather Weekender Bag",
    category: "fashion",
    subcategory: "Accessories",
    price: 189.99,
    rating: 4.5,
    reviews: 76,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "This handcrafted genuine leather weekender bag features brass hardware, multiple compartments, and a detachable shoulder strap. Perfect for short trips and daily commutes.",
    specifications: {
      "Material": "Full-grain leather",
      "Dimensions": "22\" x 12\" x 10\"",
      "Capacity": "45L",
      "Pockets": "3 exterior, 4 interior",
      "Strap": "Adjustable, detachable",
      "Hardware": "Brass",
      "Colors": "Brown, Black, Tan"
    },
    tags: ["Bag", "Leather", "Travel", "Accessories"]
  },
  {
    id: 108,
    name: "Ultra Comfort Running Shoes",
    category: "fashion",
    subcategory: "Footwear",
    price: 129.99,
    salePrice: 99.99,
    discount: 23,
    rating: 4.6,
    reviews: 158,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Engineered for maximum comfort and performance, these running shoes feature responsive cushioning, breathable mesh upper, and durable rubber outsoles for all your runs.",
    specifications: {
      "Upper": "Breathable mesh",
      "Midsole": "Responsive foam cushioning",
      "Outsole": "Carbon rubber",
      "Weight": "9.2 oz",
      "Drop": "8mm",
      "Arch Support": "Neutral",
      "Best For": "Road running, daily training"
    },
    bestSeller: true,
    tags: ["Shoes", "Running", "Athletic", "Footwear"]
  },
  
  // Gaming
  {
    id: 109,
    name: "NextLevel Gaming Chair",
    category: "gaming",
    subcategory: "Accessories",
    price: 299.99,
    rating: 4.5,
    reviews: 112,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The NextLevel Gaming Chair provides ergonomic support with adjustable lumbar cushioning, 4D armrests, and a reclining backrest. Game in comfort for hours.",
    specifications: {
      "Material": "PU Leather",
      "Frame": "Steel",
      "Recline": "90°-165°",
      "Armrests": "4D adjustable",
      "Base": "Aluminum 5-star",
      "Weight Capacity": "330 lbs",
      "Adjustable Height": "Yes"
    },
    new: true,
    tags: ["Gaming", "Chair", "Ergonomic", "Furniture"]
  },
  {
    id: 110,
    name: "GamePro Elite Controller",
    category: "gaming",
    subcategory: "Accessories",
    price: 149.99,
    salePrice: 129.99,
    discount: 13,
    rating: 4.8,
    reviews: 145,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Gain competitive edge with the GamePro Elite Controller featuring customizable buttons, hair-trigger locks, and adjustable-tension thumbsticks for precision control.",
    specifications: {
      "Compatibility": "PC, Xbox",
      "Connectivity": "Wireless & USB-C",
      "Battery Life": "40 hours",
      "Features": "Mappable buttons, hair-trigger locks",
      "Materials": "Rubberized grips, stainless steel components",
      "Accessories": "Carrying case, extra thumbsticks",
      "Warranty": "1 year"
    },
    bestSeller: true,
    tags: ["Gaming", "Controller", "Xbox", "PC"]
  },
  
  // Tech Gadgets
  {
    id: 111,
    name: "TravelDrone Mini",
    category: "gadgets",
    subcategory: "Drones",
    price: 399.99,
    rating: 4.4,
    reviews: 87,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "The TravelDrone Mini is an ultraportable drone that folds to the size of a smartphone. With 4K camera, 30-minute flight time, and intelligent flight modes, it's perfect for travel photography.",
    specifications: {
      "Camera": "4K/30fps, 12MP",
      "Flight Time": "30 minutes",
      "Range": "4km",
      "Weight": "249g",
      "Sensors": "Forward, backward, downward",
      "Features": "ActiveTrack, QuickShots, Panorama",
      "Folded Size": "140 × 82 × 57 mm"
    },
    new: true,
    tags: ["Drone", "Camera", "Travel", "Photography"]
  },
  {
    id: 112,
    name: "SoundPods Pro Wireless Earbuds",
    category: "audio",
    subcategory: "Earbuds",
    price: 179.99,
    rating: 4.7,
    reviews: 213,
    inStock: true,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Experience immersive sound with SoundPods Pro featuring active noise cancellation, spatial audio, and up to 24 hours of battery life with the charging case.",
    specifications: {
      "Driver Size": "11mm",
      "Noise Cancellation": "Active, Transparency mode",
      "Battery Life": "6 hours (ANC on), 24 hours with case",
      "Connectivity": "Bluetooth 5.2",
      "Water Resistance": "IPX4",
      "Features": "Spatial audio, wireless charging",
      "Controls": "Touch, voice assistant"
    },
    featured: true,
    bestSeller: true,
    tags: ["Earbuds", "Wireless", "Noise Cancellation", "Audio"]
  }
];
