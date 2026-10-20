"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MessageCircle, Instagram, Facebook } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Facebook,
      title: "Facebook",
      details: "@vistaline.store",
      description: "Messenger-ээр бичээрэй",
      link: "https://www.facebook.com/vistaline.store",
      buttonText: "Messenger нээх",
      primary: true,
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@vistaline.store",
      description: "DM илгээх",
      link: "https://www.instagram.com/vistaline.store/",
      buttonText: "Instagram нээх",
      primary: true,
    },
    {
      icon: Phone,
      title: "Утас",
      details: "9514-1452",
      description: "Ажлын өдрүүдэд 10:00 - 20:00",
      link: "tel:95141452",
      buttonText: "Залгах",
      primary: false,
    },
  ]

  const businessHours = [
    { day: "Даваа - Ням", hours: "06:00 - 22:00" },
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
            <span className="text-foreground">Холбоо барих</span>
          </nav>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Холбоо барих</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Асуух зүйл байвал бидэнтэй холбогдоорой. Бид таны асуултад аль болох хурдан хариулахыг хичээнэ.
            </p>
          </div>

          {/* Primary Contact - Social Media */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-6 text-center">
              Бидэнтэй холбогдох хамгийн хурдан арга
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods
                .filter((method) => method.primary)
                .map((method) => (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">{method.title}</h3>
                    <p className="text-primary font-medium mb-1">{method.details}</p>
                    <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                    <Button className="w-full">{method.buttonText}</Button>
                  </a>
                ))}
            </div>
          </div>

          {/* Secondary Contact - Phone */}
          <div className="mb-12">
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Утсаар холбогдох</h3>
                    <p className="text-lg font-semibold text-primary">7233-1452</p>
                  </div>
                </div>
                <a href="tel:72331452">
                  <Button variant="outline">Залгах</Button>
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mb-12">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Ажлын цаг</h3>
              </div>
              <div className="space-y-2">
                {businessHours.map((item) => (
                  <div key={item.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.day}</span>
                    <span className="text-foreground font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                * Сошиал хаягаар 24/7 мессеж илгээх боломжтой. Бид ажлын цагаар хариу өгнө.
              </p>
            </div>
          </div>

          {/* Common Questions */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">Түгээмэл асуултууд</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="font-medium text-foreground mb-1">Захиалга хэзээ ирэх вэ?</p>
                <p className="text-sm text-muted-foreground">УБ хотод 12-24 цагийн дотор хүргэнэ.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="font-medium text-foreground mb-1">Шалгаад төлж болох уу?</p>
                <p className="text-sm text-muted-foreground">Тийм. УБ-д бараагаа хүлээж аваад шалгасны дараа төлөх боломжтой.</p>
              </div>
              <div className="p-4 rounded-lg bg-muted/30">
                <p className="font-medium text-foreground mb-1">Буцаах боломжтой юу?</p>
                <p className="text-sm text-muted-foreground">2 хоногийн дотор, ашиглаагүй бол буцаах боломжтой.</p>
              </div>
            </div>
          </div>

          {/* FAQ CTA */}
          <div className="text-center p-8 rounded-2xl bg-muted/50">
            <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Илүү дэлгэрэнгүй мэдээлэл хэрэгтэй юу?</h2>
            <p className="text-muted-foreground mb-4">
              Түгээмэл асуултын хуудаснаас хүргэлт, буцаалт, бүтээгдэхүүний талаар дэлгэрэнгүй мэдээлэл аваарай.
            </p>
            <Link href="/faq">
              <Button variant="outline">Түгээмэл асуултууд</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}