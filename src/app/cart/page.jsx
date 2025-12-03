"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/data"
import { Minus, Plus, X, ShoppingBag, ArrowRight, Tag, Truck } from "lucide-react"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart()

  const shippingThreshold = 100
  const freeShipping = cartTotal >= shippingThreshold
  const amountToFreeShipping = shippingThreshold - cartTotal
  const shipping = freeShipping ? 0 : 9.99
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  // Cross-sell products
  const crossSellProducts = products.filter((p) => !cartItems.some((item) => item.id === p.id)).slice(0, 4)

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you have not added anything to your cart yet. Start shopping to fill it up!
              </p>
              <Link href="/collections">
                <Button size="lg">Start Shopping</Button>
              </Link>
            </div>

            {/* Suggestions */}
            <div className="mt-20">
              <h2 className="text-xl font-semibold text-foreground mb-8">Popular Items</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
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
            <span className="text-foreground">Shopping Cart</span>
          </nav>

          <h1 className="text-3xl font-bold text-foreground mb-8">
            Shopping Cart ({cartCount} {cartCount === 1 ? "item" : "items"})
          </h1>

          {/* Free Shipping Progress */}
          {!freeShipping && (
            <div className="mb-8 p-4 rounded-xl bg-muted/50 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">
                  Add <span className="font-semibold">${amountToFreeShipping.toFixed(2)}</span> more to get{" "}
                  <span className="font-semibold text-accent">FREE shipping!</span>
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((cartTotal / shippingThreshold) * 100, 100)}%` }}
                />
              </div>
            </div>
          )}

          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedColor.name}-${item.selectedSize}`}
                    className="flex gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="relative w-24 h-32 rounded-lg overflow-hidden bg-muted shrink-0">
                      <Image
                        src={item.selectedColor.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link
                            href={`/products/${item.id}`}
                            className="font-medium text-foreground hover:text-primary"
                          >
                            {item.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.selectedColor.name} / {item.selectedSize}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedColor.name, item.selectedSize)}
                          className="p-1 hover:bg-muted rounded transition-colors"
                        >
                          <X className="h-5 w-5 text-muted-foreground" />
                        </button>
                      </div>
                      <div className="flex items-end justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.selectedColor.name, item.selectedSize, item.quantity - 1)
                            }
                            className="p-1 rounded border border-border hover:bg-muted transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-10 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.selectedColor.name, item.selectedSize, item.quantity + 1)
                            }
                            className="p-1 rounded border border-border hover:bg-muted transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                          {item.originalPrice && (
                            <p className="text-sm text-muted-foreground line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  Have a promo code?
                </h3>
                <div className="flex gap-3">
                  <Input placeholder="Enter promo code" className="flex-1" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="mt-8 lg:mt-0">
              <div className="sticky top-24 p-6 rounded-xl bg-card border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={`font-medium ${freeShipping ? "text-accent" : "text-foreground"}`}>
                      {freeShipping ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link href="/checkout" className="block mt-6">
                  <Button size="lg" className="w-full gap-2">
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Taxes and shipping calculated at checkout
                </p>
              </div>
            </div>
          </div>

          {/* Cross-sell Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {crossSellProducts.map((product) => (
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
