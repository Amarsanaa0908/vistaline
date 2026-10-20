"use client"

import { createContext, useContext, useCallback, useSyncExternalStore } from "react"

import { track } from "@/lib/track"

const CartContext = createContext(undefined)

const KEY = "vistaline-cart"
const EMPTY = []
const listeners = new Set()
let cache = { raw: null, value: EMPTY } // keeps the snapshot reference stable

function readCart() {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw !== cache.raw) cache = { raw, value: raw ? JSON.parse(raw) : EMPTY }
    return cache.value
  } catch {
    return EMPTY
  }
}

function writeCart(items) {
  try { localStorage.setItem(KEY, JSON.stringify(items)) } catch {}
  listeners.forEach((l) => l())
}

const subscribe = (cb) => {
  listeners.add(cb)
  window.addEventListener("storage", cb) // changes from other tabs
  return () => { listeners.delete(cb); window.removeEventListener("storage", cb) }
}
const subscribeNoop = () => () => {}

export function CartProvider({ children }) {
const cartItems = useSyncExternalStore(subscribe, readCart, () => EMPTY)
const isLoaded = useSyncExternalStore(subscribeNoop, () => true, () => false)

const setCartItems = useCallback((next) => {
  writeCart(typeof next === "function" ? next(readCart()) : next)
}, [])

const addToCart = useCallback((product, selectedColor, selectedSize, quantity = 1) => {
setCartItems((prev) => {
  const colorName = selectedColor?.name || null
  const existingIndex = prev.findIndex(
    (item) =>
      item.id === product.id &&
      (item.selectedColor?.name || null) === colorName &&
      item.selectedSize === selectedSize,
)

if (existingIndex > -1) {
  const updated = [...prev]
  updated[existingIndex] = {
    ...updated[existingIndex],
    quantity: updated[existingIndex].quantity + quantity
  }
  return updated
}

return [
  ...prev,
  {
    id: product.id,
    name: product.name,
    price: product.price,
    image: selectedColor?.image || product.image || product.images?.[0],
    originalPrice: product.originalPrice,
    selectedColor: selectedColor || null,
    selectedSize,
    quantity,
  },
]
})

  track('AddToCart', [{ id: product.id, price: product.price, quantity }]) // outside the updater
}, [setCartItems])

  const removeFromCart = (id, colorName, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedColor?.name === colorName && item.selectedSize === size)),
    )
  }

  const updateQuantity = (id, colorName, size, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, colorName, size)
      return
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedColor?.name === colorName && item.selectedSize === size
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const clearCart = () => {
    setCartItems([])
    sessionStorage.removeItem("vl_ic")
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
