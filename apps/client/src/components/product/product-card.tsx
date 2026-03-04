"use client";

import { useState, useRef, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Hint } from "../hint";
import AddToFavorite from "./add-to-favorite";
import ProductBadge from "./product-badge";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  const isVariable = product.type === "variable";
  const variants = product.variants as
    | { weight: string; price: number; oldPrice?: number }[]
    | undefined;

  const [selectedIdx, setSelectedIdx] = useState(
    variants ? variants.length - 1 : 0,
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentVariant = variants?.[selectedIdx];
  const displayPrice = currentVariant?.price ?? product.price;
  const displayOldPrice = currentVariant?.oldPrice ?? product.oldPrice;
  const displayWeight = currentVariant?.weight ?? product.weight;

  useEffect(() => {
    if (!isDropdownOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <Link
      href={`/product/${product.id}`}
      key={product.id}
      className="rounded-2xl bg-white pb-5 block">
      <div className="relative overflow-hidden px-[27px] pt-[11px] rounded-t-2xl">
        {product.badge && <ProductBadge badge={product.badge} />}
        <AddToFavorite productId={product.id} />
        <div className="rounded-xl overflow-hidden h-[290px] w-auto mb-3">
          <Image
            src={product.image}
            alt={product.name}
            width={348}
            height={290}
            className="mx-auto h-full w-auto object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mb-6 px-[27px]">
        <Hint label={product.name} asChild={false}>
          <p className="text-2xl font-semibold line-clamp-1 text-black-1">
            {product.name}
          </p>
        </Hint>
        <p className="text-sm text-grey-9 font-semibold text-center">
          {product.description}
        </p>
      </div>

      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={cn(
          "text-white grid gap-[3px] px-[27px] mx-auto w-[100%] h-10 justify-between rounded-l-[8px] rounded-r-[8px] overflow-visible relative",
          isVariable ? "grid-cols-3" : "grid-cols-2 w-[75%]",
        )}>
        <span className="bg-black-1 font-medium flex items-center justify-center text-base gap-1 rounded-l-[8px]">
          {displayOldPrice && (
            <s className="text-xs">{displayOldPrice} ₴</s>
          )}
          {displayPrice} ₴
        </span>
        {isVariable && (
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsDropdownOpen((prev) => !prev);
              }}
              className="bg-black-1 font-medium flex items-center justify-center w-full h-full cursor-pointer">
              {displayWeight}
            </button>
            {isDropdownOpen && variants && (
              <div className="absolute top-full left-0 right-0 mb-[3px] rounded-b-xl overflow-hidden bg-black-1 flex flex-col gap-[3px] z-30">
                {variants.map((v, i) => (
                  <button
                    key={v.weight}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedIdx(i);
                      setIsDropdownOpen(false);
                    }}
                    className={cn(
                      "py-2 text-white font-medium text-center",
                      i === selectedIdx ?
                        "bg-gradient-green-to-yellow text-black-1"
                      : "bg-black-1",
                    )}>
                    {v.weight}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        <Button
          variant="ghost"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="bg-black-1 flex rounded-none rounded-r-[8px] h-auto items-center cursor-pointer justify-center hover:bg-gradient-green-to-yellow transition-all">
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
    </Link>
  );
}
