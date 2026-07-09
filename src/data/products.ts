export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: {
    paperTypes: string[];
    gsm: string[];
    sizes: string[];
    handles: string[];
    printing: string[];
    finishes: string[];
  };
  applications: string[];
  customizationOptions: string[];
}

export const products: Product[] = [
  {
    slug: "ready-to-deliver",
    title: "Ready to Deliver",
    shortDescription:
      "Pre-made paper bags available for immediate dispatch with standard sizes and designs.",
    description:
      "Our ready-to-deliver paper bags are perfect for businesses that need quality packaging without the wait. Available in a wide range of standard sizes, colors, and finishes, these bags are manufactured with the same premium quality as our custom orders and can be dispatched within 24 hours.",
    image: "/products/ready-to-deliver/1.png",
    gallery: [
      "/products/ready-to-deliver/1.png",
      "/products/ready-to-deliver/2.png",
      "/products/ready-to-deliver/3.png",
    ],
    specifications: {
      paperTypes: ["Brown Kraft", "White Kraft"],
      gsm: ["150 GSM", "180 GSM", "200 GSM"],
      sizes: ["Small (8×10×4)", "Medium (12×16×4)", "Large (16×22×6)"],
      handles: ["Twist Handle", "Flat Handle"],
      printing: ["Plain", "Single Color"],
      finishes: ["Matte", "Natural"],
    },
    applications: ["Retail", "Grocery", "Takeaway", "General Purpose"],
    customizationOptions: [
      "Size selection",
      "Handle type",
      "Color variants",
    ],
  },
  {
    slug: "brown-kraft",
    title: "Brown Kraft",
    shortDescription:
      "Classic natural kraft paper bags with a rustic, eco-friendly aesthetic.",
    description:
      "Our Brown Kraft Paper Bags embody the essence of sustainable packaging. Made from premium virgin kraft paper, these bags offer exceptional strength and durability while maintaining an organic, natural aesthetic. Perfect for brands that value authenticity and environmental consciousness.",
    image: "/products/brown-kraft/1.png",
    gallery: [
      "/products/brown-kraft/1.png",
      "/products/brown-kraft/2.png",
      "/products/brown-kraft/3.png",
    ],
    specifications: {
      paperTypes: ["Virgin Brown Kraft", "Recycled Brown Kraft"],
      gsm: ["120 GSM", "150 GSM", "180 GSM", "200 GSM", "230 GSM"],
      sizes: ["Custom sizes available", "Small to Extra Large"],
      handles: ["Paper Twist", "Flat Paper", "Cotton Rope", "Ribbon"],
      printing: ["Flexo", "Offset", "Screen", "Digital"],
      finishes: ["Natural", "Matte Lamination", "Spot UV"],
    },
    applications: [
      "Retail",
      "Food Service",
      "Boutiques",
      "Organic Stores",
      "Cafes",
    ],
    customizationOptions: [
      "Custom size",
      "Logo printing",
      "Handle selection",
      "GSM choice",
      "Die-cut windows",
    ],
  },
  {
    slug: "bleached-kraft",
    title: "Bleached Kraft",
    shortDescription:
      "Pristine white kraft bags delivering a clean, premium presentation.",
    description:
      "Bleached Kraft Paper Bags provide a pristine white canvas for your brand. The clean surface ensures vibrant print quality, making your logo and artwork stand out beautifully. These bags combine the strength of kraft paper with the elegance of a refined white finish.",
    image: "/products/bleached-kraft/1.png",
    gallery: [
      "/products/bleached-kraft/1.png",
      "/products/bleached-kraft/2.png",
      "/products/bleached-kraft/3.png",
    ],
    specifications: {
      paperTypes: ["Bleached White Kraft"],
      gsm: ["150 GSM", "180 GSM", "200 GSM", "230 GSM"],
      sizes: ["Custom sizes available"],
      handles: [
        "Paper Twist",
        "Flat Paper",
        "Cotton Rope",
        "Ribbon",
        "Satin Ribbon",
      ],
      printing: [
        "Flexo",
        "Offset",
        "Screen",
        "Digital",
        "Hot Foil Stamping",
      ],
      finishes: ["Matte", "Gloss", "Spot UV", "Embossing", "Debossing"],
    },
    applications: [
      "Luxury Retail",
      "Fashion",
      "Jewellery",
      "Cosmetics",
      "Corporate Events",
    ],
    customizationOptions: [
      "Custom size",
      "Full color printing",
      "Foil stamping",
      "Embossing",
      "Special handles",
    ],
  },
  {
    slug: "mid-premium",
    title: "Mid Premium",
    shortDescription:
      "Balanced premium paper bags combining refined styling with cost-efficiency.",
    description:
      "Our Mid Premium Paper Bags bridge the gap between everyday packaging and high-end luxury. Made from durable medium-weight boards or heavy-duty kraft paper, these bags feature excellent surface finishes and comfortable cotton rope or ribbon handles. Ideal for retailers seeking a premium aesthetic at an optimized price point.",
    image: "/products/mid-premium/1.png",
    gallery: [
      "/products/mid-premium/1.png",
      "/products/mid-premium/2.png",
      "/products/mid-premium/3.png",
    ],
    specifications: {
      paperTypes: [
        "Art Paper",
        "Ivory Board",
        "High GSM Kraft with Coating",
      ],
      gsm: ["180 GSM", "200 GSM", "220 GSM"],
      sizes: ["Custom sizes available"],
      handles: ["Cotton Rope", "Ribbon", "Flat Paper Handle"],
      printing: ["CMYK Offset", "Pantone Matching", "Screen Printing"],
      finishes: [
        "Matte Varnish",
        "Aqueous Coating",
        "Subtle Foil Stamping",
      ],
    },
    applications: [
      "Apparel Stores",
      "Specialty Boutiques",
      "Gourmet Food Shops",
      "Corporate Giveaways",
    ],
    customizationOptions: [
      "Custom size",
      "Internal board reinforcement",
      "Eyelet choice",
      "Handle length",
    ],
  },
  {
    slug: "premium",
    title: "Premium",
    shortDescription:
      "Ultra-luxury paper bags with exquisite finishes for high-end brands.",
    description:
      "Our Premium Paper Bags are designed for brands that accept nothing but the best. Featuring superior paper quality, impeccable printing, and luxurious finishing options, these bags create an unforgettable unboxing experience. Every detail is crafted to communicate exclusivity and sophistication.",
    image: "/products/premium/1.png",
    gallery: [
      "/products/premium/1.png",
      "/products/premium/2.png",
      "/products/premium/3.png",
    ],
    specifications: {
      paperTypes: ["Premium Art Paper", "Textured Paper", "Specialty Papers"],
      gsm: ["250 GSM", "300 GSM", "350 GSM"],
      sizes: ["Custom sizes available"],
      handles: [
        "Satin Ribbon",
        "Grosgrain Ribbon",
        "Leather Handles",
        "Velvet Cord",
      ],
      printing: [
        "High-definition Offset",
        "Pantone Matching",
        "Multi-layer Foiling",
      ],
      finishes: [
        "Soft Touch Matte",
        "Spot UV",
        "Multi-color Foil",
        "Deep Embossing",
        "Debossing",
        "Textured Finish",
      ],
    },
    applications: [
      "Luxury Brands",
      "High-end Jewellery",
      "Premium Fashion",
      "Exclusive Events",
      "VIP Corporate",
    ],
    customizationOptions: [
      "Bespoke design",
      "Premium finishes",
      "Luxury handles",
      "Custom inserts",
      "Magnetic closures",
    ],
  },
  {
    slug: "niche",
    title: "Niche",
    shortDescription:
      "Bespoke, custom-tailored packaging solutions for unique and specialized products.",
    description:
      "Niche Paper Bags are developed for products requiring custom shapes, dimensions, structures, or unique opening mechanisms. Whether it is wine bottle packaging, triangular gift box bags, or custom die-cut windows, we design and manufacture unique shapes tailored to your product.",
    image: "/products/niche/1.png",
    gallery: [
      "/products/niche/1.png",
      "/products/niche/2.png",
      "/products/niche/3.png",
    ],
    specifications: {
      paperTypes: [
        "Textured Specialty Stock",
        "Recycled Board",
        "Composite Paper",
      ],
      gsm: ["200 GSM", "250 GSM", "300 GSM", "400 GSM"],
      sizes: ["Custom shapes & dimensions"],
      handles: [
        "Integrated Die-cut",
        "Leather Cord",
        "Jute Rope",
        "Hidden Magnets",
      ],
      printing: ["Debossed Letterpress", "Hot Stamping", "Spot Gloss UV"],
      finishes: [
        "Custom Die-cutting",
        "Textured Lamination",
        "Ribbon Closure Tie",
      ],
    },
    applications: [
      "Wineries & Distilleries",
      "Artisanal Gift Shops",
      "Luxury Cosmetics",
      "Collectible Items",
    ],
    customizationOptions: [
      "Bespoke structural design",
      "Custom window cut-outs",
      "Unique closure systems",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const productCategories = products.map((p) => ({
  slug: p.slug,
  title: p.title,
  shortDescription: p.shortDescription,
  image: p.image,
}));
