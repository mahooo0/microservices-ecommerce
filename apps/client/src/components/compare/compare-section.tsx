"use client";

import {
  comparisonAttributes,
  compareProducts as initialProducts,
  type CompareProduct,
} from "@/app/compare/mock-data";
import { Hint } from "@/components/hint";
import ProductBadge from "@/components/product/product-badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CARD_MIN_W = 402;
const SIDEBAR_W = 402;

function CompareProductCard({
  product,
  onDelete,
}: {
  product: CompareProduct;
  onDelete: () => void;
}) {
  const isVariable = product.type === "variable";
  const variants = product.variants;

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
    <div className="rounded-2xl bg-white pb-5 block">
      <div className="relative overflow-hidden px-[27px] pt-[11px] rounded-t-2xl">
        {product.badge && <ProductBadge badge={product.badge} />}
        <Button
          variant="ghost"
          onClick={onDelete}
          className="absolute top-4 right-4 z-10 size-8 rounded-lg bg-white/80 hover:bg-white flex items-center justify-center cursor-pointer border border-bg shadow-[0_3px_9px_0_rgba(0,0,0,0.09)]">
          <X className="size-3 text-grey-9" />
        </Button>
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
      <div className="flex flex-col gap-3 mb-6">
        <Hint label={product.name} asChild={false}>
          <p className="text-2xl font-semibold line-clamp-1 text-black-1 text-center">
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
          {displayOldPrice && <s className="text-xs">{displayOldPrice} ₴</s>}
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
    </div>
  );
}

function AddProductCard() {
  return (
    <Link
      href="/catalog"
      className="rounded-2xl bg-white flex flex-col items-center justify-center gap-4 py-[11px] px-[27px] h-[456px]">
      <div className="size-16 rounded-full flex items-center justify-center">
        <Plus className="size-10 text-black-2" />
      </div>
      <p className="text-xl font-semibold text-black-2">Додати товар</p>
    </Link>
  );
}

export function CompareSection() {
  const [products, setProducts] = useState<CompareProduct[]>(initialProducts);
  const [filter, setFilter] = useState<"all" | "differences">("all");

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const cols = products.length + 2; // sidebar + products + add card
  const gridCols = `${SIDEBAR_W}px repeat(${products.length + 1}, minmax(${CARD_MIN_W}px, 1fr))`;

  const visibleAttributes = comparisonAttributes.filter((attr) => {
    if (filter === "all") return true;
    const values = products.map((p) => p.attributes[attr.key] ?? "—");
    return !values.every((v) => v === values[0]);
  });

  return (
    <section className="py-10">
      {/* Single scroll container for cards + table */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: "max-content" }}>
          {/* Cards row */}
          <div
            className="gap-6"
            style={{
              display: "grid",
              gridTemplateColumns: gridCols,
            }}>
            {/* Sidebar: filter buttons */}
            <div
              className="flex flex-col gap-3 pt-2 sticky left-0 z-20 bg-bg"
              style={{ width: SIDEBAR_W }}>
              <button
                onClick={() => setFilter("all")}
                className={cn(
                  "text-left text-sm font-semibold transition-colors cursor-pointer",
                  filter === "all" ? "text-black-1" : "text-grey-9",
                )}>
                Всі характеристики
              </button>
              <button
                onClick={() => setFilter("differences")}
                className={cn(
                  "text-left text-sm font-semibold transition-colors cursor-pointer",
                  filter === "differences" ? "text-black-1" : "text-grey-9",
                )}>
                Відмінності
              </button>
            </div>

            {/* Product cards */}
            {products.map((product) => (
              <CompareProductCard
                key={product.id}
                product={product}
                onDelete={() => handleDelete(product.id)}
              />
            ))}

            {/* Add product card */}
            <AddProductCard />
          </div>

          {/* Comparison table */}
          <div className="mt-10">
            {visibleAttributes.map((attr, i) => (
              <div
                key={attr.key}
                className="gap-6"
                style={{
                  display: "grid",
                  gridTemplateColumns: gridCols,
                  backgroundColor: i % 2 === 1 ? "white" : "#F2F3F5",
                }}>
                {/* Sticky label cell */}
                <div
                  className="flex items-center py-4 px-4 sticky left-0 z-20"
                  style={{
                    width: SIDEBAR_W,
                    backgroundColor: i % 2 === 1 ? "white" : "#F2F3F5",
                  }}>
                  <span className="text-pink-9 font-semibold">
                    {attr.label}
                  </span>
                </div>

                {/* Value cells — one per product */}
                {products.map((product) => (
                  <div key={product.id} className="flex items-center py-4 px-6">
                    <span className="text-black-1">
                      {product.attributes[attr.key] ?? "—"}
                    </span>
                  </div>
                ))}

                {/* Empty cell for add column */}
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
