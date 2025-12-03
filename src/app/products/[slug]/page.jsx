import ProductPageClient from "./product-page-client"
import { getProductById, products, upsellProducts } from "@/lib/data"

export default async function ProductPage({ params }) {

  const { slug } = await params
  console.log(slug)
  const product = await getProductById(slug)
  const relatedProducts = products
    .filter((p) => p.id !== product?.id && p.collection === product?.collection)
    .slice(0, 4)
  const upsellProductsData = upsellProducts.map((u) => getProductById(u.id) || u)

  return (
    <ProductPageClient product={product} relatedProducts={relatedProducts} upsellProductsData={upsellProductsData} />
  )
}
