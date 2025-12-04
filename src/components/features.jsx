import { Check, Droplet, Lamp, Leaf, RefreshCw, Shield, Smile } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const features = [
  {
    icon: Droplet,
    title: "Ультрасоник чийгшүүлэлт",
    description: "Хуурай агаар арьсыг хатаана, хамрыг битүүрүүлнэ, хоолойг өвдөөнө Энэхүү чийгшүүлэгч ультрасоник технологиор усыг нарийн манан болгон тарааж, таны өрөөний агаарыг байгалийн ойн адил сэргээнэ..",
    items: ["280мл багтаамж","4 цаг тасралтгүй ажиллана", "Автомат унтраалт"],
    image: "/homepage/feature1.png",
  },
  {
    icon: Lamp,
    title: "7 өнгийн LED гэрэл",
    description: "Зүгээр нэг чийгшүүлэгч биш — шөнийн гэрэл болж ажиллана. 7 өнгөнөөс сонгож, өрөөндөө тохирох уур амьсгал бүрдүүлээрэй. Хүүхдийн өрөөнд төгс тохирно.",
    items: ["7 өнгө", "Мэдрэгчтэй удирдлага", "Зөөлөн, нүдэнд таатай гэрэл"],
    image: "/homepage/feature2.png",
  },
  {
    icon: Smile,
    title: "Арома тараагч",
    description: "Дуртай үнэртэй тосоо усанд нэмээд, өрөөгөө тайвшруулах үнэрээр дүүргээрэй.",
    items: ["Усанд уусдаг тос хэрэглэнэ", "Үнэр хурдан тарна", "Тайвшруулах нөлөөтэй"],
    image: "/homepage/feature3.png",
  },
]

export default function Features() {
  return (
    <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Яагаад авах ёстой вэ?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Таны амьдралд өнгө, цэвэр агаар, үнэр тайвшралыг авчрах болно.
              </p>
            </div>

            <div className="space-y-16">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-4/3 relative rounded-2xl overflow-hidden bg-muted">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                    <ul className="mt-6 space-y-3">
                        {feature.items?.map((el, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-foreground">{el}</span>
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
