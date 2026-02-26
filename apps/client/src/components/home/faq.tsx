"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "Скільки часу займає доставка замовлення?",
    answer:
      "Доставка зазвичай займає від 1 до 3 робочих днів залежно від вашого регіону. Ми співпрацюємо з надійними службами доставки для вашої зручності.",
  },
  {
    question: "Скільки часу займає доставка замовлення?",
    answer:
      "Доставка зазвичай займає від 1 до 3 робочих днів залежно від вашого регіону.",
  },
  {
    question: "Як дізнатися, чи є товар у наявності?",
    answer:
      "Статус «У наявності» оновлюється в режимі реального часу. Якщо товару немає, ви можете залишити запит — ми повідомимо, коли він з'явиться.",
  },
  {
    question: "Скільки часу займає доставка замовлення?",
    answer:
      "Доставка зазвичай займає від 1 до 3 робочих днів залежно від вашого регіону.",
  },
  {
    question: "Скільки часу займає доставка замовлення?",
    answer:
      "Доставка зазвичай займає від 1 до 3 робочих днів залежно від вашого регіону.",
  },
  {
    question: "Скільки часу займає доставка замовлення?",
    answer:
      "Доставка зазвичай займає від 1 до 3 робочих днів залежно від вашого регіону.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <section className="py-[100px]">
      <div className="container">
        <h2 className="font-unbounded font-bold text-[56px] uppercase text-center mb-10">
          FAQ
        </h2>
        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="flex flex-col gap-5">
          {faqItems.map((item, index) => {
            const value = `item-${index}`;
            const isOpen = openItem === value;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div key={index} className="flex items-start gap-5">
                <AccordionItem
                  value={value}
                  className={cn(
                    "flex flex-col flex-1 min-w-0 rounded-2xl transition-all border border-black-1 min-h-[120px] [&>h3]:flex-1",
                    isOpen && "border-none bg-gradient-blue-to-lightblue",
                  )}>
                  <AccordionTrigger className="flex w-full h-auto items-center gap-6 px-8 py-6 text-left font-bold text-lg cursor-pointer hover:no-underline [&>svg]:hidden">
                    <span
                      className={cn(
                        "text-lg text-grey-8 shrink-0",
                        isOpen && "text-white",
                      )}>
                      ({number})
                    </span>
                    <span className="font-semibold text-2xl block w-[721px] mx-auto">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 pt-0 w-[721px] mx-auto">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>

                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? "" : value)}
                  className={cn(
                    "shrink-0 w-[120px] h-[120px] rounded-2xl border border-black-1 flex items-center justify-center cursor-pointer transition-colors",
                    isOpen && "bg-blue border-transparent",
                  )}>
                  <svg
                  className={cn("transition-transform", isOpen && "rotate-45")}
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0V40" stroke="#515458" strokeWidth="2" />
                    <path d="M0 20L40 20" stroke="#515458" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
