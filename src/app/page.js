import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products, collections } from "@/lib/data"
import { ArrowRight, Truck, RefreshCw, Shield, CreditCard } from "lucide-react"
import Features from "@/components/features"
import FAQ from "@/components/faq"

export default function Home() {
  const featuredProducts = products.slice(0, 4)
  const newArrivals = products.filter((p) => p.badge === "New" || p.badge === "Bestseller").slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/homepage/hero3.jpeg"
              alt="Vistaline Fashion"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              Илүү сайн агаар,
              <br />
              Илүү сайн нойр
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Агаар чийгшүүлэгч + Шөнийн гэрэл + Арома нэг дор
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products/mushroom-diffuser">
                <Button size="lg" className="min-w-[200px]">
                  Захиалах
                </Button>
              </Link>
              {/* <Link href="/collections/women">
                <Button
                  size="lg"
                  variant="outline"
                  className="min-w-[200px] bg-white/10 text-white border-white hover:bg-white hover:text-foreground"
                >
                  Захиалах
                </Button>
              </Link> */}
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="bg-muted py-6 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Үнэгүй хүргэлт</p>
                  <p className="text-xs text-muted-foreground">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Буцаах боломжтой</p>
                  <p className="text-xs text-muted-foreground">48 цагийн дотор</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Чанарын баталгаа</p>
                  <p className="text-xs text-muted-foreground">1 жилийн баталгаа</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium text-foreground text-sm">Баталгаат төлөлт</p>
                  <p className="text-xs text-muted-foreground">QPay, COD</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />

        {/* Collections Grid */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Collection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully curated collections designed for every occasion and style preference.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.slice(0, 3).map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{collection.name}</h3>
                    <p className="text-white/70 text-sm mb-4">{collection.description}</p>
                    <span className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                      Shop Now <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section> */}

        <FAQ />

        {/* Featured Products */}
        {/* <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Featured</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground">Bestselling Pieces</h2>
              </div>
              <Link
                href="/collections/men"
                className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section> */}

        {/* Banner */}
        <section className="relative py-24">
          <div className="absolute inset-0">
            <Image src="/homepage/cta.png" alt="Winter Collection" fill className="object-cover" />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wide">Яг одоо захиалаад</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
              Өвлийн хуурай агаараас салаарай
            </h2>
            {/* <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Shop our premium winter collection at exceptional prices. Quality pieces that will last for seasons to
              come.
            </p> */}
            <Link href="/products/mushroom-diffuser">
              <Button size="lg" variant="secondary">
                Захиалах
              </Button>
            </Link>
          </div>
        </section>

        {/* New Arrivals */}
        {/* <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Just In</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground">New Arrivals</h2>
              </div>
              <Link
                href="/collections/new-arrivals"
                className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}
