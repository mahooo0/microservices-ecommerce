"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import type { ProductDetail } from "@/app/product/mock-data";

function PlusMinusIcon() {
  return (
    <svg
      className="shrink-0 transition-transform duration-200"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0V20" stroke="currentColor" strokeWidth="2" className="origin-center transition-transform duration-200 group-data-[state=open]:rotate-90" />
      <path d="M0 10L20 10" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

type Props = {
  product: ProductDetail;
};

export default function ProductAccordion({ product }: Props) {
  return (
    <Accordion type="multiple" className="w-full border-t border-grey-5 font-inter text-black-1">
      <AccordionItem value="composition" className="group">
        <AccordionTrigger className="text-xl font-medium cursor-pointer hover:no-underline [&>svg]:hidden">
          Склад
          <PlusMinusIcon />
        </AccordionTrigger>
        <AccordionContent className="text-base">
          {product.composition}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="description" className="group">
        <AccordionTrigger className="text-xl font-medium cursor-pointer hover:no-underline [&>svg]:hidden">
          Опис
          <PlusMinusIcon />
        </AccordionTrigger>
        <AccordionContent className="whitespace-pre-line text-base">
          {product.fullDescription}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="delivery" className="group">
        <AccordionTrigger className="text-xl font-medium cursor-pointer hover:no-underline [&>svg]:hidden">
          Доставка
          <PlusMinusIcon />
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox id="pickup" />
                <label htmlFor="pickup" className="cursor-pointer text-base">
                  Самовивіз з магазину
                </label>
              </div>
              <span className="font-medium font-inter text-xl">
                Безкоштовно
              </span>
            </div>
            <p className="text-grey-9 ml-9 text-base">
              Товар в наявності за адресою: м. Київ, вул. Хрещатик, 22
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Checkbox id="nova-poshta" />
                <label
                  htmlFor="nova-poshta"
                  className=" text-base cursor-pointer"
                >
                  Нова Пошта
                </label>
              </div>
              <span className="font-medium font-inter text-xl">Від 99 грн</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>    
  );
}
