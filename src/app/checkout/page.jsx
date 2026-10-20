"use client"

import { useEffect, useState } from "react"
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
import { apiList, callGet, callPost } from "@/axios/api"
import { toast } from "sonner"
import { getFbc, getFbp } from "@/lib/metaPixel"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getDistricts, getProvinces } from "@/lib/locations"
import { track } from "@/lib/track"

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, cartTotal, clearCart, cartCount, isLoaded } = useCart()
  const [step, setStep] = useState(1)
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentData, setPaymentData] = useState()
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedDistrict, setSelectedDistrict] = useState('')

  useEffect(() => {
    console.log("here")
    if (!isLoaded || cartItems.length === 0) return
    if (sessionStorage.getItem('vl_ic')) return
    console.log("zxczxc")
    sessionStorage.setItem('vl_ic', track('InitiateCheckout', cartItems))
  }, [isLoaded, cartItems])

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "Mongolia",
    phone: "",
    saveInfo: true,
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    cardName: "",
  })

  const provinces = getProvinces()
  const districts = getDistricts(selectedProvince)

  const shippingCost = shippingMethod === "express" ? 20000 : shippingMethod === "inspect"? 8000 : cartTotal >= 100 ? 0 : 8000
  const tax = cartTotal * 0.0
  const total = shippingMethod === "inspect" ? 8000 : cartTotal + shippingCost + tax

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setIsProcessing(true)

  //   const res = await callGet(`${apiList.check}/${paymentData?.orderId}`)
  //   console.log('zxc',res)
  //   if (!res?.status) {
  //     clearCart()
  //     router.push(`/order-confirmation?order=${paymentData?.orderId}`)
  //   } else {
  //     toast(res?.msg[0])
  //   }

  //   router.push(`/order-confirmation?order=${paymentData?.orderId}`)
  // }

  const handleNext = async () => {
    setIsProcessing(true)
    if (step === 2) {
      try {
        const province = provinces.find(p => p.code === selectedProvince)
        const district = districts.find(d => d.code === selectedDistrict)
        const response = await callPost(`${apiList.order}`, {
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          phoneNumber: formData.phone,
          city: province?.name || "",
          district: district?.name || "",
          delivery: shippingMethod,
          note: formData.note,
          items: cartItems,
          fbc: getFbc(),
          fbp: getFbp(),
        })
        if (response.status) {
          setPaymentData(response?.data)
          setStep(3)
        } else {
          toast(response.msg[0])
        }
      } catch (error) {
        console.log(error)
      }
      
    } else if (step === 3) {
      const res = await callGet(`${apiList.check}/${paymentData?.orderId}`)
      if (res?.status) {
        clearCart()
        router.push(`/order-confirmation?order=${paymentData?.orderId}`)
      } else {
        toast(res?.msg[0])
      }
    } else {
      setStep(step+1)
    }
    setIsProcessing(false)
  }

  const handlePrevious = async () => {
    setStep(step - 1)
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
             <div className="flex items-center justify-between mb-8">
                {["Мэдээлэл", "Хүргэлт", "Төлбөр"].map((label, index) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
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
                      <span
                        className={`text-xs sm:text-sm ${step >= index + 1 ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {label}
                      </span>
                    </div>
                    {index < 2 && <div className="hidden sm:block w-8 h-px bg-border mx-2" />}
                  </div>
                ))}
              </div>

              <div>
                {/* Step 1: Contact & Shipping Info */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Хэрэглэгчийн мэдээлэл</h2>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Имэйл</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Имэйл хаяг"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">Нэр</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="Нэр"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Овог</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Овог"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Хаягын мэдээлэл</h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="province">Аймаг, хот</Label>
                            <Select
                              value={selectedProvince}
                              onValueChange={(value) => {
                                setSelectedProvince(value)
                                setSelectedDistrict('')
                              }}
                              required
                            >
                              <SelectTrigger id="province" className="w-full">
                                <SelectValue placeholder="Сонгох..." />
                              </SelectTrigger>
                              <SelectContent className="max-h-[200px]">
                                {provinces.map(p => (
                                  <SelectItem key={p.code} value={p.code}>{p.name}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="district">Сум, дүүрэг</Label>
                            <Select
                              value={selectedDistrict}
                              onValueChange={setSelectedDistrict}
                              disabled={!selectedProvince}
                            >
                              <SelectTrigger id="district" className="w-full">
                                <SelectValue placeholder="Сонгох..." />
                              </SelectTrigger>
                              <SelectContent className="max-h-[200px]">
                                {districts.map(d => (
                                  <SelectItem key={d.code} value={d.code}>{d.name}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
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
                        <div className="space-y-2">
                          <Label htmlFor="phone">Утасны дугаар</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="9999****"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="note">Тэмдэглэл, сануулга</Label>
                          <Input
                            id="note"
                            name="note"
                            placeholder="Ажлын цагаар авна...."
                            value={formData.note}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="button" size="lg" className="w-full" onClick={() => setStep(2)}>
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
                              <p className="text-sm text-muted-foreground">Хүргэлтийн үнэ төлөөд та хүргүүлж аваад үлдэгдэл төлбөр төлөх</p>
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
                      {/* <Button onClick={handleNext} className="w-full" disabled={isProcessing}>
                        
                      </Button> */}
                      <Button type="button" className="flex-1" onClick={handleNext} disabled={isProcessing}>
                        {isProcessing ? "Уншиж байна..." : `Үргэлжлүүлэх`}
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
                      <QRCodeCanvas value={paymentData?.qrCode || ""} size={200} className="w-full h-auto" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-sm font-medium text-gray-900">QR уншуулж төлнө үү</div>
                  <div className="text-xs text-gray-500">Банкны аппликейшн ашиглаж төлөх</div>
                </div>

                <div>
                  <ul className="sm:hidden flex justify-center flex-wrap gap-5">
                    {paymentData &&
                      paymentData?.urls.map((el, i) => {
                        return (
                          <li key={i}>
                            <a href={el.link}>
                              <img alt={el.logo} width={50} height={50} src={el.logo || "/placeholder.svg"} />
                            </a>
                          </li>
                        )
                      })}
                  </ul>
                </div>
                    </div>

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
                        onClick={handlePrevious}
                      >
                        Буцах
                      </Button>
                      <Button onClick={handleNext} className="flex-1" disabled={isProcessing}>
                        {isProcessing ? "Уншиж байна..." : `Төлбөр шалгах`}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:block pt-8">
              <div className="sticky top-8 p-6 rounded-xl bg-muted/30 border border-border">
                <h2 className="text-lg font-semibold text-foreground mb-6">Захиалгын хураангуй</h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.selectedColor?.name}-${item.selectedSize}`} className="flex gap-4">
                      <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-muted">
                        <Image src={item?.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-muted-foreground text-background text-xs flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground text-sm truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.selectedColor?.name} / {item.selectedSize}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-foreground ml-4 shrink-0">
                          {(item.price * item.quantity).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₮
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Дүн</span>
                    <span className="text-foreground">{cartTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₮</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Хүргэлт</span>
                    <span className={shippingCost === 0 ? "text-accent" : "text-foreground"}>
                      {shippingCost === 0 ? "ҮНЭГҮЙ" : `${shippingCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}₮`}
                    </span>
                  </div>
                  {/* <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">${tax.toFixed(2)}</span>
                  </div> */}
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-semibold text-foreground">Нийт</span>
                    <span className="text-xl font-bold text-foreground">
                      ₮{total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
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
