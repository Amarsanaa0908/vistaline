// Shared product and store data for the ecommerce store

import { Baby, Briefcase, Droplets, Gift, Hand, Leaf, Lightbulb, Moon, VolumeX, Zap } from "lucide-react"

export const products = [
  {
    id: "merino-wool-sweater",
    name: "Premium Merino Wool Sweater",
    price: 149,
    originalPrice: 199,
    description:
      "Crafted from the finest Italian merino wool, this sweater offers unparalleled softness and warmth. Perfect for layering or wearing alone, it features a classic crew neck and ribbed cuffs.",
    rating: 4.8,
    reviews: 127,
    category: "sweaters",
    collection: "men",
    colors: [
      { name: "Navy", value: "#1e3a5f", image: "/navy-blue-merino-wool-sweater-on-model.jpg" },
      { name: "Cream", value: "#f5f5dc", image: "/cream-beige-merino-wool-sweater-on-model.jpg" },
      { name: "Forest", value: "#228b22", image: "/forest-green-merino-wool-sweater-on-model.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["100% Italian Merino Wool", "Temperature regulating", "Naturally odor resistant", "Machine washable"],
    badge: "Sale",
  },
  {
    id: "cashmere-cardigan",
    name: "Cashmere Blend Cardigan",
    price: 189,
    originalPrice: 249,
    description:
      "Luxurious cashmere blend cardigan with mother-of-pearl buttons. The perfect layering piece for any occasion.",
    rating: 4.7,
    reviews: 89,
    category: "cardigans",
    collection: "men",
    colors: [
      { name: "Charcoal", value: "#36454f", image: "/cashmere-cardigan-fashion.jpg" },
      { name: "Camel", value: "#c19a6b", image: "/camel-cashmere-cardigan.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["70% Cashmere, 30% Wool", "Mother-of-pearl buttons", "Ribbed cuffs and hem"],
    badge: "Bestseller",
  },
  {
    id: "wool-trousers",
    name: "Wool Blend Trousers",
    price: 129,
    originalPrice: null,
    description: "Tailored wool blend trousers with a modern slim fit. Perfect for both office and casual wear.",
    rating: 4.5,
    reviews: 56,
    category: "trousers",
    collection: "men",
    colors: [
      { name: "Navy", value: "#1e3a5f", image: "/wool-blend-trousers-fashion.jpg" },
      { name: "Grey", value: "#808080", image: "/grey-wool-trousers.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["60% Wool, 40% Polyester", "Tailored fit", "Side pockets"],
    badge: null,
  },
  {
    id: "oxford-shirt",
    name: "Cotton Oxford Shirt",
    price: 89,
    originalPrice: 119,
    description: "Classic oxford shirt in premium cotton. A wardrobe essential that pairs with everything.",
    rating: 4.8,
    reviews: 142,
    category: "shirts",
    collection: "men",
    colors: [
      { name: "White", value: "#ffffff", image: "/cotton-oxford-shirt-fashion.jpg" },
      { name: "Light Blue", value: "#add8e6", image: "/light-blue-oxford-shirt.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["100% Premium Cotton", "Button-down collar", "Regular fit"],
    badge: "Sale",
  },
  {
    id: "chelsea-boots",
    name: "Leather Chelsea Boots",
    price: 249,
    originalPrice: null,
    description: "Handcrafted leather Chelsea boots with elastic side panels. Timeless style meets modern comfort.",
    rating: 4.9,
    reviews: 203,
    category: "footwear",
    collection: "men",
    colors: [
      { name: "Black", value: "#000000", image: "/leather-chelsea-boots-fashion.jpg" },
      { name: "Brown", value: "#8b4513", image: "/brown-chelsea-boots.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["Full grain leather", "Elastic side panels", "Leather sole"],
    badge: "New",
  },
  {
    id: "wool-beanie",
    name: "Merino Wool Beanie",
    price: 45,
    originalPrice: 59,
    description: "Soft merino wool beanie that keeps you warm without the itch. Lightweight and breathable.",
    rating: 4.6,
    reviews: 78,
    category: "accessories",
    collection: "accessories",
    colors: [
      { name: "Navy", value: "#1e3a5f", image: "/merino-wool-beanie-fashion.jpg" },
      { name: "Charcoal", value: "#36454f", image: "/charcoal-wool-beanie.jpg" },
    ],
    sizes: ["One Size"],
    features: ["100% Merino Wool", "Breathable", "Lightweight"],
    badge: null,
  },
  {
    id: "silk-pocket-square",
    name: "Silk Pocket Square",
    price: 35,
    originalPrice: null,
    description: "Hand-rolled silk pocket square in a versatile pattern. The finishing touch to any blazer.",
    rating: 4.4,
    reviews: 34,
    category: "accessories",
    collection: "accessories",
    colors: [
      { name: "Burgundy", value: "#800020", image: "/silk-pocket-square-fashion.jpg" },
      { name: "Navy", value: "#1e3a5f", image: "/navy-silk-pocket-square.jpg" },
    ],
    sizes: ["One Size"],
    features: ["100% Silk", "Hand-rolled edges", "Made in Italy"],
    badge: null,
  },
  {
    id: "cashmere-scarf",
    name: "Амин тос",
    price: 10000,
    originalPrice: null,
    description: "Ultra-soft cashmere scarf that adds elegance to any outfit. Lightweight yet incredibly warm.",
    rating: 4.8,
    reviews: 112,
    category: "accessories",
    collection: "accessories",
    colors: [
      { name: "", value: "#808080", image: "/oil.jpeg" },
      // { name: "Camel", value: "#c19a6b", image: "/camel-cashmere-scarf.jpg" },
    ],
    sizes: [""],
    features: ["100% Cashmere", "Lightweight", "Incredibly soft"],
    badge: null,
  },
  {
    id: "leather-belt",
    name: "Premium Leather Belt",
    price: 59,
    originalPrice: null,
    description: "Full-grain leather belt with a brushed silver buckle. Built to last a lifetime.",
    rating: 4.7,
    reviews: 95,
    category: "accessories",
    collection: "accessories",
    colors: [
      { name: "Black", value: "#000000", image: "/premium-leather-belt.png" },
      { name: "Brown", value: "#8b4513", image: "/brown-leather-belt.png" },
    ],
    sizes: ["M", "L"],
    features: ["Full-grain leather", "Brushed silver buckle", "32mm width"],
    badge: null,
  },
  {
    id: "silk-blouse",
    name: "Silk Blouse",
    price: 159,
    originalPrice: 199,
    description: "Elegant silk blouse with a relaxed fit. Perfect for both work and evening occasions.",
    rating: 4.6,
    reviews: 67,
    category: "blouses",
    collection: "women",
    colors: [
      { name: "Ivory", value: "#fffff0", image: "/ivory-silk-blouse-woman.jpg" },
      { name: "Blush", value: "#de5d83", image: "/blush-pink-silk-blouse.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["100% Silk", "Relaxed fit", "Mother-of-pearl buttons"],
    badge: "Sale",
  },
  {
    id: "cashmere-sweater-women",
    name: "Women's Cashmere V-Neck",
    price: 179,
    originalPrice: null,
    description: "Luxuriously soft cashmere v-neck sweater. A timeless piece for your wardrobe.",
    rating: 4.9,
    reviews: 156,
    category: "sweaters",
    collection: "women",
    colors: [
      { name: "Camel", value: "#c19a6b", image: "/camel-cashmere-vneck-sweater-woman.jpg" },
      { name: "Black", value: "#000000", image: "/black-cashmere-vneck-sweater-woman.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["100% Cashmere", "V-neck design", "Ribbed trim"],
    badge: "Bestseller",
  },
  {
    id: "wool-coat-women",
    name: "Tailored Wool Coat",
    price: 349,
    originalPrice: 449,
    description: "Beautifully tailored wool coat with a classic silhouette. The perfect winter statement piece.",
    rating: 4.8,
    reviews: 89,
    category: "outerwear",
    collection: "women",
    colors: [
      { name: "Camel", value: "#c19a6b", image: "/camel-tailored-wool-coat-woman.jpg" },
      { name: "Black", value: "#000000", image: "/black-tailored-wool-coat-woman.jpg" },
    ],
    sizes: ["M", "L"],
    features: ["80% Wool, 20% Cashmere", "Fully lined", "Double-breasted"],
    badge: "Шинэ",
  },
  {
    id: "forest",
    name: "Forest aroma diffuser",
    price: 150000,
    originalPrice: 180000,
    description: "",
    rating: 4.9,
    reviews: 89,
    image: "/products/forest/forest6.png",
    images: ["/products/forest/forest4.png","/products/forest/forest2.png","/products/forest/forest3.png",]
  },
  {
    id: "raindrop-diffuser",
    name: "Raindrop aroma diffuser",
    price: 84500,
    originalPrice: 99500,
    description:
      "Rain Forest Humidifier таны гэрийн агаарыг зөөлөн чийглүүлж, амьсгалахад хялбар болгоно. Ультрасоник технологи нь усыг нарийн манан болгон тарааж, өрөөний агаарыг байгалийн ойн адил сэргээнэ. Өвөрмөц мөөгөн дизайн, борооны дусал эффект нь харахад тайвшруулна. 7 өнгийн LED гэрэл нь шөнийн гэрэл болж, хүүхдийн өрөөнд төгс тохирно.",
    rating: 4.7,
    reviews: 234,
    category: "accessories",
    collection: "accessories",
    // No colors or sizes - just an image array
    image: "/homepage/feature1.png",
    images: ["/homepage/feature1.png", "/homepage/feature2.png", "/homepage/feature3.png"],
    colors: [], // empty - no color variants
    sizes: [], // empty - no size variants
    features: ["280мл, 4 цаг ажиллана", "7 өнгө", "Удирдлагатай", "Автоматаар унтрана"],
    badge: "Шинэ",
    uuid: "c5e81692-71d9-4f70-91d3-93b8e95ce36a",
    reviews: [
      {
      id: 1,
      name: "Болормаа Б.",
      location: "Хан-Уул, Улаанбаатар",
      rating: 5,
      date: "2025.12.01",
      comment: "Хүүхдийн өрөөнд ашиглаж байна. Өмнө нь шөнөдөө ханиалгадаг байсан, одоо арай дээр болсон. Гэрэл нь бас гоё, унтахын өмнө асаадаг боллоо.",
      helpful: 12,
      verified: true,
      image: null,
    },
    {
      id: 2,
      name: "Тэмүүлэн Д.",
      location: "Баянзүрх, Улаанбаатар",
      rating: 5,
      date: "2025.11.28",
      comment: "Ээждээ бэлэг авч өгсөн. Өвлийн хуурай агаараас болж арьс нь хуурайшдаг байсан. Одоо өдөр бүр ашиглаж байна гэсэн. Дизайн нь бас өөр юмнаас ялгарч байгаа.",
      helpful: 8,
      verified: true,
      image: "/reviews/review1.jpeg",
    },
    {
      id: 3,
      name: "Ганзориг М.",
      location: "Сүхбаатар, Улаанбаатар",
      rating: 5,
      date: "2025.11.25",
      comment: "Оффисынхоо ширээн дээр тавьсан. Агаар хуурай байдаг газар ажилладаг болохоор яг хэрэгтэй зүйл байсан. Чимээгүй, гоё харагддаг.",
      helpful: 5,
      verified: true,
      image: null,
    },
    {
      id: 4,
      name: "Анужин Т.",
      location: "Чингэлтэй, Улаанбаатар",
      rating: 5,
      date: "2025.11.20",
      comment: "Хүргэлт хурдан байсан. Шалгаад төлөх боломжтой байсан нь сайн юм. Бараа яг зураг шигээ ирсэн.",
      helpful: 15,
      verified: true,
      image: "/reviews/review2.jpeg",
    },
  ],


faqs: [
  {
      question: "Хэр удаан ажиллах вэ?",
      answer: "Нэг удаа дүүргэхэд 4 цаг тасралтгүй ажиллана. 280мл багтаамжтай.",
    },
    {
      question: "Чимээтэй юу?",
      answer: "Үгүй. 35 дБ — энэ бол шивнэх дуунаас ч чимээгүй. Шөнөжин асааж унтаж болно.",
    },
    {
      question: "Арома тос хэрэглэж болох уу?",
      answer: "Тийм. Усанд уусдаг арома тос ашиглаж болно. Лаванда, мята, апельсин зэрэг дуртай үнэрээ нэмээрэй.",
    },
    {
      question: "Хүүхдийн өрөөнд ашиглаж болох уу?",
      answer: "Тийм. Хүүхдийн өрөөнд маш тохиромжтой. Шөнийн гэрэл + чийгшүүлэгч хоёр нэг дор.",
    },
    {
      question: "Яаж цэвэрлэх вэ?",
      answer: "Долоо хоног бүр усыг солиж, зөөлөн алчуураар арчина. Сар бүр цууны уусмалаар угааж болно.",
    },],
    specifications: [
      { label: "Багтаамж", value: "280мл" },
    { label: "Ажиллах хугацаа", value: "4 цаг" },
    { label: "Дуу чимээ", value: "35 дБ" },
    { label: "Тэжээл", value: "24V адаптер" },
    { label: "Материал", value: "ABS + PP" },
    { label: "LED гэрэл", value: "7 өнгө" },
    { label: "Удирдлага", value: "Мэдрэгчтэй товч" },
    { label: "Онцлог", value: "Автомат унтраалт" },
    { label: "Баталгаа", value: "1 жил" },
    ],
    features: [
      {
      icon: Droplets,
      title: "280мл багтаамж",
      description: "4 цаг тасралтгүй ажиллана",
    },
    {
      icon: Lightbulb,
      title: "7 өнгийн LED",
      description: "Шөнийн гэрэл болно",
    },
    {
      icon: Leaf,
      title: "Арома тараагч",
      description: "Дуртай үнэрээ нэмээрэй",
    },
    {
      icon: VolumeX,
      title: "35дБ чимээгүй",
      description: "Нойрыг сэрээхгүй",
    },
    {
      icon: Zap,
      title: "Автомат унтраалт",
      description: "Ус дуусвал унтарна",
    },
    {
      icon: Hand,
      title: "Мэдрэгч удирдлага",
      description: "Нэг хүрэлтээр удирдана",
    },
    ],
    audience: [
      {
      icon: Baby,
      title: "Хүүхэдтэй гэр бүлд",
      description: "Шөнийн гэрэл + эрүүл агаар нэг дор",
    },
    {
      icon: Moon,
      title: "Сайн нойрсохыг хүсвэл",
      description: "Чийглэг агаар = илүү гүн нойр",
    },
    {
      icon: Gift,
      title: "Бэлэг хайж байвал",
      description: "Өвөрмөц, хэрэгтэй, гоё",
    },
    {
      icon: Briefcase,
      title: "Оффисын ширээнд",
      description: "Хуурай оффисын агаарыг сэргээнэ",
    },
    ],
    boxContents: [
        "Rain Forest Humidifier (үндсэн төхөөрөмж)",
    "24V адаптер",
    "Хэрэглэх заавар",
    ]
  },
  {
    id: "cloud-tulip-mirror",
    name: "Алтанзул цэцэгт толь",
    price: 45000,
    originalPrice: null,
    image: "/products/tulip/tulip1.jpg",
    images: ["/products/tulip/tulip1.jpg", "/products/tulip/tulip2.jpg", "/products/tulip/tulip3.jpg"],
    reviews: [],
  }
]

export const collections = [
  {
    id: "men",
    name: "Men's Collection",
    description: "Timeless pieces crafted for the modern gentleman",
    image: "/mens-fashion-collection-elegant.jpg",
  },
  {
    id: "women",
    name: "Women's Collection",
    description: "Elegant essentials for the contemporary woman",
    image: "/womens-fashion-collection-elegant.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "The finishing touches that complete your look",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "The latest additions to our collection",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "sale",
    name: "Sale",
    description: "Premium quality at exceptional prices",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export const upsellProducts = [
  { id: "cashmere-scarf", name: "Амин тос", price: 10000, image: "/oil.jpeg" },
  // { id: "leather-belt", name: "Leather Belt", price: 59, image: "/premium-leather-belt.png" },
]

export const faqData = [
  {
    category: "Shipping & Delivery",
    questions: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. Free shipping is available on orders over $100.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days depending on the destination.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll receive a confirmation email with a tracking number. You can also track your order in your account dashboard or on our Track Order page.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for all unworn items with original tags attached. Items must be in their original condition.",
      },
      {
        question: "How do I exchange an item?",
        answer:
          "To exchange an item, please initiate a return and place a new order for the desired item. This ensures you get the item you want as quickly as possible.",
      },
      {
        question: "Are returns free?",
        answer:
          "Yes, returns are free for customers in the United States. International customers are responsible for return shipping costs.",
      },
    ],
  },
  {
    category: "Product & Sizing",
    questions: [
      {
        question: "How do I find my size?",
        answer:
          "We provide detailed size guides for each product category. You can find the size guide link on every product page. When in doubt, we recommend sizing up.",
      },
      {
        question: "What materials do you use?",
        answer:
          "We use only premium materials including Italian merino wool, Mongolian cashmere, and Egyptian cotton. Each product description includes full material details.",
      },
      {
        question: "How should I care for my items?",
        answer:
          "Care instructions are included on each product's label and product page. Most items are machine washable on gentle cycle, but we recommend dry cleaning for cashmere pieces.",
      },
    ],
  },
  {
    category: "Orders & Payment",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "Orders can be modified or cancelled within 1 hour of placement. After that, please contact our customer service team and we'll do our best to help.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.",
      },
    ],
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getProductsByCollection(collectionId) {
  if (collectionId === "new-arrivals") {
    return products.filter((p) => p.badge === "New")
  }
  if (collectionId === "sale") {
    return products.filter((p) => p.originalPrice)
  }
  return products.filter((p) => p.collection === collectionId)
}

export function getCollectionById(id) {
  return collections.find((c) => c.id === id)
}

export function searchProducts(query) {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery),
  )
}