import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Нууцлалын бодлого | VISTALINE",
  description: "VISTALINE нууцлалын бодлого - таны хувийн мэдээллийг хэрхэн цуглуулж, ашиглаж, хамгаалдаг талаар.",
}

export default function PrivacyPage() {
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
            <span className="text-foreground">Нууцлалын бодлого</span>
          </nav>

          <h1 className="text-4xl font-bold text-foreground mb-4">Нууцлалын бодлого</h1>
          <p className="text-muted-foreground mb-8">Сүүлд шинэчилсэн: 2025 оны 12-р сарын 18</p>

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Танилцуулга</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  VISTALINE (&quot;бид&quot;, &quot;манай&quot;, &quot;бидний&quot;) нь таны нууцлалыг хамгаалахыг эрхэмлэдэг. 
                  Энэхүү Нууцлалын бодлого нь таныг манай вэбсайтад зочлох эсвэл бидний бүтээгдэхүүн 
                  худалдан авахад таны мэдээллийг хэрхэн цуглуулж, ашиглаж, хадгалдаг талаар тайлбарлана.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Манай вэбсайтыг ашигласнаар та энэхүү нууцлалын бодлогыг зөвшөөрч байна.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Цуглуулдаг мэдээлэл</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Бид дараах мэдээллийг цуглуулна:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Хувийн мэдээлэл (нэр, овог, имэйл хаяг, утасны дугаар)</li>
                  <li>Хүргэлтийн хаяг (аймаг/хот, сум/дүүрэг, дэлгэрэнгүй хаяг)</li>
                  <li>Захиалгын түүх</li>
                  <li>Төлбөрийн мэдээлэл (QPay, банкны шилжүүлэг)</li>
                  <li>Техникийн мэдээлэл (IP хаяг, хөтчийн төрөл, төхөөрөмж)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Мэдээлэл ашиглалт</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Бид таны мэдээллийг дараах зорилгоор ашиглана:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Захиалга боловсруулах, хүргэлт хийх</li>
                  <li>Захиалгын төлөв, хүргэлтийн мэдээлэл илгээх</li>
                  <li>Хэрэглэгчийн асуулт, гомдол шийдвэрлэх</li>
                  <li>Вэбсайт, үйлчилгээгээ сайжруулах</li>
                  <li>Зар сурталчилгааны үр дүнг хэмжих</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Meta (Facebook) Pixel болон Conversions API</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Бид Meta (Facebook) Pixel болон Conversions API ашиглан зар сурталчилгааны үр дүнг 
                  хэмждэг. Энэ нь дараах байдлаар ажилладаг:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Таны имэйл, утас, нэр, байршил зэрэг мэдээллийг SHA256 аргаар нууцалсан (hashed) 
                      хэлбэрээр Meta-д илгээдэг</li>
                  <li>Meta энэ мэдээллийг шууд унших боломжгүй</li>
                  <li>Зөвхөн манай зар таныг хүрсэн эсэхийг баталгаажуулахад ашиглагддаг</li>
                  <li>Таны мэдээллийг худалдахгүй, бусдад дамжуулахгүй</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Meta-ийн нууцлалын бодлогыг{" "}
                  <a 
                    href="https://www.facebook.com/privacy/policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    эндээс
                  </a>
                  {" "}уншина уу.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies (Күүки)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Манай вэбсайт дараах cookies ашигладаг:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-muted-foreground mt-4">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Cookie</th>
                        <th className="text-left py-2 pr-4 font-semibold text-foreground">Зорилго</th>
                        <th className="text-left py-2 font-semibold text-foreground">Хугацаа</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 pr-4">_fbp</td>
                        <td className="py-2 pr-4">Meta Pixel - хөтчийг таних</td>
                        <td className="py-2">90 хоног</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 pr-4">_fbc</td>
                        <td className="py-2 pr-4">Meta Pixel - зар дээр дарсан эсэхийг хянах</td>
                        <td className="py-2">90 хоног</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Та хөтчийнхөө тохиргооноос cookies-ийг хаах боломжтой. Гэхдээ энэ нь вэбсайтын 
                  зарим функцэд нөлөөлж болно.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Гуравдагч талтай хуваалцах</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Бид таны мэдээллийг зөвхөн дараах тохиолдолд гуравдагч талтай хуваалцана:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Төлбөрийн үйлчилгээ:</strong> QPay, банкууд (төлбөр боловсруулах)</li>
                  <li><strong>Хүргэлтийн үйлчилгээ:</strong> Хүргэлтийн хаягийг дамжуулах</li>
                  <li><strong>Meta (Facebook):</strong> Зар сурталчилгааны үр дүнг хэмжих (нууцалсан хэлбэрээр)</li>
                  <li><strong>Хууль хяналт:</strong> Хуулиар шаардлагатай тохиолдолд</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Бид таны мэдээллийг худалдахгүй.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Мэдээллийн аюулгүй байдал</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Бид таны мэдээллийг хамгаалахын тулд дараах арга хэмжээг авдаг:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>SSL/TLS нууцлал (HTTPS)</li>
                  <li>Мэдээллийг SHA256 аргаар нууцлах</li>
                  <li>Аюулгүй сервер, мэдээллийн сан</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Таны эрх</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Та дараах эрхтэй:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Өөрийн мэдээлэлд хандах, хуулбар авах</li>
                  <li>Буруу мэдээллийг засуулах</li>
                  <li>Мэдээллээ устгуулах хүсэлт гаргах</li>
                  <li>Маркетингийн мэдээлэл хүлээн авахаас татгалзах</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Эдгээр эрхээ хэрэгжүүлэхийг хүсвэл бидэнтэй холбогдоно уу.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Бодлогын өөрчлөлт</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Бид энэхүү нууцлалын бодлогыг шинэчилж болно. Өөрчлөлт оруулсан тохиолдолд 
                  энэ хуудсан дээр нийтэлж, &quot;Сүүлд шинэчилсэн&quot; огноог өөрчилнө.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Холбоо барих</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Нууцлалын талаар асуулт байвал бидэнтэй холбогдоно уу:
                </p>
                <div className="mt-4 p-4 rounded-lg bg-muted/50">
                  <p className="text-foreground font-medium">VISTALINE</p>
                  <p className="text-muted-foreground">Улаанбаатар хот, Монгол</p>
                  <p className="text-muted-foreground">Имэйл: info@vistaline.store</p>
                  <p className="text-muted-foreground">Утас: +976 9514-1452</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}