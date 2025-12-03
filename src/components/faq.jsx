"use client"


import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

const faqs = [
  {
    question: "Ус дуусвал яах вэ?",
    answer:
      "Автоматаар унтарна, аюулгүй.",
  },
  {
    question: "Чимээтэй юу?",
    answer:
      "35 дБ — шивнэх дуунаас ч чимээгүй",
  },
  {
    question: "Хэр удаан ажиллах вэ?",
    answer:
      "Нэг удаа дүүргэхэд 4 цаг тасралтгүй ажиллана.",
  },
  {
    question: "Ямар тос хэрэглэх вэ?",
    answer:
      "Аль ч усанд уусдаг арома тос ашиглаж болно.",
  },
  {
    question: "Яаж цэнэглэх вэ?",
    answer:
      "24V адаптераар ажиллана. USB биш.",
  },
  {
    question: "Хүүхдийн өрөөнд ашиглаж болох уу?",
    answer:
      "Тийм. Шөнийн гэрэл + чийгшүүлэгч хоёр нэг дор. Хүүхдийн өрөөнд тохиромжтой.",
  },
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null)
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Түгээмэл асуултууд</h2>
              {/* <p className="text-muted-foreground">Everything you need to know before you buy.</p> */}
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-xl bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
