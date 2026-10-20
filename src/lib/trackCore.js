// Core of the browser tracker. No framework imports and no "@/" aliases, so it can be
// tested with plain Node. lib/track.js wires it to your real callPost and apiList.
//
// One call = one event, sent twice with the SAME id:
//   1. the Meta Pixel in the browser   -> fbq('track', name, data, { eventID })
//   2. your Go API (Conversions API)   -> POST { name, eventId, data, fbp, fbc, url }
// Meta keeps one of the two copies (deduplication on event name + event id).

/** "<EventName>_<random>". The Go handler requires this shape (random part >= 8 chars). */
export function newEventId(name, cryptoObj = globalThis.crypto) {
  let rand
  if (cryptoObj && typeof cryptoObj.randomUUID === 'function') {
    rand = cryptoObj.randomUUID() // needs HTTPS or localhost
  } else if (cryptoObj && typeof cryptoObj.getRandomValues === 'function') {
    // plain http on a LAN address (testing from your phone) has no randomUUID
    const bytes = cryptoObj.getRandomValues(new Uint8Array(16))
    rand = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
  } else {
    rand = Date.now().toString(36) + Math.random().toString(36).slice(2, 12)
  }
  return `${name}_${rand}`
}

/** items: [{ id, price, quantity }]. The Pixel gets the value; the server recomputes its own. */
export function buildData(items) {
  return {
    content_ids: items.map((i) => String(i.id)),
    contents: items.map((i) => ({ id: String(i.id), quantity: i.quantity })),
    content_type: 'product',
    num_items: items.reduce((sum, i) => sum + i.quantity, 0),
    value: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    currency: 'MNT',
  }
}

export function readCookie(cookieString, name) {
  for (const part of (cookieString || '').split('; ')) {
    if (part.startsWith(name + '=')) {
      const raw = part.slice(name.length + 1)
      try {
        return decodeURIComponent(raw)
      } catch {
        return raw
      }
    }
  }
  return ''
}

/**
 * The _fbc cookie ("fb.1.<click time in ms>.<fbclid>") tells Meta which ad click a visitor came from.
 * The Pixel writes it itself when it runs; this covers a blocked Pixel, so server events still carry the click id.
 * Returns the cookie string to write, or null when nothing should change:
 *   - no fbclid in the URL            -> null
 *   - the cookie already holds THIS click -> null (keeps the original click time)
 *   - a new click (different fbclid)  -> a fresh cookie
 */
export function fbcCookieToSet(search, cookieString, now = Date.now()) {
  const fbclid = new URLSearchParams(search || '').get('fbclid')
  if (!fbclid || fbclid.length > 500) return null
  if (readCookie(cookieString, '_fbc').endsWith('.' + fbclid)) return null
  return `_fbc=fb.1.${now}.${encodeURIComponent(fbclid)}; max-age=${90 * 24 * 3600}; path=/; samesite=lax`
}

export function createTracker({
  post, // (url, body) => Promise   (your callPost)
  endpoint, // apiList.track
  pixel, // from lib/pixel.js
  getCookies = () => document.cookie,
  getHref = () => location.href,
  cryptoObj = globalThis.crypto,
  onError = () => {},
}) {
  /** fbp / fbc cookies and the page URL. Send these with the checkout request too,
   *  so the Go API can save them on the order for the QPay-callback Purchase event. */
  function getTrackingParams() {
    const cookies = getCookies()
    return { fbp: readCookie(cookies, '_fbp'), fbc: readCookie(cookies, '_fbc'), url: getHref() }
  }

  /** Fire a browser + server event. Returns the event id (or null if there was nothing to track). */
  function track(name, items) {
    if (!Array.isArray(items) || items.length === 0) return null
    const data = buildData(items)
    const eventId = newEventId(name, cryptoObj)

    pixel('track', name, data, { eventID: eventId }) // 4th argument = event id (shows up as eid= on facebook.com/tr)

    try {
      // A tracking failure must never break the shop, so errors are swallowed.
      Promise.resolve(post(endpoint, { name, eventId, data, ...getTrackingParams() })).catch(onError)
    } catch (err) {
      onError(err)
    }
    return eventId
  }

  return { track, getTrackingParams }
}