# Vistaline web (Next.js, App Router, `src/` layout)

Single-product Mongolian store at vistaline.store. Product: "Ой мод" forest terrarium aroma diffuser, ₮150,000 (id `forest`).
Talks to a Go (Fiber v3) API through `callPost` / `apiList` (`@/axios/api`). This file is the hand-over of a long planning chat, so follow it.

## Working rules
- Work on a git branch, small commits. Never deploy, and never touch servers, DNS or databases.
- Never read, print or commit secrets (`.env*`, tokens). If you need a value, ask me.
- One tracking step at a time (see Plan). After each step stop and tell me exactly what to check in the browser.
- Run `npm run build` before saying a step is done. Say plainly what you could not test.
- Small diffs. Do not refactor unrelated code. Do not change shop copy or prices. Do not delete anything without telling me what uses it.

## Meta tracking: decisions already made
Browser Pixel + server Conversions API (CAPI). Meta de-duplicates on event name + event id.

| Event | Browser | Server | Where |
|---|---|---|---|
| PageView | yes | no | `MetaPixel` component (no event id needed) |
| ViewContent | yes | yes | `useViewContent(product)` on the product page |
| AddToCart | yes | yes | `track('AddToCart', items)` (already called from `cart-context.jsx`) |
| InitiateCheckout | yes | yes | `track('InitiateCheckout', cartItems)` (already in the checkout page effect) |
| AddPaymentInfo | yes | yes | `track('AddPaymentInfo', items)` when the QPay invoice is shown (not done) |
| Purchase | NEVER | yes | Go API only, after the verified QPay callback |

- Event id format: `<EventName>_<random, at least 8 chars>`. The SAME id goes to `fbq('track', name, data, { eventID })` (capital "ID") and to the API request (`eventId`). The Go handler rejects anything else.
- The value the browser sends is for the Pixel only. The server ignores it and uses its own fixed price (150000 MNT x quantity).
- Every order needs an upfront QPay payment. The "inspect" (Үзээд авах) shipping option charges only the 8,000 delivery fee upfront. The exact payment wording is still undecided: do not write any payment promise into the UI. If you notice copy that describes an older payment model, tell me but do not edit it.
- Currency is `MNT`. Not confirmed to be accepted by Meta. If the console shows `[Meta Pixel] Invalid parameter format for currency` on our own events, stop and tell me.
- Do not generate a fake `_fbp` cookie: the Pixel writes the real one. `_fbc` is built from `fbclid` only through `fbcCookieToSet` in `src/lib/trackCore.js`.

## Reference files
Reference copies live in `~/vistaline-meta-events/web` (paths there have no `src/`). Compare before changing:
- `components/MetaPixel.jsx`: base Pixel snippet, PageView on route change, `_fbc` cookie. Render it ONCE in the root layout. It imports `@/lib/pixel` and `@/lib/trackCore`.
- `lib/pixel.js`: safe `fbq` wrapper. Queues calls made before the Pixel has loaded; does nothing when `NEXT_PUBLIC_META_PIXEL_ID` is unset.
- `lib/trackCore.js`: pure logic (newEventId, buildData, readCookie, fbcCookieToSet, createTracker). `createTracker` catches failed server calls. Keep the exact file name `trackCore.js`.
- `lib/track.js`: wiring to the real `callPost` and `apiList`.
- `lib/useViewContent.js`: hook for the product page, not used yet.

## Current state of THIS repo (checked 2026-10-21)
- `src/app/layout.js` renders `<FbclidCapture />` (defined in that file) and `<MetaPixel />`, which is imported from `src/components/MetaPixels.jsx`. That file is an OLDER copy of the reference `MetaPixel.jsx`: only the `_fbc` logic differs (it never replaces an existing `_fbc`). Update it together with `src/lib/trackCore.js`, because the new one imports `fbcCookieToSet`.
- `src/components/meta-pixel.jsx` is the original Pixel component (with a `MetaPixelTracking` effect). Not known whether anything still imports it. On the live site it produced two `tr/` requests when clicking to the product page. Check usage before removing.
- `src/lib/metaPixel.js` exports `getFbc` / `getFbp`. The checkout page imports them and sends them with the order request. KEEP them (or replace with `readCookie` from trackCore). Check whether `getFbc()` depends on what `FbclidCapture` stores before removing `FbclidCapture`.
- `src/lib/pixel.js`, `trackCore.js`, `track.js` are already copied. `track.js` is NOT the reference version: stack traces show `track @ track.js:18` calling `callPost` directly (no `trackCore.js` frame).
- `src/app/checkout/checkoutStart.jsx` is an unused file (nothing imports it). It would double-count InitiateCheckout and uses a wrong id format (`ic_...`). Do not wire it up; delete it only after I say so.
- The checkout page `src/app/checkout/page.jsx` sets `sessionStorage 'vl_ic'` once per tab session. Clear that key (`sessionStorage.removeItem('vl_ic')`) in the step-3 success branch, right before `clearCart()`.
- Leftover debug logs: `product-page-client.jsx:61` (logs the product), `checkout/page.jsx` (`here`, `zxczxc`). List them, do not remove without asking.

## Local testing
- `NEXT_PUBLIC_META_PIXEL_ID` in `.env.local` (edit by hand, you cannot read it) makes localhost send to that Pixel. Without it the Pixel does nothing. Next.js inlines it at BUILD time; restart `npm run dev` after changing it. In Docker it is a build arg.
- Use a Chrome Guest window (no extensions). A blocker made `fbevents.js` fail with `net::ERR_BLOCKED_BY_CLIENT`, and even an Incognito window kept the extension.
- DevTools > Network, filter `facebook.com/tr` (set the type filter to All, not Fetch/XHR). Read `ev=`, `eid=`, `dl=`.
- To list every Pixel call with its page, run in the Console:
  `console.table(performance.getEntriesByType('resource').filter(e => e.name.includes('facebook.com/tr')).map(e => { const u = new URL(e.name); return { ev: u.searchParams.get('ev'), eid: u.searchParams.get('eid'), dl: u.searchParams.get('dl') } }))`
- Events sent with a `test_event_code` are NOT excluded from real data. Keep tests few.
- Unit test lives in the reference folder only: `cd ~/vistaline-meta-events/web && node --test test/track.test.mjs` (11 tests, passing). It reads a fixture from the Go package in that folder, so it will not run unchanged inside this repo.

## Plan, one step at a time
1. PageView. Verified on localhost in dev mode: exactly one `ev=PageView` per page (`/`, `/products/forest`, `/checkout`), and AddToCart / InitiateCheckout carry correct `eid`s. Remaining: update MetaPixels.jsx + trackCore.js, fix the unhandled promise, tidy old code, `npm run build`, deploy, then repeat the check once on production.
2. ViewContent (browser + server, same event id).
3. AddToCart (already wired through `track`, verify only).
4. InitiateCheckout (already wired, verify only).
5. AddPaymentInfo.
6. Purchase: server only, see the Go repo.

## Open problems
- Server copy: `track` POSTs to `http://localhost:3000/track`, i.e. the Next server, which has no such route (404). The Go route will be `POST /api/track`; `apiList.track` must use the same base URL as `apiList.order`. Until then the server copy must be switched off (e.g. an env flag) so it does not fire.
- That 404 also shows `Uncaught (in promise) AxiosError` from `api.js:14`: a failed tracking call must never throw, show a toast or reach the user.
- `fbq('trackCustom','eid_test',{},{eventID:'manual_test_1'})` should produce `eid=manual_test_1`. Result still unreported. The console once printed `[Meta Pixel] Invalid parameter format for currency` for that call, source unknown.
