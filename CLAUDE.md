# Vistaline web (Next.js, App Router)

Single-product Mongolian store at vistaline.store. Product: "Ой мод" forest terrarium aroma diffuser, ₮150,000.
Talks to a Go (Fiber v3) API through `callPost` / `apiList`. This file is the hand-over of a long planning chat, so follow it.

## Working rules
- Work on a git branch, small commits. Never deploy, and never touch servers, DNS or databases.
- Never read, print or commit secrets (`.env*`, tokens). If you need a value, ask me.
- One tracking step at a time (see Plan). After each step stop and tell me exactly what to check in the browser.
- Run `npm run build` before saying a step is done. Say plainly what you could not test.
- Small diffs. Do not refactor unrelated code. Do not change shop copy or prices.

## Meta tracking: decisions already made
Browser Pixel + server Conversions API (CAPI). Meta de-duplicates on event name + event id.

| Event | Browser | Server | Where |
|---|---|---|---|
| PageView | yes | no | `components/MetaPixel.jsx` (no event id needed) |
| ViewContent | yes | yes | `useViewContent(product)` on the product page |
| AddToCart | yes | yes | `track('AddToCart', items)` in the cart code |
| InitiateCheckout | yes | yes | `track('InitiateCheckout', items)` in the checkout effect |
| AddPaymentInfo | yes | yes | `track('AddPaymentInfo', items)` when the QPay invoice is shown |
| Purchase | NEVER | yes | Go API only, after the verified QPay callback |

- Event id format: `<EventName>_<random, at least 8 chars>`. The SAME id goes to `fbq('track', name, data, { eventID })` (capital "ID") and to the API request (`eventId`).
- The value the browser sends is for the Pixel only. The server recomputes value and contents from its own catalog.
- Every order needs an upfront QPay payment. The exact payment wording is still undecided: do not write any payment promise into the UI. If you notice page copy or meta text that still describes an older payment model, tell me but do not edit it.
- Currency is `MNT`. Not confirmed to be accepted by Meta. If the console shows `[Meta Pixel] Invalid parameter format for currency` on our own events, stop and tell me.
- Do not generate a fake `_fbp` cookie: the Pixel writes the real one. `_fbc` is built from `fbclid` only through `fbcCookieToSet` in `lib/trackCore.js`.

## Files (reference copies of all of them live in ~/vistaline-meta-events/web, compare before changing)
- `components/MetaPixel.jsx`: base Pixel snippet, PageView on route change, `_fbc` cookie. Render it ONCE in the root layout. There must be no other Pixel code anywhere. It imports `@/lib/pixel` and `@/lib/trackCore`, so check that the `@/` alias exists (jsconfig).
- `lib/pixel.js`: safe `fbq` wrapper. Queues calls made before the Pixel has loaded, and does nothing when `NEXT_PUBLIC_META_PIXEL_ID` is unset.
- `lib/trackCore.js`: pure logic (newEventId, buildData, readCookie, fbcCookieToSet, createTracker). No framework imports, so it is testable with plain Node. Keep this exact file name (`trackCore.js`, not `track-core.js`): other files import it.
- `lib/track.js`: wiring to the real `callPost` and `apiList`. Its two imports are placeholders. Not needed until Plan step 2. Check the real `callPost` signature (the code assumes `callPost(url, body)` returns a promise) and add `track: '/api/track'` to `apiList` once the Go route exists.
- `lib/useViewContent.js`: hook for the product page. Not used anywhere until Plan step 2.
- Old code to remove in step 1: the previous Pixel component (with its `MetaPixelTracking` effect) and `FbclidCapture` in `app/layout.js`.

## Environment
- `NEXT_PUBLIC_META_PIXEL_ID` is set in production and left unset locally on purpose (localhost must not send to the real Pixel). Next.js inlines it at BUILD time. In Docker it is a build arg.
- For local testing of real events, use a separate test Pixel / dataset, never the production one.

## How to test in the browser
- Use a clean Chrome profile with no extensions. A blocker on my machine blocked `fbevents.js` (`net::ERR_BLOCKED_BY_CLIENT`), which hid the Pixel before.
- DevTools > Network, filter `tr/` or `facebook.com/tr`. Read `ev=`, `eid=`, `dl=`, `cd[...]`.
- Meta Pixel Helper, and Events Manager > Test Events.
- Events sent with a `test_event_code` are NOT excluded from real data. Keep tests few, and none while ads run.
- Unit test: it lives in the reference folder only (`cd ~/vistaline-meta-events/web && node --test test/track.test.mjs`, 11 tests, passing). It reads a fixture from the Go package in that same folder, so it will not run unchanged inside the app repo. If you change a lib file in the app, tell me, and re-run the test against the same change in the reference folder.

## Plan, one step at a time
1. PageView. Done when: exactly one `ev=PageView` per page load and exactly one per client-side navigation, and Pixel Helper shows one Pixel without warnings. Status: component swap written, not deployed yet. Before the swap, clicking through to the product page showed two requests on `tr/`; the old Pixel component plus its `MetaPixelTracking` effect firing together is the likely cause, but confirm with `ev=` and `eid=` instead of assuming.
2. ViewContent (browser + server, same event id).
3. AddToCart.
4. InitiateCheckout.
5. AddPaymentInfo.
6. Purchase: server only, see the Go repo.

## Open items
- `fbq('trackCustom','eid_test',{},{eventID:'manual_test_1'})` should produce `eid=manual_test_1` on the `tr/` request. Result still unreported. The console also printed `[Meta Pixel] Invalid parameter format for currency` for that call, source unknown (we sent no currency).
- `/api/track` returned 404 earlier. The route belongs in the Go API (or must be proxied to it). Not needed for step 1.
