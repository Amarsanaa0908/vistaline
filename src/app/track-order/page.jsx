"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Package, Truck, CheckCircle, MapPin, Clock, Search, Box, Home } from "lucide-react"

export default function TrackOrderPage() {
  const searchParams = useSearchParams()
  const initialOrderId = searchParams.get("order") || ""

  const [orderId, setOrderId] = useState(initialOrderId)
  const [email, setEmail] = useState("")
  const [isTracking, setIsTracking] = useState(!!initialOrderId)
  const [isLoading, setIsLoading] = useState(false)

  // Mock order data
  const orderData = {
    id: orderId || "VISTALINE-DEMO123",
    status: "in_transit",
    estimatedDelivery: "December 8, 2025",
    shippingAddress: "123 Main Street, New York, NY 10001",
    carrier: "FedEx",
    trackingNumber: "1234567890123456",
    timeline: [
      {
        status: "Order Placed",
        date: "Dec 2, 2025",
        time: "10:30 AM",
        description: "Your order has been confirmed",
        completed: true,
      },
      {
        status: "Processing",
        date: "Dec 2, 2025",
        time: "2:15 PM",
        description: "Order is being prepared for shipment",
        completed: true,
      },
      {
        status: "Shipped",
        date: "Dec 3, 2025",
        time: "9:00 AM",
        description: "Package picked up by FedEx",
        completed: true,
      },
      {
        status: "In Transit",
        date: "Dec 4, 2025",
        time: "11:45 AM",
        description: "Package is on its way to you",
        completed: true,
        current: true,
      },
      {
        status: "Out for Delivery",
        date: "Dec 8, 2025",
        time: "Expected",
        description: "Package will be delivered today",
        completed: false,
      },
      {
        status: "Delivered",
        date: "Dec 8, 2025",
        time: "Expected",
        description: "Package delivered to your address",
        completed: false,
      },
    ],
  }

  const handleTrack = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsTracking(true)
    setIsLoading(false)
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Order Placed":
        return CheckCircle
      case "Processing":
        return Package
      case "Shipped":
        return Box
      case "In Transit":
        return Truck
      case "Out for Delivery":
        return MapPin
      case "Delivered":
        return Home
      default:
        return Package
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-foreground mb-2">Track Your Order</h1>
            <p className="text-muted-foreground">Enter your order number to see the current status of your shipment</p>
          </div>

          {/* Search Form */}
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-8">
            <form onSubmit={handleTrack} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="orderId">Order Number</Label>
                  <Input
                    id="orderId"
                    placeholder="e.g., VISTALINE-ABC123"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                {isLoading ? (
                  "Searching..."
                ) : (
                  <>
                    <Search className="h-4 w-4" />
                    Track Order
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Tracking Results */}
          {isTracking && (
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Order Number</p>
                    <p className="text-xl font-bold text-foreground">{orderData.id}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">In Transit</div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pb-6 border-b border-border">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="font-medium text-foreground">{orderData.estimatedDelivery}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Shipping To</p>
                      <p className="font-medium text-foreground">{orderData.shippingAddress}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Carrier</span>
                    <span className="font-medium text-foreground">{orderData.carrier}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tracking Number</span>
                    <span className="font-mono text-foreground">{orderData.trackingNumber}</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <h3 className="font-semibold text-foreground mb-6">Shipment Timeline</h3>
                <div className="space-y-6">
                  {orderData.timeline.map((event, index) => {
                    const Icon = getStatusIcon(event.status)
                    return (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              event.current
                                ? "bg-primary text-primary-foreground"
                                : event.completed
                                  ? "bg-accent text-accent-foreground"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          {index < orderData.timeline.length - 1 && (
                            <div className={`w-0.5 flex-1 mt-2 ${event.completed ? "bg-accent" : "bg-border"}`} />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex items-center justify-between mb-1">
                            <h4
                              className={`font-medium ${
                                event.current
                                  ? "text-primary"
                                  : event.completed
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                              }`}
                            >
                              {event.status}
                            </h4>
                            {event.current && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{event.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {event.date} at {event.time}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Help */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Having issues with your shipment?</p>
                <Link href="/contact" className="text-sm text-primary hover:underline">
                  Contact our support team
                </Link>
              </div>
            </div>
          )}

          {/* FAQ Links */}
          {!isTracking && (
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Don&apos;t have your order number? Check your confirmation email or{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  contact us
                </Link>
                .
              </p>
              <Link href="/faq" className="text-primary hover:underline text-sm">
                View Shipping FAQ
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
