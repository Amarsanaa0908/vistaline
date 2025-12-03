import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Түгээмэл асуултууд | Vistaline",
  description: "Vistaline бүтээгдэхүүн, хүргэлт, буцаалт, төлбөрийн талаарх түгээмэл асуултууд.",
}

const faqData = [
  {
    category: "Бүтээгдэхүүний тухай",
    questions: [
      {
        question: "Агаар чийгшүүлэгч хэр удаан ажиллах вэ?",
        answer: "Нэг удаа дүүргэхэд 4 цаг тасралтгүй ажиллана. 280мл багтаамжтай.",
      },
      {
        question: "Чимээтэй юу?",
        answer: "Үгүй. 35 дБ — энэ бол шивнэх дуунаас ч чимээгүй. Шөнөжин асааж унтаж болно, таныг сэрээхгүй.",
      },
      {
        question: "Арома тос хэрэглэж болох уу?",
        answer: "Тийм. Усанд уусдаг арома тос ашиглаж болно. Лаванда, мята, апельсин зэрэг дуртай үнэрээ нэмээрэй.",
      },
      {
        question: "Ус дуусвал яах вэ?",
        answer: "Автоматаар унтарна. Аюулгүй тул шөнөжин асааж унтаж болно.",
      },
      {
        question: "LED гэрэл хэдэн өнгөтэй вэ?",
        answer: "7 өнгөтэй. Мэдрэгчтэй товчоор өнгө сонгох боломжтой. Шөнийн гэрэл болж ажиллана.",
      },
      {
        question: "Хүүхдийн өрөөнд ашиглаж болох уу?",
        answer: "Тийм. Хүүхдийн өрөөнд маш тохиромжтой. Шөнийн гэрэл + чийгшүүлэгч хоёр нэг дор.",
      },
      {
        question: "Яаж цэвэрлэх вэ?",
        answer: "Долоо хоног бүр усыг солиж, зөөлөн алчуураар арчина.",
      },
    ],
  },
  {
    category: "Захиалга, төлбөр",
    questions: [
      {
        question: "Яаж захиалга өгөх вэ?",
        answer: "Вэбсайтаас бараагаа сонгоод 'Сагсанд нэмэх' дарна. Дараа нь хаяг, утасны дугаараа оруулаад захиалгаа баталгаажуулна.",
      },
      {
        question: "Ямар төлбөрийн сонголт байдаг вэ?",
        answer: "QPay-ээр урьдчилж төлөх эсвэл хүргэлтийн үед шалгаад төлөх боломжтой (зөвхөн УБ-д).",
      },
      {
        question: "Шалгаад төлөх гэж юу вэ?",
        answer: "УБ хотод хүргэлтийн төлбөрийг (8,000₮) урьдчилж төлөөд, бараагаа хүлээж аваад шалгасны дараа үлдэгдлийг төлнө.",
      },
      {
        question: "Аймагт шалгаад төлж болох уу?",
        answer: "Үгүй. Аймагт захиалга өгөхдөө QPay-ээр бүрэн урьдчилж төлнө.",
      },
      {
        question: "Захиалга цуцлах боломжтой юу?",
        answer: "Тийм. Хүргэлтэнд гарахаас өмнө захиалгаа цуцлах боломжтой. Бидэнтэй холбогдоорой.",
      },
    ],
  },
  {
    category: "Хүргэлт",
    questions: [
      {
        question: "Хүргэлтийн төлбөр хэд вэ?",
        answer: "8,000₮ (хаашаа ч ижил).",
      },
      {
        question: "УБ-д хэдэн өдөрт хүргэх вэ?",
        answer: "12-24 цагийн дотор хүргэнэ.",
      },
      {
        question: "Аймагт хэзээ хүргэх вэ?",
        answer: "Жолоочийн хуваариас хамаарна. Захиалга өгөхөд бид тантай холбогдож, хүргэлтийн хугацааг мэдэгдэнэ.",
      },
      {
        question: "Захиалгаа хаана байгааг яаж мэдэх вэ?",
        answer: "Захиалга баталгаажсан, хүргэлтэнд гарсан үед бид танд имэйл илгээнэ.",
      },
    ],
  },
  {
    category: "Буцаалт, баталгаа",
    questions: [
      {
        question: "Буцааж болох уу?",
        answer: "Тийм. 2 хоногийн дотор, ашиглаагүй, анхны савлагаатай бол буцаах эсвэл солиулах боломжтой.",
      },
      {
        question: "Буцаалтын хүргэлтийг хэн төлөх вэ?",
        answer: "Хэрэглэгч өөрөө хариуцна. Гэхдээ үйлдвэрийн гэмтэлтэй бол бид үнэгүй солиж өгнө.",
      },
      {
        question: "Гэмтэлтэй бараа ирвэл яах вэ?",
        answer: "24 цагийн дотор бидэнтэй холбогдож, фото/видео илгээнэ. Бид шинэ бараа үнэгүй хүргэнэ.",
      },
      {
        question: "Баталгаат хугацаа хэдэн жил вэ?",
        answer: "1 жил. Үйлдвэрийн гэмтэл, хэвийн ашиглалтын үед гарсан доголдлыг хамарна.",
      },
      {
        question: "Баталгаа юуг хамрахгүй вэ?",
        answer: "Унагаасан, цохисон, ус орсон (зөвшөөрөгдсөн хэмжээнээс илүү), буруу ашигласан, өөрөө засварлахыг оролдсон тохиолдлыг хамрахгүй.",
      },
    ],
  },
]

export default function FAQPage() {
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
            <span className="text-foreground">Түгээмэл асуултууд</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Түгээмэл асуултууд</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Бүтээгдэхүүн, хүргэлт, буцаалт, төлбөрийн талаарх түгээмэл асуултууд. Хариулт олдохгүй бол бидэнтэй холбогдоорой.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category) => (
              <div key={category.category} className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.category}-${index}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <MessageCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">Асуултаа олсонгүй юу?</h2>
            <p className="text-muted-foreground mb-6">
              Бидэнтэй холбогдоорой. Таны асуултад хариулахад бэлэн байна.
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