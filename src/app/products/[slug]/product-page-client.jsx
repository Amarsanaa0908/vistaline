"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import UpsellModal from "@/components/upsell-modal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Star, Truck, Shield, RefreshCw, Check, Heart, Share2, ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function ProductPageClient({ product, relatedProducts, upsellProductsData }) {
  const { addToCart } = useCart()

  const hasColors = product?.colors && product.colors.length > 0
  const hasSizes = product?.sizes && product.sizes.length > 0
  const hasImages = product?.images && product.images.length > 0

  const [selectedColor, setSelectedColor] = useState(hasColors ? product.colors[0] : null)
  const [selectedSize, setSelectedSize] = useState(
    hasSizes ? (product.sizes.length === 1 ? product.sizes[0] : null) : "default",
  )
  const [showUpsell, setShowUpsell] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link href="/collections" className="text-primary hover:underline">
            Browse all products
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  let thumbnails = []

  if (hasImages) {
    // Product has an images array (no-variant product)
    thumbnails = product.images
  } else if (hasColors && selectedColor?.image) {
    // Product has color variants - use selected color image + placeholders
    thumbnails = [
      selectedColor.image,
      `/placeholder.svg?height=600&width=500&query=${product.name} back view`,
      `/placeholder.svg?height=600&width=500&query=${product.name} detail`,
      `/placeholder.svg?height=600&width=500&query=${product.name} styled`,
    ]
  } else {
    // Fallback to product.image or placeholders
    const mainImg = product.image || `/placeholder.svg?height=600&width=500&query=${product.name}`
    thumbnails = [
      mainImg,
      `/placeholder.svg?height=600&width=500&query=${product.name} back view`,
      `/placeholder.svg?height=600&width=500&query=${product.name} detail`,
      `/placeholder.svg?height=600&width=500&query=${product.name} styled`,
    ]
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize === "default" ? null : selectedSize)
    setShowUpsell(true)
  }

  const canAddToCart = hasSizes ? selectedSize !== null : true

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setActiveImageIndex(0)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/collections/${product.collection}`} className="hover:text-foreground capitalize">
              {product.collection}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Gallery */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={cn(
                      "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                      activeImageIndex === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-muted-foreground",
                    )}
                  >
                    <Image src={thumb || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="relative flex-1 aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={thumbnails[activeImageIndex] || "/placeholder.svg"}
                  alt={selectedColor ? `${selectedColor.name} ${product.name}` : product.name}
                  fill
                  className="object-cover transition-all duration-300"
                  priority
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {product.originalPrice
                      ? `${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF`
                      : product.badge}
                  </div>
                )}
                {/* Image Navigation */}
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
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
                      {product.rating} ({product.reviews} сэтгэгдэл)
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="text-3xl font-bold text-foreground">{product.price} төг</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        Save ${product.originalPrice - product.price}
                      </span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Color Selection - only show if product has colors */}
              {hasColors && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Color</span>
                    <span className="text-sm text-muted-foreground">{selectedColor?.name}</span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(color)}
                        className={cn(
                          "relative w-12 h-12 rounded-full transition-all",
                          selectedColor?.name === color.name
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                            : "hover:ring-2 hover:ring-muted-foreground hover:ring-offset-2 hover:ring-offset-background",
                        )}
                        style={{ backgroundColor: color.value }}
                        aria-label={`Select ${color.name} color`}
                      >
                        {selectedColor?.name === color.name && (
                          <Check className="absolute inset-0 m-auto h-5 w-5 text-primary-foreground drop-shadow-md" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection - only show if product has sizes */}
              {hasSizes && (
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
                          "min-w-[64px] h-12 px-4 rounded-lg border-2 font-medium transition-all",
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
              )}

              {/* Add to Cart */}
              <div className="flex gap-4 pt-2">
                <Button
                  size="lg"
                  className="flex-1 h-14 text-base font-semibold"
                  onClick={handleAddToCart}
                  disabled={!canAddToCart}
                >
                  {hasSizes && !selectedSize ? "Select a Size" : "Add to Cart"}
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-6 bg-transparent">
                  <Heart className="h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-6 bg-transparent">
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">Үнэгүй хүргэлт</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">Буцаах боломжтой</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">1 жил баталгаа</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">Authentic Product</span>
                </div>
              </div>

              {/* Product Features List */}
              {product.features && product.features.length > 0 && (
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
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-20">
              <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />

      <UpsellModal
        open={showUpsell}
        onClose={() => setShowUpsell(false)}
        products={upsellProductsData}
        mainProduct={product}
        selectedColor={selectedColor}
      />
    </div>
  )
}
