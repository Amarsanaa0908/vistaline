"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
        <Image
          src={product.colors[0].image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <div
            className={cn(
              "absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium",
              product.badge === "Sale"
                ? "bg-destructive text-white"
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
          <Button className="w-full gap-2" onClick={(e) => e.preventDefault()}>
            <ShoppingBag className="h-4 w-4" />
            Quick View
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
    </Link>
  )
}
