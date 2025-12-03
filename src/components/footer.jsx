import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">VISTALINE</h2>
            <p className="text-background/70 text-sm leading-relaxed">
              Premium fashion for the modern individual. Quality craftsmanship meets contemporary design.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link href="/collections/new-arrivals" className="hover:text-background transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/men" className="hover:text-background transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/collections/women" className="hover:text-background transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="hover:text-background transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/collections/sale" className="hover:text-background transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-background transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-background/70 mb-4">Subscribe for exclusive offers and new arrivals.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">© 2025 VISTALINE. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
