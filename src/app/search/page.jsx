"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { Search, X } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [query, setQuery] = useState(initialQuery)
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("relevance")

  const searchResults = useMemo(() => {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()
    let results = products.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery) ||
        p.collection.toLowerCase().includes(lowerQuery),
    )

    // Filter by price
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number)
      results = results.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }

    // Sort results
    switch (sortBy) {
      case "price-low":
        results.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        results.sort((a, b) => b.price - a.price)
        break
      case "rating":
        results.sort((a, b) => b.rating - a.rating)
        break
      default:
        // relevance - no additional sorting needed
        break
    }

    return results
  }, [query, priceRange, sortBy])

  const popularSearches = ["sweater", "cashmere", "wool", "boots", "accessories"]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <div className="max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl font-bold text-foreground text-center mb-8">Search Products</h1>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 pr-12 h-14 text-lg"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Popular Searches */}
            {!query && (
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 rounded-full bg-muted text-sm text-foreground hover:bg-muted-foreground/20 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Search Results */}
          {query && (
            <>
              {/* Filters Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
                <p className="text-muted-foreground">
                  {searchResults.length} {searchResults.length === 1 ? "result" : "results"} for {query}
                </p>
                <div className="flex flex-wrap gap-4">
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="bg-card border border-border rounded-lg px-4 py-2 text-sm"
                  >
                    <option value="all">All Prices</option>
                    <option value="0-50">Under $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="200-">$200+</option>
                  </select>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-card border border-border rounded-lg px-4 py-2 text-sm"
                  >
                    <option value="relevance">Sort by: Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Results Grid */}
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">No results found</h2>
                  <p className="text-muted-foreground mb-6">Try adjusting your search or browse our collections</p>
                  <Link href="/collections">
                    <Button>Browse Collections</Button>
                  </Link>
                </div>
              )}
            </>
          )}

          {/* Browse Collections (when no search) */}
          {!query && (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Or browse our collections</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/collections/men">
                  <Button variant="outline">Men</Button>
                </Link>
                <Link href="/collections/women">
                  <Button variant="outline">Women</Button>
                </Link>
                <Link href="/collections/accessories">
                  <Button variant="outline">Accessories</Button>
                </Link>
                <Link href="/collections/sale">
                  <Button variant="outline">Sale</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
