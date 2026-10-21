import { Geist, Geist_Mono, Noto_Sans } from "next/font/google"
import { Analytics } from '@vercel/analytics/next';
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "sonner";
import FacebookMessenger from "@/components/facebook-messenger";
import ExitPopup from "@/components/exit-popup";
import MessengerButton from "@/components/messenger-button";
import { ConfirmModalProvider } from "@/context/confirm-modal-context";
import MetaPixel from "@/components/MetaPixels";

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
      </head>
      <body className={`${notoSans.variable} ${notoSans.variable} font-sans antialiased`}>
        <CartProvider>
          <ConfirmModalProvider>
          {children}
          {/* <MessengerButton /> */}
          <MetaPixel />
          {/* <ExitPopup discountCode="WELCOME10" discountPercent={10} /> */}
          <Analytics />
          <Toaster />
          </ConfirmModalProvider>
        </CartProvider>
      </body>
    </html>
  )
}