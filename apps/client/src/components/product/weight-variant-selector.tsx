"use client";

import { useQueryState, parseAsString } from "nuqs";
import type { ProductVariant } from "@/app/product/mock-data";
import { cn } from "@/lib/utils";

type Props = {
  variants: ProductVariant[];
  selectedWeight?: string;
};

export default function WeightVariantSelector({
  variants,
  selectedWeight,
}: Props) {
  const [, setWeight] = useQueryState(
    "weight",
    parseAsString.withOptions({ shallow: false }),
  );

  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium text-black-1">Вага</span>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = selectedWeight === variant.weight;
          return (
            <button
              key={variant.weight}
              onClick={() => setWeight(variant.weight)}
              className={cn(
                "px-4 py-2 rounded-full text-md uppercase font-medium transition-colors cursor-pointer",
                isSelected
                  ? "bg-black-1 text-white"
                  : "bg-white text-black hover:bg-grey-8",
              )}
            >
              {variant.weight}
            </button>
          );
        })}
      </div>
    </div>
  );
}
