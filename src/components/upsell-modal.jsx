"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Check, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"

export default function UpsellModal({ open, onClose, products, mainProduct, selectedColor }) {
  const [selectedUpsells, setSelectedUpsells] = useState([])
  const { addToCart } = useCart()

  const toggleUpsell = (productId) => {
    setSelectedUpsells((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const upsellTotal = products.filter((p) => selectedUpsells.includes(p.id)).reduce((sum, p) => sum + p.price, 0)
  const grandTotal = mainProduct.price + upsellTotal

  const handleAddUpsells = () => {
    products
      .filter((p) => selectedUpsells.includes(p.id))
      .forEach((p) => {
        const color = p.colors ? p.colors[0] : { name: "Default", value: "#000", image: p.image }
        const size = p.sizes ? p.sizes[0] : "One Size"
        addToCart(p, color, size)
      })
    onClose()
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-accent/10">
              <Check className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">Added to Cart!</h2>
              <p className="text-sm text-muted-foreground">Complete your look</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-muted transition-colors">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Main Product */}
        <div className="p-6 border-b border-border bg-muted/30">
          <div className="flex gap-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted">
              <Image
                src={selectedColor?.image || "/placeholder.svg"}
                alt={mainProduct.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground">{mainProduct.name}</h3>
              <p className="text-sm text-muted-foreground">{selectedColor?.name}</p>
              <p className="mt-1 font-semibold text-foreground">${mainProduct.price}</p>
            </div>
          </div>
        </div>

        {/* Upsell Products */}
        <div className="p-6">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
            Frequently Bought Together
          </h3>
          <div className="space-y-3">
            {products.map((product) => {
              const isSelected = selectedUpsells.includes(product.id)
              const productImage = product.colors ? product.colors[0].image : product.image
              return (
                <button
                  key={product.id}
                  onClick={() => toggleUpsell(product.id)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left",
                    isSelected ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground",
                  )}
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image src={productImage || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{product.name}</h4>
                    <p className="text-sm font-semibold text-primary">${product.price}</p>
                  </div>
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all",
                      isSelected ? "bg-primary border-primary" : "border-border",
                    )}
                  >
                    {isSelected ? (
                      <Check className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <Plus className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="text-2xl font-bold text-foreground">${grandTotal}</span>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 bg-transparent" onClick={onClose}>
              Continue Shopping
            </Button>
            <Link href="/cart" className="flex-1">
              <Button className="w-full gap-2" onClick={handleAddUpsells}>
                <ShoppingBag className="h-4 w-4" />
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
