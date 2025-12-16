// components/FbclidCapture.tsx
'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function FbclidCaptureContent() {
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const fbclid = searchParams.get('fbclid')
    
    if (fbclid) {
      const fbc = `fb.1.${Date.now()}.${fbclid}`
      document.cookie = `_fbc=${fbc}; max-age=7776000; path=/`
    }
  }, [searchParams])
  
  return null
}

export function FbclidCapture() {
  return (
    <Suspense fallback={null}>
      <FbclidCaptureContent />
    </Suspense>
  )
}