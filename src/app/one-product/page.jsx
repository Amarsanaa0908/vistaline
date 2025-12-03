"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Star,
  Check,
  Truck,
  RefreshCw,
  Shield,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Play,
  Quote,
  Award,
  Leaf,
  Heart,
  Minus,
  Plus,
} from "lucide-react"
import { useCart } from "@/context/cart-context"

// Hero product data with 3 colors and 2 sizes
const heroProduct = {
  id: "premium-merino-sweater",
  name: "The Essential Merino Sweater",
  tagline: "The Only Sweater You'll Ever Need",
  price: 149,
  originalPrice: 199,
  description:
    "Crafted from 100% Italian Merino wool, this sweater combines unmatched softness with exceptional durability. Temperature-regulating, odor-resistant, and machine washable.",
  rating: 4.9,
  reviews: 2847,
  colors: [
    { name: "Midnight Navy", value: "#1a2744", image: "/navy-blue-merino-wool-sweater-on-model.jpg" },
    { name: "Ivory Cream", value: "#f8f4e8", image: "/cream-beige-merino-wool-sweater-on-model.jpg" },
    { name: "Forest Green", value: "#2d5a3d", image: "/forest-green-merino-wool-sweater-on-model.jpg" },
  ],
  sizes: [
    { name: "M", description: '38-40" chest' },
    { name: "L", description: '42-44" chest' },
  ],
}

const features = [
  {
    icon: Leaf,
    title: "100% Italian Merino",
    description: "Sourced from the finest Italian mills for unparalleled softness",
  },
  {
    icon: RefreshCw,
    title: "Temperature Regulating",
    description: "Keeps you comfortable in any climate, from 40°F to 80°F",
  },
  {
    icon: Shield,
    title: "Odor Resistant",
    description: "Natural antimicrobial properties keep you fresh all day",
  },
  {
    icon: Award,
    title: "Machine Washable",
    description: "Easy care without sacrificing quality or shape",
  },
]

const testimonials = [
  {
    name: "Michael R.",
    location: "New York, NY",
    rating: 5,
    text: "I've tried dozens of merino sweaters. This is, hands down, the best one I've ever owned. The quality is exceptional.",
    verified: true,
  },
  {
    name: "Sarah L.",
    location: "San Francisco, CA",
    rating: 5,
    text: "Perfect weight for layering. I wear it almost every day and it still looks brand new after 6 months.",
    verified: true,
  },
  {
    name: "James T.",
    location: "Chicago, IL",
    rating: 5,
    text: "Finally, a sweater that doesn't pill. The attention to detail is impressive. Worth every penny.",
    verified: true,
  },
]

const faqs = [
  {
    question: "What makes this sweater different?",
    answer:
      "Our sweater uses 100% Grade-A Italian Merino wool with a unique 18.5 micron fiber that's softer than regular merino. The construction uses reinforced seams and a proprietary knit pattern that prevents pilling.",
  },
  {
    question: "How do I care for it?",
    answer:
      "Machine wash cold on gentle cycle with similar colors. Lay flat to dry. The sweater is designed to maintain its shape and softness wash after wash.",
  },
  {
    question: "What if it doesn't fit?",
    answer:
      "We offer free returns and exchanges within 30 days. If you're between sizes, we recommend sizing up for a relaxed fit or sizing down for a slim fit.",
  },
  {
    question: "How long will it last?",
    answer:
      "With proper care, our sweaters last 5+ years. We back this with a 2-year warranty against manufacturing defects.",
  },
]

export default function OneProductPage() {
  const [selectedColor, setSelectedColor] = useState(heroProduct.colors[0])
  const [selectedSize, setSelectedSize] = useState(heroProduct.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ ...heroProduct, id: heroProduct.id }, selectedColor, selectedSize.name, quantity)
  }

  const discount = Math.round(((heroProduct.originalPrice - heroProduct.price) / heroProduct.originalPrice) * 100)

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        Free Shipping on All Orders + 30-Day Free Returns
      </div>

      {/* Minimal Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/one-product" className="text-2xl font-bold text-foreground tracking-tight">
            VISTALINE
          </Link>
          <Link href="/cart">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <ShoppingBag className="h-4 w-4" />
              Cart
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section with Product */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-4/5 relative rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={selectedColor.image || "/placeholder.svg"}
                    alt={`${heroProduct.name} in ${selectedColor.name}`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Save {discount}%
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {heroProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`aspect-square relative rounded-xl overflow-hidden border-2 transition-all ${
                        selectedColor.name === color.name
                          ? "border-primary ring-2 ring-primary ring-offset-2"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      <Image src={color.image || "/placeholder.svg"} alt={color.name} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:sticky lg:top-24 space-y-6">
                <div>
                  <p className="text-primary font-medium mb-2">{heroProduct.tagline}</p>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                    {heroProduct.name}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(heroProduct.rating) ? "text-amber-400 fill-amber-400" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {heroProduct.rating} ({heroProduct.reviews.toLocaleString()} reviews)
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{heroProduct.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">${heroProduct.price}</span>
                  <span className="text-xl text-muted-foreground line-through">${heroProduct.originalPrice}</span>
                  <span className="bg-destructive/10 text-destructive px-2 py-1 rounded text-sm font-medium">
                    Save ${heroProduct.originalPrice - heroProduct.price}
                  </span>
                </div>

                {/* Color Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Color: <span className="text-muted-foreground">{selectedColor.name}</span>
                  </label>
                  <div className="flex gap-3">
                    {heroProduct.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`w-12 h-12 rounded-full border-2 transition-all ${
                          selectedColor.name === color.name
                            ? "border-primary ring-2 ring-primary ring-offset-2"
                            : "border-border hover:border-muted-foreground"
                        }`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">
                    Size: <span className="text-muted-foreground">{selectedSize.description}</span>
                  </label>
                  <div className="flex gap-3">
                    {heroProduct.sizes.map((size) => (
                      <button
                        key={size.name}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 rounded-lg border-2 font-medium transition-all ${
                          selectedSize.name === size.name
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-muted-foreground text-foreground"
                        }`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-3 block">Quantity</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-muted transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-muted transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="space-y-3">
                  <Button size="lg" className="w-full text-lg py-6" onClick={handleAddToCart}>
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Add to Cart — ${(heroProduct.price * quantity).toFixed(2)}
                  </Button>
                  <Button size="lg" variant="outline" className="w-full text-lg py-6 bg-transparent">
                    <Heart className="h-5 w-5 mr-2" />
                    Add to Wishlist
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <RefreshCw className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">30-Day Returns</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-xs text-muted-foreground">2-Year Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-muted py-8 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 text-center">
              <div>
                <p className="text-3xl font-bold text-foreground">50,000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2,847</p>
                <p className="text-sm text-muted-foreground">5-Star Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">15</p>
                <p className="text-sm text-muted-foreground">Countries Shipped</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Choose Our Merino Sweater?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every detail has been thoughtfully designed to create the perfect everyday sweater.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-muted/50 border border-border">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video/Image Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wide">The Craft</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-6">Made to Last a Lifetime</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Each sweater is crafted from Grade-A Italian Merino wool, sourced from family-owned mills in the
                    Biella region of Italy — the heart of the worlds finest wool production.
                  </p>
                  <p>
                    The 18.5-micron fibers are among the softest available, while our reinforced seam construction
                    ensures your sweater maintains its shape and durability for years to come.
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "Grade-A Italian Merino Wool",
                    "Reinforced seam construction",
                    "Pill-resistant knit pattern",
                    "Pre-washed for consistent sizing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src="/luxury-wool-fabric-texture-close-up.jpg"
                  alt="Premium merino wool fabric"
                  fill
                  className="object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-foreground/20 hover:bg-foreground/30 transition-colors group">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-foreground ml-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
              <p className="text-muted-foreground">Join thousands of satisfied customers who have made the switch.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 rounded-2xl border border-border bg-card">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    {testimonial.verified && (
                      <span className="text-xs text-primary flex items-center gap-1">
                        <Check className="h-3 w-3" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-xl bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Ready to Experience the Difference?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join over 50,000 customers who have upgraded their wardrobe. Order today and get free shipping plus our
              30-day satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg py-6 px-8"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Shop Now — ${heroProduct.price}
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/60">
              <span className="line-through">${heroProduct.originalPrice}</span> — Save $
              {heroProduct.originalPrice - heroProduct.price} Today
            </p>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 VISTALINE. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="hover:text-foreground transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
