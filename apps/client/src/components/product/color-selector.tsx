"use client";

import { useQueryState, parseAsString } from "nuqs";
import type { ProductColor } from "@/app/product/mock-data";
import { cn } from "@/lib/utils";

type Props = {
  colors: ProductColor[];
  selectedColor?: string;
};

export default function ColorSelector({ colors, selectedColor }: Props) {
  const [, setColor] = useQueryState(
    "color",
    parseAsString.withOptions({ shallow: false }),
  );

  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium text-black-1">Колір</span>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => {
          const isSelected = selectedColor === color.name;
          return (
            <button
              key={color.name}
              onClick={() => setColor(color.name)}
              title={color.name}
              className={cn(
                "size-10 border-9 border-white rounded-full cursor-pointer transition-shadow",
                isSelected && "shadow-[0_0_14px_0px_rgba(0,0,0,0.2)]",
              )}
              style={{ backgroundColor: color.hex }}
            />
          );
        })}
      </div>
    </div>
  );
}
