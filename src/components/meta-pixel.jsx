// 'use client';

// import { Suspense, useEffect } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';
// import Script from 'next/script';

// function MetaPixelTracking() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//     useEffect(() => {
//     // Capture fbc from fbclid
//     const fbclid = searchParams.get('fbclid');
//     if (fbclid) {
//       const fbc = `fb.1.${Date.now()}.${fbclid}`;
//       document.cookie = `_fbc=${fbc}; max-age=7776000; path=/`;
//     }

//      const hasFbp = document.cookie.includes('_fbp=');
//     if (!hasFbp) {
//       const randomNum = Math.floor(Math.random() * 10000000000);
//       const fbp = `fb.1.${Date.now()}.${randomNum}`;
//       document.cookie = `_fbp=${fbp}; max-age=7776000; path=/`;
//     }

//     // Track PageView
//     if (typeof window !== 'undefined' && window.fbq) {
//       window.fbq('track', 'PageView');
//     }
//   }, [pathname, searchParams]);

//   return null;
//   return null;
// }

// export default function MetaPixel() {
//   return (
//     <>
//       <Script
//         id="meta-pixel"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             !function(f,b,e,v,n,t,s)
//             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//             n.queue=[];t=b.createElement(e);t.async=!0;
//             t.src=v;s=b.getElementsByTagName(e)[0];
//             s.parentNode.insertBefore(t,s)}(window, document,'script',
//             'https://connect.facebook.net/en_US/fbevents.js');
//             fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
//             fbq('track', 'PageView');
//           `,
//         }}
//       />
//       <noscript>
//         <img
//           height="1"
//           width="1"
//           style={{ display: 'none' }}
//           src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
//           alt=""
//         />
//       </noscript>
//       <Suspense fallback={null}>
//         <MetaPixelTracking />
//       </Suspense>
//     </>
//   );
// }