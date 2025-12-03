// import Link from "next/link"
// import Image from "next/image"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import ProductCard from "@/components/product-card"
// import { getCollectionById, getProductsByCollection, collections } from "@/lib/data"
// import { notFound } from "next/navigation"

// export async function generateStaticParams() {
//   return collections.map((collection) => ({
//     slug: collection.slug,
//   }))
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params
//   const collection = getCollectionById(slug)
//   if (!collection) {
//     return { title: "Collection Not Found | Vistaline" }
//   }
//   return {
//     title: `${collection.name} | Vistaline`,
//     description: collection.description,
//   }
// }

// export default async function CollectionPage({ params }) {
//   const { slug } = await params
//   const collection = getCollectionById(slug)

//   if (!collection) {
//     notFound()
//   }

//   const products = getProductsByCollection(slug)

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         {/* Hero Banner */}
//         <section className="relative h-[40vh] min-h-[300px] flex items-center">
//           <div className="absolute inset-0">
//             <Image
//               src={collection?.image || "/placeholder.svg"}
//               alt={collection?.name}
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-foreground/50" />
//           </div>
//           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <nav className="text-sm text-white/70 mb-4">
//               <Link href="/" className="hover:text-white">
//                 Home
//               </Link>
//               <span className="mx-2">/</span>
//               <Link href="/collections" className="hover:text-white">
//                 Collections
//               </Link>
//               <span className="mx-2">/</span>
//               <span className="text-white">{collection?.name}</span>
//             </nav>
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{collection?.name}</h1>
//             <p className="text-white/80 max-w-xl">{collection?.description}</p>
//           </div>
//         </section>

//         {/* Products Grid */}
//         <section className="py-12">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between mb-8">
//               <p className="text-muted-foreground">{products?.length} products</p>
//               <select className="bg-card border border-border rounded-lg px-4 py-2 text-sm">
//                 <option>Sort by: Featured</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Newest</option>
//                 <option>Best Selling</option>
//               </select>
//             </div>

//             {products.length > 0 ? (
//               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <p className="text-muted-foreground text-lg">No products found in this collection.</p>
//                 <Link href="/collections" className="text-primary hover:underline mt-4 inline-block">
//                   Browse all collections
//                 </Link>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   )
// }
