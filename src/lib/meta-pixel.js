// lib/meta-pixel.ts

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const trackEvent = (eventName, options) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, options);
  }
};

// Convenience functions for common events
export const trackAddToCart = ({
  content_ids,
  content_name,
  content_type,
  value,
  currency
}) => {
  trackEvent('AddToCart', data);
};

// export const trackPurchase = (data: {
//   content_ids: string[];
//   content_type: string;
//   value: number;
//   currency: string;
// }) => {
//   trackEvent('Purchase', data);
// };

// export const trackInitiateCheckout = (data: {
//   content_ids: string[];
//   value: number;
//   currency: string;
// }) => {
//   trackEvent('InitiateCheckout', data);
// };

export function getFbc(){
  // Always check cookie first (most reliable)
  const fbcCookie = document.cookie
    .split('; ')
    .find(row => row.startsWith('_fbc='))
    ?.split('=')[1]
  
  if (fbcCookie) return fbcCookie

  // Fallback: check current URL (only works on landing page)
  const params = new URLSearchParams(window.location.search)
  const fbclid = params.get('fbclid')
  
  if (fbclid) {
    const fbc = `fb.1.${Date.now()}.${fbclid}`
    // Save it now
    document.cookie = `_fbc=${fbc}; max-age=7776000; path=/`
    return fbc
  }
  
  return null
}

export function getFbp() {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith('_fbp='))
    ?.split('=')[1] || null
}