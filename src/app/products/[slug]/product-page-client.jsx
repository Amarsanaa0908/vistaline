"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import UpsellModal from "@/components/upsell-modal"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { 
  Star, 
  Truck, 
  Shield, 
  RefreshCw, 
  Check, 
  Heart, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Droplets,
  Lightbulb,
  Leaf,
  VolumeX,
  Zap,
  Hand,
  Baby,
  Moon,
  Gift,
  Briefcase,
  Package,
  ThumbsUp,
  ThumbsDown,
  MessageCircle
} from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"

export default function ProductPageClient({ product, relatedProducts, upsellProductsData }) {
  const { addToCart } = useCart()

  const hasColors = product?.colors && product.colors.length > 0
  const hasSizes = product?.sizes && product.sizes.length > 0
  const hasImages = product?.images && product.images.length > 0

  const [selectedColor, setSelectedColor] = useState(hasColors ? product.colors[0] : null)
  const [selectedSize, setSelectedSize] = useState(
    hasSizes ? (product.sizes.length === 1 ? product.sizes[0] : null) : "default",
  )
  const [showUpsell, setShowUpsell] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [activeTab, setActiveTab] = useState("description")
  const router = useRouter()

  const videoRef = useRef(null)

  console.log(product)

  useEffect(() => {
    if (!product) {
      router.replace('/products/forest')
    }
  }, [product, router])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.5, // Video starts playing when 50% visible
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  const reviews = [
    {
      id: 1,
      name: "Болормаа Б.",
      location: "Хан-Уул, Улаанбаатар",
      rating: 5,
      date: "2025.12.01",
      comment: "Хүүхдийн өрөөнд ашиглаж байна. Өмнө нь шөнөдөө ханиалгадаг байсан, одоо арай дээр болсон. Гэрэл нь бас гоё, унтахын өмнө асаадаг боллоо.",
      helpful: 12,
      verified: true,
      image: null,
    },
    {
      id: 2,
      name: "Тэмүүлэн Д.",
      location: "Баянзүрх, Улаанбаатар",
      rating: 5,
      date: "2025.11.28",
      comment: "Ээждээ бэлэг авч өгсөн. Өвлийн хуурай агаараас болж арьс нь хуурайшдаг байсан. Одоо өдөр бүр ашиглаж байна гэсэн. Дизайн нь бас өөр юмнаас ялгарч байгаа.",
      helpful: 8,
      verified: true,
      image: "/reviews/review1.jpeg",
    },
    {
      id: 3,
      name: "Ганзориг М.",
      location: "Сүхбаатар, Улаанбаатар",
      rating: 5,
      date: "2025.11.25",
      comment: "Оффисынхоо ширээн дээр тавьсан. Агаар хуурай байдаг газар ажилладаг болохоор яг хэрэгтэй зүйл байсан. Чимээгүй, гоё харагддаг.",
      helpful: 5,
      verified: true,
      image: null,
    },
    {
      id: 4,
      name: "Анужин Т.",
      location: "Чингэлтэй, Улаанбаатар",
      rating: 5,
      date: "2025.11.20",
      comment: "Хүргэлт хурдан байсан. Шалгаад төлөх боломжтой байсан нь сайн юм. Бараа яг зураг шигээ ирсэн.",
      helpful: 15,
      verified: true,
      image: "/reviews/review2.jpeg",
    },
  ]

  // Key features for the product
  const keyFeatures = [
    {
      icon: Droplets,
      title: "350мл багтаамж",
      description: "4 цаг тасралтгүй ажиллана",
    },
    {
      icon: Lightbulb,
      title: "7 өнгийн LED",
      description: "Шөнийн гэрэл болно",
    },
    {
      icon: Leaf,
      title: "Арома тараагч",
      description: "Дуртай үнэрээ нэмээрэй",
    },
    {
      icon: VolumeX,
      title: "35дБ чимээгүй",
      description: "Нойрыг сэрээхгүй",
    },
    {
      icon: Zap,
      title: "Автомат унтраалт",
      description: "Ус дуусвал унтарна",
    },
    {
      icon: Hand,
      title: "Мэдрэгч удирдлага",
      description: "Нэг хүрэлтээр удирдана",
    },
  ]

  // Who is it for
  const targetAudience = [
    {
      icon: Baby,
      title: "Хүүхэдтэй гэр бүлд",
      description: "Шөнийн гэрэл + эрүүл агаар нэг дор",
    },
    {
      icon: Moon,
      title: "Сайн нойрсохыг хүсвэл",
      description: "Чийглэг агаар = илүү гүн нойр",
    },
    {
      icon: Gift,
      title: "Бэлэг хайж байвал",
      description: "Өвөрмөц, хэрэгтэй, гоё",
    },
    {
      icon: Briefcase,
      title: "Оффисын ширээнд",
      description: "Хуурай оффисын агаарыг сэргээнэ",
    },
  ]

  // What's in the box
  const boxContents = [
    "Rain Forest Humidifier (үндсэн төхөөрөмж)",
    "24V адаптер",
    "Хэрэглэх заавар",
  ]

  // Specifications
  const specifications = [
    { label: "Багтаамж", value: "350мл" },
    { label: "Ажиллах хугацаа", value: "8 цаг" },
    { label: "Дуу чимээ", value: "35 дБ" },
    { label: "Тэжээл", value: "24V адаптер" },
    { label: "Материал", value: "ABS + PP" },
    { label: "LED гэрэл", value: "7 өнгө" },
    { label: "Удирдлага", value: "Мэдрэгчтэй товч" },
    { label: "Онцлог", value: "Автомат унтраалт" },
    { label: "Баталгаа", value: "1 жил" },
  ]

  // Product FAQ
  const productFaq = [
    {
      question: "Хэр удаан ажиллах вэ?",
      answer: "Нэг удаа дүүргэхэд 4 цаг тасралтгүй ажиллана. 280мл багтаамжтай.",
    },
    {
      question: "Чимээтэй юу?",
      answer: "Үгүй. 35 дБ — энэ бол шивнэх дуунаас ч чимээгүй. Шөнөжин асааж унтаж болно.",
    },
    {
      question: "Арома тос хэрэглэж болох уу?",
      answer: "Тийм. Усанд уусдаг арома тос ашиглаж болно. Лаванда, мята, апельсин зэрэг дуртай үнэрээ нэмээрэй.",
    },
    {
      question: "Хүүхдийн өрөөнд ашиглаж болох уу?",
      answer: "Тийм. Хүүхдийн өрөөнд маш тохиромжтой. Шөнийн гэрэл + чийгшүүлэгч хоёр нэг дор.",
    },
    {
      question: "Яаж цэвэрлэх вэ?",
      answer: "Долоо хоног бүр усыг солиж, зөөлөн алчуураар арчина. Сар бүр цууны уусмалаар угааж болно.",
    },
  ]

  if (!product) {
    console.log("checking")
    // router.push('/products/forest')
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Бүтээгдэхүүн олдсонгүй</h1>
          <Link href="/" className="text-primary hover:underline">
            Нүүр хуудас руу буцах
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  let thumbnails = []

  if (hasImages) {
    thumbnails = product.images
  } else if (hasColors && selectedColor?.image) {
    thumbnails = [
      selectedColor.image,
      `/placeholder.svg?height=600&width=500&query=${product.name} back view`,
      `/placeholder.svg?height=600&width=500&query=${product.name} detail`,
      `/placeholder.svg?height=600&width=500&query=${product.name} styled`,
    ]
  } else {
    const mainImg = product?.image || `/placeholder.svg?height=600&width=500&query=${product?.name}`
    thumbnails = [
      mainImg,
      `/placeholder.svg?height=600&width=500&query=${product?.name} back view`,
      `/placeholder.svg?height=600&width=500&query=${product?.name} detail`,
      `/placeholder.svg?height=600&width=500&query=${product?.name} styled`,
    ]
  }

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize === "default" ? null : selectedSize)
    // Just add to cart, no modal
  }

  const handleBuyNow = () => {
    addToCart(product, selectedColor, selectedSize === "default" ? null : selectedSize)
    setShowUpsell(true)
  }

  const canAddToCart = hasSizes ? selectedSize !== null : true

  const handleColorChange = (color) => {
    setSelectedColor(color)
    setActiveImageIndex(0)
  }

  // Calculate average rating
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  const totalReviews = reviews.length

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              Нүүр
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product?.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Gallery */}
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
                {thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveImageIndex(index)
                      setShowVideo(false)
                    }}
                    className={cn(
                      "relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                      activeImageIndex === index && !showVideo
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border hover:border-muted-foreground",
                    )}
                  >
                    <Image src={thumb || "/placeholder.svg"} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
                {/* Video Thumbnail */}
                <button
                  onClick={() => setShowVideo(true)}
                  className={cn(
                    "relative shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all",
                    showVideo
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border hover:border-muted-foreground",
                  )}
                >
                  <Image 
                    src={thumbnails[0] || "/placeholder.svg"} 
                    alt="Video" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white fill-white" />
                  </div>
                </button>
              </div>

              {/* Main Image / Video */}
              <div className="relative flex-1 aspect-4/5 rounded-2xl overflow-hidden bg-muted">
                {showVideo ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    {/* Replace with your actual video */}
                    <video
                      src="/products/forest/forest1.mp4"
                      controls
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-contain"
                      poster={thumbnails[0]}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <>
                    <Image
                      src={thumbnails[activeImageIndex] || "/placeholder.svg"}
                      alt={selectedColor ? `${selectedColor.name} ${product.name}` : product.name}
                      fill
                      className="object-cover transition-all duration-300"
                      priority
                    />
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {product.originalPrice
                          ? `${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF`
                          : product.badge}
                      </div>
                    )}
                    {/* Image Navigation */}
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-card/80 rounded-full hover:bg-card transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-primary font-medium mb-2">Агаар чийгшүүлэгч • Арома тараагч • LED шөнийн гэрэл</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">{product.name}</h1>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(averageRating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground",
                        )}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {averageRating.toFixed(1)} ({totalReviews} сэтгэгдэл)
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="text-3xl font-bold text-foreground">{product.price?.toLocaleString()}₮</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">{product.originalPrice?.toLocaleString()}₮</span>
                      <span className="text-sm font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% хямдрал
                      </span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Өвлийн хуурай агаараас салаарай. 3-in-1: Чийгшүүлэгч + Шөнийн гэрэл + Арома тараагч нэг төхөөрөмжид.
              </p>

              {/* Trust Badges - Inline */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  1 жилийн баталгаа
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  Шалгаад төлөх боломжтой
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  12-24 цагт хүргэнэ
                </span>
              </div>

              {/* Color Selection - only show if product has colors */}
              {hasColors && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-foreground">Өнгө</span>
                    <span className="text-sm text-muted-foreground">{selectedColor?.name}</span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => handleColorChange(color)}
                        className={cn(
                          "relative w-12 h-12 rounded-full transition-all",
                          selectedColor?.name === color.name
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                            : "hover:ring-2 hover:ring-muted-foreground hover:ring-offset-2 hover:ring-offset-background",
                        )}
                        style={{ backgroundColor: color.value }}
                        aria-label={`Select ${color.name} color`}
                      >
                        {selectedColor?.name === color.name && (
                          <Check className="absolute inset-0 m-auto h-5 w-5 text-primary-foreground drop-shadow-md" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart & Buy Now */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex gap-3">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 h-14 text-base font-semibold"
                    onClick={handleAddToCart}
                    disabled={!canAddToCart}
                  >
                    Сагсанд нэмэх
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 h-14 text-base font-semibold"
                    onClick={handleBuyNow}
                    disabled={!canAddToCart}
                  >
                    Худалдаж авах
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button size="lg" variant="ghost" className="flex-1 h-12 bg-muted/50">
                    <Heart className="h-5 w-5 mr-2" />
                    Хадгалах
                  </Button>
                  <Button size="lg" variant="ghost" className="flex-1 h-12 bg-muted/50">
                    <Share2 className="h-5 w-5 mr-2" />
                    Хуваалцах
                  </Button>
                </div>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">12-24 цагт хүргэнэ</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">2 хоногт буцаалт</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">1 жилийн баталгаа</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground">Шалгаад төлөх</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Онцлог шинж чанарууд</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {keyFeatures.map((feature) => (
                <div 
                  key={feature.title}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Product Video Section */}
          <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Бүтээгдэхүүний бичлэг</h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-muted border border-border">
            <video
              ref={videoRef}
              src="/products/forest/forest1.mp4"
              poster="/products/forest/forest6.png"
              className="w-full h-full object-cover"
              muted // Required for autoplay to work in most browsers
              loop // Optional: loop the video
              playsInline // Better mobile support
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

          {/* Tabs Section: Description, Specs, How to Use */}
          <section className="mt-16">
            <div className="border-b border-border">
              <div className="flex gap-8">
                {[
                  { id: "description", label: "Тайлбар" },
                  { id: "specs", label: "Үзүүлэлт" },
                  { id: "howto", label: "Хэрэглэх заавар" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "pb-4 text-sm font-medium transition-colors relative",
                      activeTab === tab.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Монголын өвөл хуурай. Халаалт асаахад агаар улам хуурайшиж, арьс хатна, хамар битүүрнэ, хоолой өвдөнө.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Rain Forest Humidifier таны гэрийн агаарыг зөөлөн чийглүүлж, амьсгалахад хялбар болгоно. Ультрасоник технологи нь усыг нарийн манан болгон тарааж, өрөөний агаарыг байгалийн ойн адил сэргээнэ.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Өвөрмөц мөөгөн дизайн, борооны дусал эффект нь харахад тайвшруулна. 7 өнгийн LED гэрэл нь шөнийн гэрэл болж, хүүхдийн өрөөнд төгс тохирно.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Дуртай арома тосоо нэмээд тайвшруулах үнэр бүхий орчин бүрдүүлээрэй. 35 дБ чимээтэй — энэ бол шивнэх дуунаас ч чимээгүй.
                  </p>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="max-w-xl">
                  <table className="w-full">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr 
                          key={spec.label}
                          className={cn(
                            "border-b border-border",
                            index % 2 === 0 ? "bg-muted/30" : ""
                          )}
                        >
                          <td className="py-3 px-4 text-sm text-muted-foreground">{spec.label}</td>
                          <td className="py-3 px-4 text-sm font-medium text-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "howto" && (
                <div className="space-y-4 max-w-2xl">
                  <div className="flex gap-4 p-4 rounded-lg bg-muted/30">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Ус хийнэ</h4>
                      <p className="text-sm text-muted-foreground">Дээд хэсгийг салгаад, MAX зураас хүртэл цэвэр ус хийнэ.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-muted/30">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Арома тос нэмнэ (заавал биш)</h4>
                      <p className="text-sm text-muted-foreground">Усанд 3-5 дусал арома тос нэмж болно.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-muted/30">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Залгаад товчийг дарна</h4>
                      <p className="text-sm text-muted-foreground">Адаптерийг залгаад, мэдрэгчтэй товчийг дарж асаана.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-muted/30">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">LED өнгө сонгоно</h4>
                      <p className="text-sm text-muted-foreground">Товчийг дахин дарж 7 өнгөнөөс сонгоно.</p>
                    </div>
                  </div>
                  <Link href="/how-to" className="inline-block mt-4">
                    <Button variant="outline">Дэлгэрэнгүй заавар үзэх</Button>
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Who Is It For Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Хэнд тохирох вэ?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetAudience.map((item) => (
                <div 
                  key={item.title}
                  className="p-6 rounded-xl bg-card border border-border text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What's In The Box */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Багцад юу орсон?</h2>
            <div className="max-w-xl mx-auto bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Package className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Багцын агуулга</span>
              </div>
              <ul className="space-y-3">
                {boxContents.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Product FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Түгээмэл асуултууд</h2>
            <div className="max-w-2xl mx-auto">
              <Accordion type="single" collapsible className="space-y-2">
                {productFaq.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border border-border rounded-lg px-4 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="mt-16" id="reviews">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Сэтгэгдэлүүд</h2>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-5 w-5",
                          i < Math.floor(averageRating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-foreground">{averageRating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({totalReviews} сэтгэгдэл)</span>
                </div>
              </div>
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Сэтгэгдэл бичих
              </Button>
            </div>

            {/* Rating Breakdown */}
            <div className="grid lg:grid-cols-4 gap-8 mb-8">
              <div className="lg:col-span-1 p-6 bg-card rounded-xl border border-border">
                <div className="text-center">
                  <p className="text-5xl font-bold text-foreground mb-2">{averageRating.toFixed(1)}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < Math.floor(averageRating) ? "text-amber-400 fill-amber-400" : "text-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{totalReviews} сэтгэгдэл дээр үндэслэв</p>
                </div>
                <div className="mt-4 space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = reviews.filter(r => r.rating === rating).length
                    const percentage = (count / totalReviews) * 100
                    return (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground w-3">{rating}</span>
                        <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-amber-400 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-8">{count}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Reviews List */}
              <div className="lg:col-span-3 space-y-6">
                {reviews.map((review) => (
                  <div 
                    key={review.id}
                    className="p-6 bg-card rounded-xl border border-border"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-foreground">{review.name}</span>
                          {review.verified && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Баталгаажсан худалдан авалт
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < review.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground",
                          )}
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-4">{review.comment}</p>

                    {review.image && (
                      <div className="mb-4">
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                          <Image
                            src={review.image}
                            alt="Review photo"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">Тус болсон уу?</span>
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                        <ThumbsUp className="h-4 w-4" />
                        {review.helpful}
                      </button>
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                        <ThumbsDown className="h-4 w-4" />
                      </button>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-16">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Өнөөдөр захиалаарай
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Өвлийн хуурай агаараас салаарай. Таны гэр бүлийн эрүүл мэндэд хөрөнгө оруулаарай.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" onClick={handleAddToCart}>
                  Сагсанд нэмэх
                </Button>
                <Button size="lg" onClick={handleBuyNow}>
                  Худалдаж авах — {product.price?.toLocaleString()}₮
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                ✓ 12-24 цагт хүргэнэ • ✓ Шалгаад төлөх • ✓ 1 жилийн баталгаа
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border lg:hidden z-40">
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <p className="text-lg font-bold text-foreground">{product.price?.toLocaleString()}₮</p>
            {product.originalPrice && (
              <p className="text-xs text-muted-foreground line-through">{product.originalPrice?.toLocaleString()}₮</p>
            )}
          </div>
          <Button 
            variant="outline"
            className="flex-1 h-12"
            onClick={handleAddToCart}
          >
            Сагсанд
          </Button>
          <Button 
            className="flex-1 h-12"
            onClick={handleBuyNow}
          >
            Авах
          </Button>
        </div>
      </div>

      <UpsellModal
        open={showUpsell}
        onClose={() => setShowUpsell(false)}
        products={upsellProductsData}
        mainProduct={product}
        selectedColor={selectedColor}
      />
    </div>
  )
}