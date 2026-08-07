/**
 * DEFAULT PRODUCT CATALOG
 * -----------------------------------------------------------
 * These products show on the site out of the box. Anyone can
 * add more from the "Manage Products" button on the Products
 * section (protected by the passcode in config.js) — new items
 * are saved in the visitor's browser (localStorage) and merge
 * with this list automatically.
 *
 * icon: one of the keys defined in ICONS (js/main.js)
 * -----------------------------------------------------------
 */

const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "Classic Tomato Ketchup",
    category: "Sauces & Ketchup",
    description: "Prepared from 100% real, sun-ripened red Pakistani tomatoes, blended with premium vinegar and traditional spices for a perfectly balanced tangy-sweet flavor.",
    price: 280,
    packaging: "500g Squeeze Bottle",
    features: ["Made with 100% Real Tomato Paste", "No Artificial Colors", "Thick & Rich Texture"],
    icon: "bottle",
    swatch: "oxblood",
    image: "https://images.pexels.com/photos/30682735/pexels-photo-30682735.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "p2",
    name: "Spicy Chili Garlic Sauce",
    category: "Sauces & Ketchup",
    description: "An authentic, hot Pakistani classic blending sun-dried red chilies with freshly crushed garlic cloves for the ultimate culinary kick.",
    price: 295,
    packaging: "500g Squeeze Bottle",
    features: ["Handpicked Red Chilies", "Pure Garlic Paste", "Spicy & Zesty Flavor"],
    icon: "bottle",
    swatch: "oxblood",
    image: "https://images.pexels.com/photos/33800365/pexels-photo-33800365.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "p3",
    name: "Creamy Premium Mayonnaise",
    category: "Mayonnaise",
    description: "Exquisitely rich, smooth, and ultra-creamy mayonnaise made from pasteurized farm-fresh eggs and high-grade vegetable oils.",
    price: 340,
    packaging: "450ml Glass Jar",
    features: ["Pasteurized Eggs", "Ultra-Creamy Formula", "Perfect Emulsification"],
    icon: "jar",
    swatch: "ivory"
  },
  {
    id: "p4",
    name: "All-Natural Strawberry Jam",
    category: "Jams & Spreads",
    description: "Bursting with real strawberry chunks picked fresh from the fields of Swat. Slowly simmered with organic pectin to preserve full fruit flavor.",
    price: 390,
    packaging: "400g Glass Jar",
    features: ["Over 55% Real Strawberries", "No Synthetic Flavors", "Packed with Fruit Chunks"],
    icon: "jar",
    swatch: "berry",
    image: "https://images.pexels.com/photos/48817/jam-preparations-jars-fruit-48817.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "p5",
    name: "Pure Chaunsa Mango Nectar",
    category: "Juices & Nectars",
    description: "Experience the true essence of Multan's king of fruits — a sweet, rich and intensely tropical refreshing drink.",
    price: 150,
    packaging: "1 Litre Family Pack",
    features: ["Authentic Chaunsa Pulp", "Rich in Vitamin C", "No Artificial Sweeteners"],
    icon: "glass",
    swatch: "amber",
    image: "https://images.pexels.com/photos/7377106/pexels-photo-7377106.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "p6",
    name: "Premium Sandalwood Syrup",
    category: "Syrups",
    description: "A traditional cooling distillate made with pure sandalwood extracts and vetiver — an age-old eastern summer drink.",
    price: 480,
    packaging: "800ml Premium Glass Bottle",
    features: ["Natural Sandalwood Distillate", "Incredibly Refreshing", "Classic Pakistani Recipe"],
    icon: "bottle",
    swatch: "emerald",
    image: "https://images.pexels.com/photos/10484519/pexels-photo-10484519.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "p7",
    name: "Mixed Vegetable Spicy Pickle",
    category: "Pickles (Achar)",
    description: "A nostalgic blend of green mangoes, carrots, lemons and green chilies, marinated in cold-pressed mustard oil with whole spices.",
    price: 420,
    packaging: "1kg Premium Jar",
    features: ["Pure Mustard Oil Preserved", "Grandmother's Recipe", "Aromatic Spice Blend"],
    icon: "pickle",
    swatch: "olive",
    image: "https://images.pexels.com/photos/8599631/pexels-photo-8599631.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "p8",
    name: "Golden Handpicked Almonds",
    category: "Dry Fruits",
    description: "Premium large-sized almonds sourced directly from the orchards of Gilgit-Baltistan — hand-sorted, crisp, sweet and nutritious.",
    price: 1200,
    packaging: "500g Airtight Pouch",
    features: ["100% Natural & Raw", "Rich in Vitamin E", "No Artificial Coating"],
    icon: "almond",
    swatch: "walnut",
    image: "https://images.pexels.com/photos/13002250/pexels-photo-13002250.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "p9",
    name: "Special Shahi Biryani Masala",
    category: "Spices & Masala",
    description: "A royal Pakistani blend of stone-ground spices — cardamom, cinnamon, mace and star anise — for rich aroma and authentic flavor.",
    price: 160,
    packaging: "100g Foil-Sealed Box",
    features: ["Stone-Ground Cold Processing", "No MSG or Fillers", "Foil-Sealed Freshness"],
    icon: "spice",
    swatch: "terracotta",
    image: "https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const PRODUCT_CATEGORIES = [
  "All",
  "Sauces & Ketchup",
  "Mayonnaise",
  "Jams & Spreads",
  "Juices & Nectars",
  "Syrups",
  "Pickles (Achar)",
  "Dry Fruits",
  "Spices & Masala"
];
