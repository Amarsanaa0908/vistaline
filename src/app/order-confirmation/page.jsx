"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Truck, Mail, ArrowRight, Download, Share2 } from "lucide-react"
import { useEffect, useState } from "react"
import { apiList, callGet } from "@/axios/api"
import moment from "moment"

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order") || "VISTALINE-XXXXXX"
  const [data, setData] = useState(null)

  const estimatedDelivery = new Date()
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 6)

  const orderDetails = {
    id: orderId,
    date: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    estimatedDelivery: estimatedDelivery.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
    email: "customer@email.com",
  }

  const steps = [
    { icon: CheckCircle, label: "Баталгаажсан", status: "complete" },
    { icon: Package, label: "Бэлдэж байна", status: "current" },
    { icon: Truck, label: "Хүргэлтэнд гарсан", status: "upcoming" },
    { icon: CheckCircle, label: "Хүргэсэн", status: "upcoming" },
  ]

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await callGet(`${apiList.order}/${orderId}`)
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchOrder()
  }, [orderId])

  if (!data) {
    return <div>Түр хүлээнэ үү......</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Таньд баярлалаа!</h1>
            <p className="text-muted-foreground">Таны захиалга баталгаажсан удахгүй хүргэлтэнд гарах болно.</p>
          </div>

          {/* Order Info Card */}
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-border">
              <div>
                <p className="text-sm text-muted-foreground">Захиалгын дугаар</p>
                <p className="text-xl font-bold text-foreground">{data?.orderID}</p>
              </div>
              {/* <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Receipt
                </Button>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div> */}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 py-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Захиалгын огноо</p>
                <p className="font-medium text-foreground">{moment(data?.createdAt).format('YYYY-MM-DD')}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Хүргэгдэх огноо</p>
                <p className="font-medium text-foreground">24 цагийн дотор</p>
              </div>
            </div>

            {/* Order Progress */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-6">Захиалгын төлөв</h3>
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.label} className="flex flex-col items-center relative flex-1">
                    {index > 0 && (
                      <div
                        className={`absolute top-5 right-1/2 w-full h-0.5 -translate-y-1/2 ${
                          step.status === "complete" || step.status === "current" ? "bg-accent" : "bg-border"
                        }`}
                        style={{ zIndex: 0 }}
                      />
                    )}
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center ${
                        step.status === "complete"
                          ? "bg-accent text-accent-foreground"
                          : step.status === "current"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`mt-2 text-xs text-center ${
                        step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Email Notification */}
          <div className="bg-muted/50 rounded-xl p-6 mb-8 flex items-start gap-4">
            <Mail className="h-6 w-6 text-primary shrink-0" />
            <div>
              <h3 className="font-medium text-foreground mb-1">Баталгаажсан имэйл явуулсан</h3>
              <p className="text-sm text-muted-foreground">
                Бид таны имэйл хаяг руу захиалгын дэлгэрэнгүй, хянах мэдээлэл явуулсан.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/track-order?order=${orderId}`} className="flex-1">
              <Button variant="outline" className="w-full gap-2 bg-transparent">
                Захиалга хянах
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/collections" className="flex-1">
              <Button className="w-full">Цааш үзэх</Button>
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-2">Тусламж хэрэгтэй юу?</p>
            <Link href="/contact" className="text-sm text-primary hover:underline">
              Манай багтай холбогдоорой
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
