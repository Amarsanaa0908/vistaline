"use client"

import { Truck, Clock, Package, CheckCircle, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function DeliveryPage() {
  const shippingOptions = [
    {
      id: 1,
      name: "Үнэгүй хүргэлт",
      price: "Үнэгүй",
      priceValue: 0,
      duration: "12-36 цаг",
      description: "Бүтээгдэхүүний үнийг урьдчилан төлсний дараа хүргэлт үнэгүй",
      icon: Truck,
      features: ["Урьдчилан төлбөр хийсэн захиалгад", "Улаанбаатар хот доторх хүргэлт", "Баталгаат хүргэлтийн цаг"],
      popular: true,
    },
    {
      id: 2,
      name: "Хүргэлтээр шалгаад төлөх (COD)",
      price: "₮8,000",
      priceValue: 8000,
      duration: "12-36 цаг",
      description: "Зөвхөн хүргэлтийн төлбөр төлөөд, бараагаа шалгасны дараа үндсэн төлбөрөө төлнө",
      icon: Package,
      features: ["Барааг шалгах боломжтой", "Хүлээн авахдаа төлбөр төлнө", "Сэтгэл амар худалдан авалт"],
      popular: false,
    },
    {
      id: 3,
      name: "Яаралтай хүргэлт",
      price: "₮20,000",
      priceValue: 20000,
      duration: "3-4 цаг",
      description: "Маш хурдан хүргэлт - захиалга өгсөн өдөртөө хүлээн авна",
      icon: Clock,
      features: ["3-4 цагийн дотор хүргэнэ", "Яаралтай захиалгад тохиромжтой", "UB cab үйлчилгээ"],
      popular: false,
    },
  ]

  const deliverySteps = [
    {
      step: 1,
      title: "Захиалга өгөх",
      description: "Вэбсайтаас бүтээгдэхүүнээ сонгон захиалга өгнө",
    },
    {
      step: 2,
      title: "Баталгаажуулалт",
      description: "Манай баг захиалгыг баталгаажуулж, холбогдоно",
    },
    {
      step: 3,
      title: "Бэлтгэл",
      description: "Бүтээгдэхүүнийг сайтар шалгаж, савлана",
    },
    {
      step: 4,
      title: "Хүргэлт",
      description: "Таны хаягаар шууд хүргэж өгнө",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-orange-500">
              Vistaline
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                Бидний тухай
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Холбоо барих
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                Асуулт
              </Link>
              <Link href="/delivery" className="text-sm text-foreground font-medium">
                Хүргэлт
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Truck className="w-4 h-4" />
            Хурдан & Найдвартай
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Хүргэлтийн мэдээлэл</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Бид таны захиалгыг аль болох хурдан, найдвартай хүргэхийг зорьдог. Доорх хүргэлтийн сонголтуудаас өөрт
            тохирохыг сонгоно уу.
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">Хүргэлтийн сонголтууд</h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {shippingOptions.map((option) => (
              <div
                key={option.id}
                className={`relative bg-card rounded-2xl border-2 p-6 lg:p-8 transition-all hover:shadow-lg ${
                  option.popular ? "border-orange-500 shadow-md" : "border-border"
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-medium">
                    Түгээмэл
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl ${option.popular ? "bg-orange-500 text-white" : "bg-muted text-foreground"}`}
                  >
                    <option.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">{option.duration}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className={`text-3xl font-bold ${option.popular ? "text-orange-500" : "text-foreground"}`}>
                    {option.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-6">{option.description}</p>

                <ul className="space-y-3">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Delivery Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">Хүргэлт хэрхэн ажилладаг вэ?</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Захиалга өгснөөс хойш таны гарт хүрэх хүртэлх алхмууд
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverySteps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                {index < deliverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-orange-200" />
                )}
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">Хүргэлтийн бүс нутаг</h2>
              <p className="text-muted-foreground mb-8">
                Одоогоор Улаанбаатар хотын бүх дүүргүүдэд хүргэлт хийж байна. Орон нутгийн хүргэлтийн талаар манай
                багтай холбогдоно уу.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Улаанбаатар хот</h4>
                    <p className="text-sm text-muted-foreground">Бүх дүүрэгт хүргэлт хийнэ</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                  <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Орон нутаг</h4>
                    <p className="text-sm text-muted-foreground">Тусгай захиалгаар - холбогдоно уу</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-semibold mb-4">Анхаарах зүйлс</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Хүргэлтийн үнэ захиалгын үнээс хамаарахгүй</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Яаралтай хүргэлт зөвхөн 18:00 цагаас өмнөх захиалгад хүчинтэй</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Баяр ёслолын өдрүүдэд хүргэлтийн хугацаа өөрчлөгдөж болно</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Хүргэлтийн өмнө курьер тантай холбогдоно</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Асуулт байна уу?</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            Хүргэлттэй холбоотой асуулт байвал бидэнтэй холбогдоно уу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors"
            >
              Холбоо барих
            </Link>
            <Link
              href="/return-refund"
              className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-colors"
            >
              Буцаалт & Нөхөн олговор
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-xl font-bold text-orange-500">
              Vistaline
            </Link>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/delivery" className="hover:text-foreground">
                Хүргэлт
              </Link>
              <Link href="/return-refund" className="hover:text-foreground">
                Буцаалт
              </Link>
              <Link href="/privacy" className="hover:text-foreground">
                Нууцлал
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Үйлчилгээний нөхцөл
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
