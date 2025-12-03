"use client"

import { useState } from "react"
import ProductGallery from "./product-gallery"
import ProductInfo from "./product-info"
import UpsellModal from "./upsell-modal"

const product = {
  id: 1,
  name: "Premium Merino Wool Sweater",
  price: 149,
  originalPrice: 199,
  description:
    "Crafted from the finest Italian merino wool, this sweater offers unparalleled softness and warmth. Perfect for layering or wearing alone, it features a classic crew neck and ribbed cuffs.",
  rating: 4.8,
  reviews: 127,
  colors: [
    {
      name: "Navy",
      value: "#1e3a5f",
      image: "/navy-blue-merino-wool-sweater-on-model.jpg",
    },
    {
      name: "Cream",
      value: "#f5f5dc",
      image: "/cream-beige-merino-wool-sweater-on-model.jpg",
    },
    {
      name: "Forest",
      value: "#228b22",
      image: "/forest-green-merino-wool-sweater-on-model.jpg",
    },
  ],
  sizes: ["M", "L"],
  features: ["100% Italian Merino Wool", "Temperature regulating", "Naturally odor resistant", "Machine washable"],
}

const upsellProducts = [
  {
    id: 101,
    name: "Cashmere Scarf",
    price: 79,
    image: "/luxury-cashmere-scarf.jpg",
  },
  {
    id: 102,
    name: "Leather Belt",
    price: 59,
    image: "/premium-leather-belt.png",
  },
]

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(null)
  const [showUpsell, setShowUpsell] = useState(false)

  const handleAddToCart = () => {
    setShowUpsell(true)
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ProductGallery selectedColor={selectedColor} colors={product.colors} />
          <ProductInfo
            product={product}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      <UpsellModal
        open={showUpsell}
        onClose={() => setShowUpsell(false)}
        products={upsellProducts}
        mainProduct={product}
        selectedColor={selectedColor}
      />
    </section>
  )
}
