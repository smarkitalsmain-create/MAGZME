export interface Product {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  category: string;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
  occasion: string[];
}

export const products: Product[] = [
  {
    id: "personalized-magazine",
    name: "8 pages-Personalized Magazine",
    price: "₹599",
    priceValue: 599,
    category: "Magazines",
    description: "Your story, your magazine",
    longDescription: "Transform your precious memories into a stunning, professionally designed magazine. Each page tells a chapter of your unique story, filled with photos, messages, and heartfelt moments that will be cherished forever.",
    features: [
      "8 pages of premium quality print",
      "Fully customizable layouts",
      "Glossy or matte finish options",
      "Gift-ready packaging",
      "Digital proof before printing"
    ],
    images: [
      "/products/magazine1.jpg",
      "/products/magazine2.jpg",
      
    ],
    occasion: ["Birthday", "Anniversary", "Wedding", "Graduation", "bachellorete"]
  }, 
  {
    id: "handmade-flower-bouquet",
    name: "Handmade Flower Bouquet",
    price: "₹750",
    priceValue: 750,
    category: "Flowers",
    description: "Everlasting  blooms",
    longDescription: "Handcrafted with love, these beautiful pipe cleaner flowers will never wilt. Each petal is carefully shaped and colored to create a stunning bouquet that captures the beauty of nature without the expiry date.",
    features: [
      "Handmade with pipe cleaners",
      "Lasts forever ",
      "Customizable colors",
      "medium size- 5 flowers "
     
    ],
    images: [
      "/products/bouquet.jpeg",
      "/products/mini flower.jpeg",
    ],
    occasion: ["Birthday", "Anniversary", "Proposal", "Friendship" , "thank you",]
  },
  {
    id: "flower-cards",
    name: "Flower Cards",
    price: "₹249",
    priceValue: 249,
    category: "Cards",
    description: "cards that bloom",
    longDescription: "Express your feelings with our unique flower-embedded memory cards. Each card features real pressed flowers and a space for your heartfelt message, creating a keepsake that's as beautiful as your words.",
    features: [
      "Real pressed flowers",
      "Handwritten message space",
      "Set of 5 unique colors cards",
      
    ],
    images: [
      "/products/flower card.jpg",
      "/products/flower card.jpeg",
      "/products/c4.jpeg",
    ],
    occasion: ["Friendship", "Thank You", "Get Well Soon", "Just Because"]
  },
  {
    id: "12 page magazine",
    name: "12 page personalized magazine",
    price: "₹999",
    priceValue: 999,
    category: "magazine",
    description: "Your story, your magazine",
    longDescription: "Transform your precious memories into a stunning, professionally designed magazine. Each page tells a chapter of your unique story, filled with photos, messages, and heartfelt moments that will be cherished forever.",
    features: [
      "8 pages of premium quality print",
      "Fully customizable layouts",
      "Glossy or matte finish options",
      "Gift-ready packaging",
      "Digital proof before printing"
    ],
    images: [
     "/products/bachmagz.jpeg",
      "/products/bday magz.jpeg",
    ],
    occasion: ["Birthday", "Anniversary", "Wedding", "Farewell"]
  },
  {
    id: "poloroids",
    name: "poloroids & photostrips",
    price: "₹99",
    priceValue: 99,
    category: "poloroids",
    description: "Your memories, beautifully bound",
    longDescription: "A handcrafted scrapbook that tells your unique story. Filled with photos, tickets, notes, and decorations, each page is a work of art that captures the essence of your precious moments together.",
    features: [
      "30+ decorated pages",
      "Premium hardcover binding",
      "Interactive elements",
      "Customized theme & colors",
      "Space for future additions"
    ],
    images: [
      "/products/p1.jpeg",
      "/products/p2.jpeg",
      "/products/p3.jpeg",
      "/products/p4.jpeg",
      "/products/p5.jpeg",
      "/products/bookmark.jpeg",
    ],
    occasion: ["Anniversary", "Wedding", "Travel", "Graduation"]
  },
  {
    id: "love-letter-kit",
    name: "Love Letter Kit",
    price: "₹449",
    priceValue: 449,
    category: "Kits",
    description: "Romance in an envelope",
    longDescription: "Everything you need to write the perfect love letter. This kit includes vintage-style stationery, wax seal materials, pressed flowers, and prompts to help you express your deepest feelings.",
    features: [
      "Premium vintage stationery",
      "Wax seal kit with initial stamp",
      "Pressed flower decorations",
      "Writing prompts booklet",
      "Ribbon-tied presentation"
    ],
    images: [
      "/products/vintage letter.jpg",
      "/products/letter.jpg",

    ],
    occasion: ["Anniversary", "Proposal", "Valentine's Day", "Long Distance"]
  },
  {
    id: "polaroid-gift-set",
    name: "Polaroid Gift Set",
    price: "₹649",
    priceValue: 649,
    category: "Photo Gifts",
    description: "Instant memories, lasting love",
    longDescription: "A curated collection of your favorite photos printed in classic Polaroid style. Each photo comes with a handwritten caption space and is presented in a beautiful display frame or string lights setup.",
    features: [
      "20 Polaroid-style prints",
      "Wooden photo clips included",
      "Fairy lights for display",
      "Caption stickers included",
      "Gift box presentation"
    ],
    images: [
      "/products/newspaper1.jpeg",
      "/products/newspaper2.jpeg",
    ],
    occasion: ["Birthday", "Friendship", "Graduation", "Housewarming"]
  },
  {
    id: "polaroid-gift-set",
    name: "Polaroid Gift Set",
    price: "₹649",
    priceValue: 649,
    category: "Photo Gifts",
    description: "Instant memories, lasting love",
    longDescription: "A curated collection of your favorite photos printed in classic Polaroid style. Each photo comes with a handwritten caption space and is presented in a beautiful display frame or string lights setup.",
    features: [
      "20 Polaroid-style prints",
      "Wooden photo clips included",
      "Fairy lights for display",
      "Caption stickers included",
      "Gift box presentation"
    ],
    images: [
      "/products/flower frame.jpg",
      "/products/flower frame 2.jpg",
    ],
    occasion: ["Birthday", "Friendship", "Graduation", "Housewarming"]
  },
  {
    id: "custom-calendar",
    name: "Custom Calendar",
    price: "₹549",
    priceValue: 549,
    category: "Calendars",
    description: "365 days of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/flower pot.jpg",
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "bookmark",
    name: "bookmark",
    price: "₹99",
    priceValue:99,
    category: "customised bookmark",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/bookmark.jpeg",
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/valentine.jpeg",
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/mom magazine.jpeg",
      "/products/mom magz.jpeg",
      "/products/mom magazine(2).jpeg",
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/col1.jpeg",
      "/products/col2.jpeg",
      "/products/col3.jpeg",
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/firstbday.jpeg",
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/flower +letter.jpeg",
     
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/folwer card 2.jpeg",
      
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
  {
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/frame.jpeg",
     
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
{
    id: "flower",
    name: "valentine flower",
    price: "₹750",
    priceValue:750,
    category: "handmade bouquet",
    description: "bookmark of memories",
    longDescription: "Start each day with a smile! Our custom photo calendars feature your favorite memories for each month, complete with important dates marked and personalized captions.",
    features: [
      "12 months of photos",
      "Mark special dates",
      "Desk or wall mount options",
      "High-quality print",
      "Personalized cover"
    ],
    images: [
      "/products/flowerframe.jpeg",
      
      
    ],
    occasion: ["New Year", "Birthday", "Corporate", "Family"]
  },
];


export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentId: string, limit: number = 4): Product[] => {
  return products.filter(product => product.id !== currentId).slice(0, limit);
};
