import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Truck, ShieldCheck, RefreshCw, HeartHandshake, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Бидний тухай | Vistaline",
  description: "Vistaline - Тав тухтай амьдралын бүтээгдэхүүн. Бидний түүх, үнэт зүйлс, чанарын баталгааны тухай.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Truck,
      title: "Хурдан хүргэлт",
      description: "УБ хотод 12-24 цагийн дотор хүргэнэ. Аймагт жолоочоор дамжуулан хүргэнэ.",
    },
    {
      icon: ShieldCheck,
      title: "Шалгаад төлөх",
      description: "Бараагаа хүлээж аваад, шалгаад, сэтгэл хангалуун бол төлнө.",
    },
    {
      icon: RefreshCw,
      title: "Буцаалтын баталгаа",
      description: "2 хоногийн дотор ямар ч асуултгүй буцаах боломжтой.",
    },
    {
      icon: HeartHandshake,
      title: "Үйлчлүүлэгчийн сэтгэл ханамж",
      description: "Таны сэтгэл ханамж бидний хамгийн чухал зорилго.",
    },
  ]

  const stats = [
    { value: "12-24", label: "Цагт хүргэнэ" },
    { value: "1 жил", label: "Баталгаат хугацаа" },
    { value: "2 хоног", label: "Буцаалтын хугацаа" },
    { value: "24/7", label: "Онлайн захиалга" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/homepage/hero1.png"
              alt="Vistaline"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/" className="hover:text-white">
                Нүүр
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Бидний тухай</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl text-balance">
              Тав тухтай амьдралын бүтээгдэхүүн
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Бид таны гэр, оффисыг илүү тав тухтай болгох чанартай бүтээгдэхүүн санал болгодог.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Бидний түүх</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground mb-6">Яагаад Vistaline?</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Монголын өвөл хуурай. Халаалт асаахад агаар улам хуурайшиж, арьс хатна, хамар битүүрнэ, 
                    нойр муудна. Бид энэ асуудлыг шийдэх зорилгоор Vistaline-ийг үүсгэн байгууллаа.
                  </p>
                  <p>
                    Бид зөвхөн чанартай, өвөрмөц дизайнтай бүтээгдэхүүн сонгон авч ирдэг. Үйлдвэрээс 
                    шууд авсан бараа тул дундын зуучлагчгүй, хямд үнээр санал болгох боломжтой.
                  </p>
                  <p>
                    Манай зорилго бол таны гэр бүлд эрүүл, тав тухтай орчин бүрдүүлэхэд тусалж, 
                    худалдан авалтыг аль болох хялбар, найдвартай болгох явдал юм.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image src="/homepage/hero3.jpeg" alt="Vistaline бүтээгдэхүүн" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary uppercase tracking-wide">Бидний давуу тал</span>
              <h2 className="mt-2 text-3xl font-bold text-foreground">Яагаад биднээс авах вэ?</h2>
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

        {/* Quality Promise */}
        <section className="py-20 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/homepage/cta.png"
                  alt="Чанартай бүтээгдэхүүн"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Чанарын баталгаа</span>
                <h2 className="mt-2 text-3xl font-bold text-background mb-6">1 жилийн баталгаа</h2>
                <div className="space-y-4 text-background/80 leading-relaxed">
                  <p>
                    Бид зарж буй бүх бүтээгдэхүүндээ 1 жилийн баталгаа олгодог. Үйлдвэрийн гэмтэл 
                    илэрвэл үнэгүй засах эсвэл шинээр солиж өгнө.
                  </p>
                  <p>
                    Таны сэтгэл ханамж бидний хамгийн чухал зорилго. Тиймээс бараагаа хүлээж аваад 
                    шалгах боломж олгодог — сэтгэл хангалуун бол төлнө.
                  </p>
                </div>
                <Link href="/">
                  <Button variant="secondary" className="mt-8 gap-2">
                    Бүтээгдэхүүн үзэх
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Асуух зүйл байна уу?</h2>
            <p className="text-muted-foreground mb-8">
              Бидэнтэй холбогдоорой. Бүтээгдэхүүн, хүргэлт, төлбөрийн талаар ямар ч асуултад 
              хариулахад бэлэн байна.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Холбоо барих</Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline">
                  Түгээмэл асуултууд
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