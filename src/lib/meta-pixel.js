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