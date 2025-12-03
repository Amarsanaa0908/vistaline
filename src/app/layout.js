import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { CartProvider } from "@/context/cart-context"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Vistaline - Агаар чийгшүүлэгч",
  description: "Агаар чийгшүүлэгч, арома тараагч, LED шөнийн гэрэл. Өвлийн хуурай агаараас салаарай. 12-24 цагт хүргэнэ. Шалгаад төлөх боломжтой.",
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
