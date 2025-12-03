"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { cartCount } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <h1 className="text-2xl font-bold text-orange-400 tracking-tight">Vistaline</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Бидний тухай
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Холбоо барих
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Асуулт
            </Link>
            <Link
              href="/how-to"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Заавар
            </Link>
            {/* <Link
              href="/collections/sale"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sale
            </Link> */}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            <Link href="/search">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-sm font-medium text-foreground">
                Бидний тухай
              </Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground">
                Холбоо барих
              </Link>
              <Link href="/faq" className="text-sm font-medium text-muted-foreground">
                Асуулт
              </Link>
              <Link href="/how-to" className="text-sm font-medium text-muted-foreground">
                Заавар
              </Link>
              {/* <Link href="/collections/sale" className="text-sm font-medium text-muted-foreground">
                Sale
              </Link> */}
              {/* <div className="border-t border-border pt-4 mt-2">
                <Link href="/about" className="block text-sm text-muted-foreground mb-3">
                  About Us
                </Link>
                <Link href="/contact" className="block text-sm text-muted-foreground mb-3">
                  Contact
                </Link>
                <Link href="/faq" className="block text-sm text-muted-foreground">
                  FAQ
                </Link>
              </div> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
