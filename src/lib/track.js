// Wiring of lib/trackCore.js to our real callPost and apiList.
import { apiList, callPost } from '@/axios/api'
import { pixel } from '@/lib/pixel'
import { createTracker } from '@/lib/trackCore'

// The server copy (Conversions API) stays off until the Go route exists.
// Set NEXT_PUBLIC_META_SERVER_EVENTS=true to turn it on (inlined at build time).
const serverEnabled = process.env.NEXT_PUBLIC_META_SERVER_EVENTS === 'true'

const tracker = createTracker({
  post: serverEnabled ? (url, body) => callPost(url, body) : () => undefined,
  endpoint: apiList.track,
  pixel,
  onError: (err) => {
    if (process.env.NODE_ENV !== 'production') console.warn('[track] server copy failed', err)
  },
})

/**
 * track('ViewContent' | 'AddToCart' | 'InitiateCheckout' | 'AddPaymentInfo', items)
 * items: [{ id, price, quantity }]
 * Purchase is NOT sent from the browser. The Go API sends it after the QPay callback.
 */
export const track = tracker.track

/** { fbp, fbc, url } to include in the request that creates the order/checkout. */
export const getTrackingParams = tracker.getTrackingParams
