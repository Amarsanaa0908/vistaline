"use client"

import { Star, Truck, Shield, RefreshCw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProductInfo({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  onAddToCart,
}) {
  return (
    <div className="flex flex-col gap-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Men</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">Sweaters</span>
      </nav>

      {/* Title & Price */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">{product.name}</h1>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground",
                )}
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        </div>
        <div className="flex items-baseline gap-3 mt-4">
          <span className="text-3xl font-bold text-foreground">${product.price}</span>
          <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
          <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
            Save ${product.originalPrice - product.price}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">{product.description}</p>

      {/* Color Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Color</span>
          <span className="text-sm text-muted-foreground">{selectedColor.name}</span>
        </div>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={cn(
                "relative w-12 h-12 rounded-full transition-all",
                selectedColor.name === color.name
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "hover:ring-2 hover:ring-muted-foreground hover:ring-offset-2 hover:ring-offset-background",
              )}
              style={{ backgroundColor: color.value }}
              aria-label={`Select ${color.name} color`}
            >
              {selectedColor.name === color.name && (
                <Check className="absolute inset-0 m-auto h-5 w-5 text-primary-foreground drop-shadow-md" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Size</span>
          <button className="text-sm text-primary hover:underline">Size Guide</button>
        </div>
        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "w-16 h-12 rounded-lg border-2 font-medium transition-all",
                selectedSize === size
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary",
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex gap-4 pt-2">
        <Button
          size="lg"
          className="flex-1 h-14 text-base font-semibold"
          onClick={onAddToCart}
          disabled={!selectedSize}
        >
          {selectedSize ? "Add to Cart" : "Select a Size"}
        </Button>
        <Button size="lg" variant="outline" className="h-14 px-6 bg-transparent">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </Button>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
          <Truck className="h-5 w-5 text-primary" />
          <span className="text-sm text-foreground">Free Shipping</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
          <RefreshCw className="h-5 w-5 text-primary" />
          <span className="text-sm text-foreground">30-Day Returns</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm text-foreground">2-Year Warranty</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
          <Check className="h-5 w-5 text-primary" />
          <span className="text-sm text-foreground">Authentic Product</span>
        </div>
      </div>

      {/* Product Features List */}
      <div className="pt-4 border-t border-border">
        <h3 className="text-sm font-medium text-foreground mb-3">Product Features</h3>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
