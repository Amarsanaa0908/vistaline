import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"
import { Analytics } from '@vercel/analytics/next';
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import MetaPixel from "@/components/meta-pixel"
import { Toaster } from "sonner";

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

const notoSans = Noto_Sans({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Vistaline - Агаар чийгшүүлэгч",
  description: "Агаар чийгшүүлэгч, арома тараагч, LED шөнийн гэрэл. Өвлийн хуурай агаараас салаарай. 12-24 цагт хүргэнэ. Шалгаад төлөх боломжтой.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <MetaPixel />
      </head>
      <body className={`${notoSans.variable} ${notoSans.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <Analytics />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}