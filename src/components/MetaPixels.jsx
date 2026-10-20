'use client'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { pixel } from '@/lib/pixel'

// Put <MetaPixel /> once in app/layout.js, inside <body>.
// It only loads when NEXT_PUBLIC_META_PIXEL_ID is set, so leave that variable
// out of your local .env to keep localhost traffic out of the real Pixel.
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID
const VALID_ID = /^\d{5,20}$/.test(PIXEL_ID || '')

// Meta's standard base code, plus two lines of ours:
//  - the first PageView (route changes after that are sent by the effect below)
//  - replay of events that were fired before the Pixel existed (see lib/pixel.js)
const SNIPPET = `
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');
fbq('track','PageView');
(window.__fbqPending||[]).forEach(function(a){fbq.apply(null,a)});window.__fbqPending=[];
`

// If the visitor arrives from an ad (?fbclid=...) and the Pixel is blocked, there is no _fbc
// cookie. Meta allows building it from fbclid, so the server events still carry the click id.
function ensureFbcCookie() {
  try {
    const fbclid = new URLSearchParams(window.location.search).get('fbclid')
    if (!fbclid || /(?:^|; )_fbc=/.test(document.cookie)) return
    document.cookie = `_fbc=fb.1.${Date.now()}.${encodeURIComponent(fbclid)}; max-age=${90 * 24 * 3600}; path=/; samesite=lax`
  } catch {
    /* cookies blocked: nothing to do */
  }
}

export default function MetaPixel() {
  const pathname = usePathname()
  const lastPath = useRef(null)

  useEffect(() => {
    ensureFbcCookie()
  }, [])

  // The snippet sends PageView for the first load. Next.js changes pages without
  // reloading, so every later route change needs its own PageView.
  useEffect(() => {
    if (lastPath.current === null) {
      lastPath.current = pathname
      return
    }
    if (lastPath.current === pathname) return // also stops the dev-only double effect
    lastPath.current = pathname
    pixel('track', 'PageView')
  }, [pathname])

  if (!VALID_ID) return null
  return <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: SNIPPET }} />
}
