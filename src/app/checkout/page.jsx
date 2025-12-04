"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Lock, CreditCard, Truck, Shield, ChevronLeft, Check } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { QRCodeCanvas } from "qrcode.react"
import { apiList, callPost } from "@/axios/api"
import { toast } from "sonner"

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, cartTotal, clearCart, cartCount } = useCart()
  const [step, setStep] = useState(1)
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    phone: "",
    saveInfo: true,
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  })

  const shippingCost = shippingMethod === "express" ? 20000 : shippingMethod === "inspect"? 8000 : cartTotal >= 100 ? 0 : 8000
  const tax = cartTotal * 0.0
  const total = shippingMethod === "inspect" ? 8000 : cartTotal + shippingCost + tax

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate order ID
    const orderId = `Vistaline-${Date.now().toString(36).toUpperCase()}`

    console.log(formData)

    clearCart()
    router.push(`/order-confirmation?order=${orderId}`)
  }

  const handleNext = async () => {
    console.log(step)
    if (step === 2) {
      try {
        const response = await callPost(`${apiList.order}`, {
          email: formData.email,
          name: formData.firstName,
          address: formData.address,
          phoneNumber: formData.phone,
          city: formData.city,
          delivery: shippingMethod,
        })
        toast(response.msg[0])
        if (response.status) {
          setStep(3)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      setStep(step+1)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Хоосон байна</h1>
          <p className="text-muted-foreground mb-8">Add some items to checkout</p>
          <Link href="/collections">
            <Button>Continue Shopping</Button>
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Simplified Header */}
      <header className="border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Vistaline
            </Link>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              Найдвартай систем
            </div>
          </div>
        </div>
      </header>

      <main className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Checkout Form */}
            <div>
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
              >
                <ChevronLeft className="h-4 w-4" />
                Буцах
              </Link>

              {/* Progress Steps */}
              <div className="flex items-center gap-4 mb-8">
                {["Мэдээлэл", "Хүргэлт", "Төлбөр"].map((label, index) => (
                  <div key={label} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step > index + 1
                          ? "bg-accent text-accent-foreground"
                          : step === index + 1
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
                    </div>
                    <span className={`text-sm ${step >= index + 1 ? "text-foreground" : "text-muted-foreground"}`}>
                      {label}
                    </span>
                    {index < 2 && <div className="w-8 h-px bg-border" />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact & Shipping Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Хэрэглэгчийн мэдээлэл</h2>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="email">Имэйл</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid gap-4">
                          <div>
                            <Label htmlFor="firstName">Нэр</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Хүргүүлэх мэдээлэл</h2>
                      <div className="space-y-4">
                        
                        <div>
                            <Label htmlFor="state">Хот, аймаг</Label>
                            <Input
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        {/* <div>
                          <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                          <Input
                            id="apartment"
                            name="apartment"
                            value={formData.apartment}
                            onChange={handleInputChange}
                          />
                        </div> */}
                        <div className="grid gap-4">
                          {/* <div>
                            <Label htmlFor="city">City</Label>
                            <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                          </div> */}
                          <div>
                          <Label htmlFor="address">Хаяг</Label>
                          <Input
                            id="address"
                            name="address"
                            placeholder="Дэлгэрэнгүй хаяг"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          />
                          
                        </div>
                          {/* <div>
                            <Label htmlFor="zip">ZIP Code</Label>
                            <Input id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />
                          </div> */}
                        </div>
                        <div>
                          <Label htmlFor="phone">Утасны дугаар</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        {/* <div className="flex items-center gap-2">
                          <Checkbox
                            id="saveInfo"
                            checked={formData.saveInfo}
                            onCheckedChange={(checked) => setFormData({ ...formData, saveInfo: checked })}
                          />
                          <Label htmlFor="saveInfo" className="text-sm text-muted-foreground">
                            Save this information for next time
                          </Label>
                        </div> */}
                      </div>
                    </div>

                    <Button type="button" size="lg" className="w-full" onClick={handleNext}>
                      Үргэлжлүүлэх
                    </Button>
                  </div>
                )}

                {/* Step 2: Shipping Method */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Хүргэлт</h2>
                      <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-3">
                        <label
                          className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                            shippingMethod === "standard"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-muted-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <RadioGroupItem value="standard" id="standard" />
                            <div>
                              <p className="font-medium text-foreground">Энгийн хүргэлт</p>
                              <p className="text-sm text-muted-foreground">12-36 цагийн дотор</p>
                            </div>
                          </div>
                          <span className="font-medium text-foreground">{cartTotal >= 100 ? "ҮНЭГҮЙ" : "8000₮"}</span>
                        </label>
                        <label
                          className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                            shippingMethod === "inspect"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-muted-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <RadioGroupItem value="inspect" id="inspect" />
                            <div>
                              <p className="font-medium text-foreground">Үзээд авах</p>
                              <p className="text-sm text-muted-foreground">Хүргэлтийн үнэ төлөөд та хүргүүлээд үзэж байгаад үлдэгдэл төлбөр төлөх</p>
                            </div>
                          </div>
                          <span className="font-medium text-foreground">8,000.00₮</span>
                        </label>
                        <label
                          className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                            shippingMethod === "express"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-muted-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <RadioGroupItem value="express" id="express" />
                            <div>
                              <p className="font-medium text-foreground">Шуурхай хүргэлт</p>
                              <p className="text-sm text-muted-foreground">4-6 цагийн дотор</p>
                            </div>
                          </div>
                          <span className="font-medium text-foreground">20,000.00 ₮</span>
                        </label>
                      </RadioGroup>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => setStep(1)}
                      >
                        Буцах
                      </Button>
                      <Button type="button" className="flex-1" onClick={handleNext}>
                        Үргэлжлүүлэх
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="mx-auto">
                      <h2 className="text-lg font-semibold text-foreground mb-4">Төлбөр төлөх</h2>
                      <div className="mb-4">
                  <div className="flex justify-center items-center">
                    <div className="w-full max-w-[200px] sm:max-w-[256px]">
                      <QRCodeCanvas value={"П" || ""} size={200} className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-sm font-medium text-gray-900">QR уншуулж төлнө үү</div>
                  <div className="text-xs text-gray-500">Банкны аппликейшн ашиглаж төлөх</div>
                </div>

                <div>
                  <ul className="sm:hidden flex justify-center flex-wrap gap-5">
                    {/* {data &&
                      data?.links.map((el, i) => {
                        return (
                          <li key={i}>
                            <a href={el.link}>
                              <img alt={el.logo} width={50} height={50} src={el.logo || "/placeholder.svg"} />
                            </a>
                          </li>
                        )
                      })} */}
                  </ul>
                </div>
                    </div>
                    {/* <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Төлбөр төлөх</h2>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3 mb-6">
                        <label
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                            paymentMethod === "card"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-muted-foreground"
                          }`}
                        >
                          <RadioGroupItem value="card" id="card" />
                          <CreditCard className="h-5 w-5 text-muted-foreground" />
                          <span className="font-medium text-foreground">Credit Card</span>
                        </label>
                        <label
                          className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                            paymentMethod === "paypal"
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-muted-foreground"
                          }`}
                        >
                          <RadioGroupItem value="paypal" id="paypal" />
                          <span className="font-bold text-[#003087]">Pay</span>
                          <span className="font-bold text-[#009cde]">Pal</span>
                        </label>
                      </RadioGroup>

                      {paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              name="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input
                              id="cardName"
                              name="cardName"
                              placeholder="John Doe"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="cardExpiry">Expiry Date</Label>
                              <Input
                                id="cardExpiry"
                                name="cardExpiry"
                                placeholder="MM / YY"
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="cardCvc">CVC</Label>
                              <Input
                                id="cardCvc"
                                name="cardCvc"
                                placeholder="123"
                                value={formData.cardCvc}
                                onChange={handleInputChange}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div> */}

                    <div className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-accent" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Secure & Encrypted</p>
                          <p className="text-xs text-muted-foreground">
                            Your payment information is protected with 256-bit SSL encryption
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={handleNext}
                      >
                        Буцах
                      </Button>
                      <Button type="submit" className="flex-1" disabled={isProcessing}>
                        {isProcessing ? "Уншиж байна..." : `Төлбөр шалгах`}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-8 p-6 rounded-xl bg-muted/30 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-6">Захиалгын хураангуй</h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.selectedColor?.name}-${item.selectedSize}`} className="flex gap-4">
                      <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-muted">
                        <Image
                          src={item?.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-muted-foreground text-background text-xs flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.selectedColor?.name} / {item.selectedSize}
                        </p>
                        <p className="text-sm font-medium text-foreground mt-1">
                          {(item.price * item.quantity).toFixed(2)}₮
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Дүн</span>
                    <span className="text-foreground">{cartTotal.toFixed(2)}₮</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Хүргэлт</span>
                    <span className={shippingCost === 0 ? "text-accent" : "text-foreground"}>
                      {shippingCost === 0 ? "ҮНЭГҮЙ" : `${shippingCost.toFixed(2)}₮`}
                    </span>
                  </div>
                  {/* <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div> */}
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Нийт</span>
                    <span className="text-xl font-bold text-foreground">{total.toFixed(2)}₮</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Truck className="h-4 w-4 text-primary" />
                    Найдвартай хүргэлт
                    {/* {cartTotal >= 100000 ? "Free shipping on this order" : "Free shipping on orders $100+"} */}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    2 өдрийн дотор буцаах боломжтой
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
