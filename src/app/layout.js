import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { CartProvider } from "@/context/cart-context"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Vistaline - Premium Fashion",
  description: "Premium fashion for the modern individual. Quality craftsmanship meets contemporary design.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
