"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import type { ProductDetail } from "@/app/product/mock-data";

type Props = {
  product: ProductDetail;
};

export default function ProductAccordion({ product }: Props) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="composition">
        <AccordionTrigger className="text-xl font-semibold">
          Склад
        </AccordionTrigger>
        <AccordionContent className="text-grey-9 text-base">
          {product.composition}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="description">
        <AccordionTrigger className="text-xl font-semibold">
          Опис
        </AccordionTrigger>
        <AccordionContent className="text-grey-9 whitespace-pre-line text-base">
          {product.fullDescription}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="delivery">
        <AccordionTrigger className="text-xl font-semibold">
          Доставка
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
