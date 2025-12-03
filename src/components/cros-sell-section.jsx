"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const crossSellProducts = [
  {
    id: 1,
    name: "Cashmere Blend Cardigan",
    price: 189,
    originalPrice: 249,
    rating: 4.7,
    reviews: 89,
    image: "/cashmere-cardigan-fashion.jpg",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Wool Blend Trousers",
    price: 129,
    originalPrice: null,
    rating: 4.5,
    reviews: 56,
    image: "/wool-blend-trousers-fashion.jpg",
    badge: null,
  },
  {
    id: 3,
    name: "Cotton Oxford Shirt",
    price: 89,
    originalPrice: 119,
    rating: 4.8,
    reviews: 142,
    image: "/cotton-oxford-shirt-fashion.jpg",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Leather Chelsea Boots",
    price: 249,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    image: "/leather-chelsea-boots-fashion.jpg",
    badge: "New",
  },
  {
    id: 5,
    name: "Merino Wool Beanie",
    price: 45,
    originalPrice: 59,
    rating: 4.6,
    reviews: 78,
    image: "/merino-wool-beanie-fashion.jpg",
    badge: null,
  },
  {
    id: 6,
    name: "Silk Pocket Square",
    price: 35,
    originalPrice: null,
    rating: 4.4,
    reviews: 34,
    image: "/silk-pocket-square-fashion.jpg",
    badge: null,
  },
]

export default function CrossSellSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction) => {
    const container = document.getElementById("cross-sell-container")
    if (container) {
      const scrollAmount = direction === "left" ? -320 : 320
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setScrollPosition(container.scrollLeft + scrollAmount)
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wide">You May Also Like</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground text-balance">Complete Your Wardrobe</h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll("left")} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll("right")} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          id="cross-sell-container"
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {crossSellProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:hidden">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn("w-2 h-2 rounded-full transition-colors", i === 0 ? "bg-primary" : "bg-border")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="flex-shrink-0 w-72 snap-start group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-card mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div
            className={cn(
              "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium",
              product.badge === "Sale"
                ? "bg-destructive text-destructive-foreground"
                : product.badge === "New"
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground",
            )}
          >
            {product.badge}
          </div>
        )}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 p-4 transition-all duration-300",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
          )}
        >
          <Button className="w-full gap-2">
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-semibold text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  )
}
