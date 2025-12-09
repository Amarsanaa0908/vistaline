"use client"

import { RotateCcw, Clock, CheckCircle, XCircle, AlertTriangle, MessageCircle, Shield, CreditCard } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ReturnRefundPage() {
  const [openFaq, setOpenFaq] = useState(null)

  const returnSteps = [
    {
      step: 1,
      title: "Холбогдох",
      description: "48 цагийн дотор манай багтай холбогдож буцаалтын хүсэлт гаргана",
    },
    {
      step: 2,
      title: "Баталгаажуулалт",
      description: "Манай баг хүсэлтийг хянаж, буцаалтыг баталгаажуулна",
    },
    {
      step: 3,
      title: "Бараа буцаах",
      description: "Барааг анхны савлагаатай нь буцаана",
    },
    {
      step: 4,
      title: "Нөхөн олговор",
      description: "Барааг хүлээн авсны дараа төлбөрийг буцаана",
    },
  ]

  const eligibleReturns = [
    "Бүтээгдэхүүн гэмтэлтэй ирсэн",
    "Буруу бүтээгдэхүүн илгээсэн",
    "Бүтээгдэхүүн тайлбарт таарахгүй",
    "Чанарын асуудалтай",
  ]

  const nonEligibleReturns = [
    "48 цагаас хэтэрсэн хүсэлт",
    "Хэрэглэсэн, гэмтээсэн бүтээгдэхүүн",
    "Савлагаа алдагдсан",
    "Хувийн эрүүл ахуйн бүтээгдэхүүн",
  ]

  const faqs = [
    {
      question: "Буцаалтын хугацаа хэд хоног вэ?",
      answer:
        "Бүтээгдэхүүнийг хүлээн авснаас хойш 48 цагийн дотор буцаалтын хүсэлт гаргах боломжтой. Энэ хугацаанаас хэтэрсэн хүсэлтийг хүлээн авах боломжгүй.",
    },
    {
      question: "Нөхөн олговор хэрхэн олгодог вэ?",
      answer:
        "Буцаалтыг баталгаажуулсны дараа төлбөрийг таны банкны дансанд 3-5 ажлын өдрийн дотор шилжүүлнэ. QPay-ээр төлсөн бол QPay-д буцаана.",
    },
    {
      question: "Буцаалтын хүргэлтийн зардлыг хэн төлөх вэ?",
      answer:
        "Хэрэв бүтээгдэхүүн гэмтэлтэй эсвэл буруу илгээсэн бол бид хүргэлтийн зардлыг төлнө. Бусад тохиолдолд үйлчлүүлэгч өөрөө хариуцна.",
    },
    {
      question: "COD захиалгын буцаалт хэрхэн хийгддэг вэ?",
      answer:
        "COD (хүргэлтээр шалгаад төлөх) захиалгын хувьд та барааг хүлээн авахдаа шалгаж, сэтгэл ханамжгүй бол хүлээн авахгүй байх эрхтэй. Энэ тохиолдолд зөвхөн ₮8,000 хүргэлтийн төлбөр буцаагдахгүй.",
    },
    {
      question: "Солилцоо хийх боломжтой юу?",
      answer: "Тийм, өөр өнгө эсвэл хэмжээтэй солих боломжтой. 48 цагийн дотор холбогдож солилцооны хүсэлт гаргана уу.",
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
              <Link href="/delivery" className="text-sm text-muted-foreground hover:text-foreground">
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
            <RotateCcw className="w-4 h-4" />
            48 цагийн буцаалт
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Буцаалт & Нөхөн олговор</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Таны сэтгэл ханамж бидний хувьд чухал. Бүтээгдэхүүнд сэтгэл ханамжгүй бол 48 цагийн дотор буцаалтын хүсэлт
            гаргах боломжтой.
          </p>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-semibold text-xl mb-2">48 цагийн хугацаа</h3>
              <p className="text-muted-foreground text-sm">
                Бүтээгдэхүүнийг хүлээн авснаас хойш 48 цагийн дотор буцаалтын хүсэлт гаргана уу
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Баталгаат буцаалт</h3>
              <p className="text-muted-foreground text-sm">
                Гэмтэлтэй эсвэл буруу бүтээгдэхүүний хувьд 100% нөхөн олговор
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Хурдан нөхөн олговор</h3>
              <p className="text-muted-foreground text-sm">
                Баталгаажсанаас хойш 3-5 ажлын өдрийн дотор төлбөр буцаана
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">Буцаалтын үйл явц</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Буцаалтын хүсэлт гаргахад энгийн 4 алхам
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnSteps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                {index < returnSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-orange-200" />
                )}
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible vs Non-Eligible */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">Буцаалтын нөхцөл</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligible */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-green-800">Буцаах боломжтой</h3>
              </div>
              <ul className="space-y-4">
                {eligibleReturns.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-green-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-Eligible */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-red-800">Буцаах боломжгүй</h3>
              </div>
              <ul className="space-y-4">
                {nonEligibleReturns.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-red-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COD Special Notice */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-amber-800 mb-2">COD захиалгын тусгай нөхцөл</h3>
                <p className="text-amber-800 mb-4">Хүргэлтээр шалгаад төлөх (₮8,000) сонголттой захиалгын хувьд:</p>
                <ul className="space-y-2 text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Та барааг хүлээн авахдаа шалгаж, сэтгэл ханамжгүй бол хүлээн авахгүй байх эрхтэй</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Хүлээн авахаас татгалзсан тохиолдолд ₮8,000 хүргэлтийн төлбөр буцаагдахгүй</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Хүлээн авсны дараа 48 цагийн буцаалтын нөхцөл хүчинтэй</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">Түгээмэл асуултууд</h2>
          <p className="text-muted-foreground text-center mb-12">Буцаалт, нөхөн олговортой холбоотой асуултууд</p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <span
                    className={`text-2xl text-orange-500 transition-transform ${openFaq === index ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-12 h-12 mx-auto mb-6 text-orange-500" />
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Буцаалтын хүсэлт гаргах</h2>
          <p className="text-background/70 mb-8 max-w-xl mx-auto">
            48 цагийн дотор манай багтай холбогдож буцаалтын хүсэлт гаргана уу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-colors"
            >
              Холбоо барих
            </Link>
            <a
              href="tel:+97699999999"
              className="inline-flex items-center justify-center px-8 py-3 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-colors"
            >
              Утсаар холбогдох
            </a>
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
