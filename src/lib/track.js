import { apiList, callPost } from "@/axios/api"

// lib/track.js
const cookie = (n) => document.cookie.split('; ').find((c) => c.startsWith(n + '='))?.split('=')[1] ?? ''

export function track(name, items) {
  const data = {
    content_ids: items.map((i) => String(i.id)),
    contents: items.map((i) => ({ id: String(i.id), quantity: i.quantity })),
    content_type: 'product',
    num_items: items.reduce((s, i) => s + i.quantity, 0),
    value: items.reduce((s, i) => s + i.price * i.quantity, 0),
    currency: 'MNT',
  }
  const eventId = `${name}_${crypto.randomUUID()}`
  window.fbq?.('track', name, data, { eventID: eventId })

  callPost(`${apiList.track}`, {
    "name": name,
    "eventId": eventId,
    "data": data,
    fbp: cookie('_fbp'),
    fbc: cookie('_fbc'),
    url: location.href,
  })

//   fetch('/api/track', {
//     method: 'POST', credentials: 'include', keepalive: true, // keepalive survives the page navigating away
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, eventId, data, fbp: cookie('_fbp'), fbc: cookie('_fbc'), url: location.href }),
//   }).catch(() => {})
  return eventId
}