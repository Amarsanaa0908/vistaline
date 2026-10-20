'use client';
import { useEffect } from 'react';

const cookie = (n) =>
  document.cookie.split('; ').find((c) => c.startsWith(n + '='))?.split('=')[1] ?? '';

export default function CheckoutStart({ cart }) {
  useEffect(() => {
    if (sessionStorage.getItem('vl_ic')) return; // once per checkout, also guards double effects in dev
    const eventId = `ic_${crypto.randomUUID()}`;
    sessionStorage.setItem('vl_ic', eventId);

    window.fbq?.('track', 'InitiateCheckout', {
      content_ids: [cart.sku], content_type: 'product', num_items: cart.qty,
      value: cart.total, currency: 'MNT',
    }, { eventID: eventId });

    fetch('/api/checkout/start', {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ eventId, fbp: cookie('_fbp'), fbc: cookie('_fbc'), url: location.href, cart }),
    });
  }, []);
  return null;
}