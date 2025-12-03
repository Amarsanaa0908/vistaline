import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Leaf, Award, Users, ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Us | Vistaline",
  description: "Learn about Vistaline - our story, values, and commitment to quality craftsmanship.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Craftsmanship",
      description: "Every piece is meticulously crafted by skilled artisans who take pride in their work.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to responsible sourcing and environmentally conscious production.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Only the finest materials make it into our collections - no compromises.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We build lasting relationships with our customers, artisans, and partners.",
    },
  ]

  const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "50K+", label: "Happy Customers" },
    { value: "100%", label: "Sustainable Materials" },
    { value: "30", label: "Countries Shipped" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Vistaline workshop"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">About</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl text-balance">
              Crafting Timeless Elegance Since 2015
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              We believe that great fashion starts with exceptional craftsmanship and a commitment to quality that never
              wavers.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Our Story</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground mb-6">Born from a Passion for Quality</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Vistaline was founded in 2015 with a simple mission: to create timeless fashion pieces that combine
                    exceptional quality with contemporary design. What started as a small workshop in New York has grown
                    into a globally recognized brand.
                  </p>
                  <p>
                    Our founders, inspired by their travels through Italy and their encounters with master craftsmen,
                    set out to bridge the gap between traditional artisanship and modern fashion needs.
                  </p>
                  <p>
                    Today, we continue to work with the same family-owned mills and workshops that inspired our journey,
                    ensuring every piece meets our exacting standards.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/placeholder.svg?height=800&width=640" alt="Vistaline founder" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Our Values</span>
              <h2 className="mt-2 text-3xl font-bold text-foreground">What Drives Us</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Premium materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Materials</span>
                <h2 className="mt-2 text-3xl font-bold text-background mb-6">Only the Finest</h2>
                <div className="space-y-4 text-background/80 leading-relaxed">
                  <p>
                    We source our materials from the worlds most renowned producers. Our Italian merino wool comes from
                    family-owned mills in Biella, our cashmere from ethical farms in Mongolia, and our cotton from
                    sustainable fields in Egypt.
                  </p>
                  <p>
                    Every material is tested for quality, durability, and sustainability before it becomes part of our
                    collection.
                  </p>
                </div>
                <Link href="/collections">
                  <Button variant="secondary" className="mt-8 gap-2">
                    Explore Our Collection
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              We would love to hear from you. Our team is always ready to help with any questions about our products,
              shipping, or anything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
