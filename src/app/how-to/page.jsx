"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { BookOpen, Droplets, Power, Palette, Wind, Sparkles, AlertTriangle, MessageCircle } from "lucide-react"
import { useEffect, useRef } from "react"

// export const metadata = {
//   title: "Хэрэглэх заавар | Vistaline",
//   description: "Агаар чийгшүүлэгч хэрхэн ашиглах, тохируулах, цэвэрлэх заавар.",
// }

export default function HowToPage() {
  const videoRef = useRef(null)

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

  const steps = [
    {
      number: "01",
      icon: Droplets,
      title: "Ус хийх",
      description: "Дээд хэсгийг (мөөгний хэлбэртэй тагийг) салгаад, MAX зураас хүртэл цэвэр ус хийнэ. Хэтрүүлж хийхгүй байхыг анхаараарай.",
      tips: [
        "Зөвхөн цэвэр ус ашиглана",
        "MAX зураасыг давуулахгүй",
        "Халуун ус хийхгүй",
      ],
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Арома тос нэмэх (заавал биш)",
      description: "Хэрэв үнэртэй ашиглахыг хүсвэл усанд 3-5 дусал арома тос нэмнэ. Усанд уусдаг тос ашиглахыг зөвлөж байна.",
      tips: [
        "3-5 дусал хангалттай",
        "Усанд уусдаг тос сонгох",
        "Лаванда, мята, апельсин тохиромжтой",
      ],
    },
    {
      number: "03",
      icon: Power,
      title: "Асаах",
      description: "Тагийг буцааж тавиад, адаптерийг залгана. Мэдрэгчтэй товчийг дарж асаана.",
      tips: [
        "24V адаптер ашиглана",
        "Товчийг нэг удаа дарна",
        "Манан гарч эхэлнэ",
      ],
    },
    {
      number: "04",
      icon: Palette,
      title: "LED өнгө сонгох",
      description: "Товчийг дахин дарж LED гэрлийн өнгийг солино. 7 өнгөнөөс сонгох боломжтой. Удаан дарвал гэрлийг унтраана.",
      tips: [
        "Товч дарах бүрт өнгө солигдоно",
        "7 өнгө: улаан, улбар шар, шар, ногоон, хөх, цэнхэр, ягаан",
        "Удаан дарж гэрлийг унтраах",
      ],
    },
    {
      number: "05",
      icon: Wind,
      title: "Манангийн горим",
      description: "Зарим загварт манангийн хүчийг тохируулах боломжтой. Товчийг удаан дарж өөр горим руу шилжинэ.",
      tips: [
        "Хүчтэй маран — өрөө хурдан чийглэнэ",
        "Зөөлөн маран — удаан ажиллана",
        "Борооны горим — дусал бүрийг харуулна",
      ],
    },
  ]

  const maintenance = [
    {
      title: "Өдөр бүр",
      tasks: [
        "Ашиглаагүй үед усыг асгаж хатаана",
        "Цэвэр ус дүүргэнэ",
      ],
    },
    {
      title: "7 хоног бүр",
      tasks: [
        "Усны савыг бүрэн хоослоно",
        "Зөөлөн алчуураар дотор талыг арчина",
        "Жижиг сойзоор нүхнүүдийг цэвэрлэнэ",
      ],
    },
    {
      title: "Сар бүр",
      tasks: [
        "Цуу + усны уусмалаар (1:1) угаана",
        "15-30 минут хөргөөд сайн зайлна",
        "Бүрэн хатаагаад хадгална",
      ],
    },
  ]

  const troubleshooting = [
    {
      problem: "Маран гарахгүй байна",
      solutions: [
        "Ус байгаа эсэхийг шалгана",
        "Адаптер залгаатай эсэхийг шалгана",
        "Нүхнүүд бөглөрсөн эсэхийг шалгаад цэвэрлэнэ",
      ],
    },
    {
      problem: "Дуу чимээ гаргаж байна",
      solutions: [
        "Ус хангалттай байгаа эсэхийг шалгана",
        "Тэгш газар дээр байрлуулна",
        "Дотор талын хэсгүүд зөв суусан эсэхийг шалгана",
      ],
    },
    {
      problem: "LED асахгүй байна",
      solutions: [
        "Товчийг удаан дарж үзнэ",
        "Адаптерийг салгаад дахин залгана",
        "Өөр залгуурт залгаж үзнэ",
      ],
    },
    {
      problem: "Үнэргүй байна",
      solutions: [
        "Илүү их арома тос нэмнэ (5-10 дусал)",
        "Усанд уусдаг тос ашиглаж байгаа эсэхийг шалгана",
        "Өрөөний хэмжээнд тохирсон хэмжээ хийнэ",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              Нүүр
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Хэрэглэх заавар</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Хэрэглэх заавар</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Агаар чийгшүүлэгчийг хэрхэн зөв ашиглах, арчлах талаар дэлгэрэнгүй заавар.
            </p>
          </div>

          {/* Quick Start Video Placeholder */}
         <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Бүтээгдэхүүний бичлэг</h2>
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-muted border border-border">
            <video
              ref={videoRef}
              src="/video.mp4"
              poster="/homepage/feature3.png"
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

          {/* Step by Step */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Алхам алхмаар заавар</h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className="bg-card rounded-2xl border border-border p-6 lg:p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-primary">{step.number}</span>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm font-medium text-foreground mb-2">💡 Зөвлөгөө:</p>
                        <ul className="space-y-1">
                          {step.tips.map((tip, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Maintenance */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Арчилгаа, цэвэрлэгээ</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {maintenance.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card rounded-2xl border border-border p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-4">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.tasks.map((task, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Асуудал шийдвэрлэх</h2>
            <div className="space-y-4">
              {troubleshooting.map((item) => (
                <div 
                  key={item.problem}
                  className="bg-card rounded-xl border border-border p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-3">{item.problem}</h3>
                      <ul className="space-y-2">
                        {item.solutions.map((solution, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="text-primary">→</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Safety Tips */}
          <section className="mb-16">
            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 lg:p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                Аюулгүй ажиллагаа
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500 shrink-0">✗</span>
                    Усгүй ажиллуулахгүй
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500 shrink-0">✗</span>
                    Халуун ус хийхгүй
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500 shrink-0">✗</span>
                    Хүүхдийн гар хүрэхгүй газар байрлуулах
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-red-500 shrink-0">✗</span>
                    Усанд дүрэхгүй
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    Тэгш, тогтвортой газар байрлуулах
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    Агааржуулалттай өрөөнд ашиглах
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    Цэвэр ус ашиглах
                  </li>
                  <li className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-green-500 shrink-0">✓</span>
                    Тогтмол цэвэрлэх
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <div className="text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Асуудал шийдэгдсэнгүй юу?</h2>
            <p className="text-muted-foreground mb-6">
              Бидэнтэй холбогдоорой. Таны асуудлыг шийдвэрлэхэд туслахад бэлэн байна.
            </p>
            <Link href="/contact">
              <Button size="lg">Холбоо барих</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}