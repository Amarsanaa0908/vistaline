'use client'
import { useEffect, useRef } from 'react'
import { track } from '@/lib/track'

export function useViewContent(product) {
  const sentFor = useRef(null)
  useEffect(() => {
    if (!product?.id || sentFor.current === product.id) return
    sentFor.current = product.id
    track('ViewContent', [{ id: product.id, price: product.price, quantity: 1 }])
  }, [product?.id, product?.price])
}
