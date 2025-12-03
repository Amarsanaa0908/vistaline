"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { Heart, ShoppingBag, Trash2 } from "lucide-react"

export default function WishlistPage() {
  // In a real app, this would come from a database or localStorage
  const [wishlistItems, setWishlistItems] = useState(products.slice(0, 3))

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const recommendedProducts = products.filter((p) => !wishlistItems.some((item) => item.id === p.id)).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Wishlist</span>
          </nav>

          <h1 className="text-3xl font-bold text-foreground mb-8">
            My Wishlist ({wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"})
          </h1>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Heart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Wishlist is Empty</h2>
              <p className="text-muted-foreground mb-8">
                Save items you love by clicking the heart icon on any product.
              </p>
              <Link href="/collections">
                <Button size="lg">Start Shopping</Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Wishlist Items */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {wishlistItems.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-card rounded-2xl border border-border overflow-hidden"
                  >
                    <Link href={`/products/${product.id}`}>
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={product.colors[0].image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.badge && (
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                            {product.badge}
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-semibold text-foreground">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/products/${product.id}`} className="flex-1">
                          <Button className="w-full gap-2" size="sm">
                            <ShoppingBag className="h-4 w-4" />
                            View Product
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromWishlist(product.id)}
                          className="px-3"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Recommended Products */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
