// Safe wrapper around window.fbq.
//
// Problem it solves: a page effect (ViewContent, AddToCart ...) can run BEFORE the Pixel
// script has been added to the page. A plain `window.fbq?.(...)` would silently drop that
// event. Here, calls made too early are queued and replayed by the snippet in MetaPixel.jsx
// right after `fbq('init')`.
//
// If NEXT_PUBLIC_META_PIXEL_ID is not set (local dev, preview), every call is a no-op.

const MAX_QUEUE = 50

export function pixelEnabled() {
  return Boolean(process.env.NEXT_PUBLIC_META_PIXEL_ID)
}

export function pixel(...args) {
  if (typeof window === 'undefined' || !pixelEnabled()) return
  if (typeof window.fbq === 'function') {
    window.fbq(...args)
    return
  }
  const queue = (window.__fbqPending = window.__fbqPending || [])
  if (queue.length < MAX_QUEUE) queue.push(args)
}