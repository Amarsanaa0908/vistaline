"use client"

import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext(undefined)

export function CartProvider({ children }) {
 const [cartItems, setCartItems] = useState(() => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem("vistaline-cart")
    return savedCart ? JSON.parse(savedCart) : []
  }
  return []
})
const [isLoaded, setIsLoaded] = useState(true)

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("vistaline-cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isLoaded])

  const addToCart = (product, selectedColor, selectedSize, quantity = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedColor.name === selectedColor.name &&
          item.selectedSize === selectedSize,
      )

      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += quantity
        return updated
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          selectedColor,
          selectedSize,
          quantity,
        },
      ]
    })
  }

  const removeFromCart = (id, colorName, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedColor.name === colorName && item.selectedSize === size)),
    )
  }

  const updateQuantity = (id, colorName, size, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, colorName, size)
      return
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedColor.name === colorName && item.selectedSize === size
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isLoaded,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
