import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { collections } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Collections | Vistaline",
  description: "Explore our curated collections of premium fashion pieces.",
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Collections</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Collections</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections, each designed to bring timeless elegance and modern style to
              your wardrobe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden"
              >
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2 className="text-2xl font-semibold text-white mb-2">{collection.name}</h2>
                  <p className="text-white/70 mb-4">{collection.description}</p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    Explore Collection <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
