"use client";

import { ChartColumnIncreasing, Scale, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToFavorite from "./add-to-favorite";
import ProductPricing from "./product-pricing";
import WeightVariantSelector from "./weight-variant-selector";
import ProductAccordion from "./product-accordion";
import type { ProductDetail, ProductVariant } from "@/app/product/mock-data";
import { getEffectivePricing } from "@/lib/product-utils";

type Props = {
  product: ProductDetail;
  selectedWeight?: string;
  selectedVariant?: ProductVariant;
};

export default function ProductInfo({
  product,
  selectedWeight,
  selectedVariant,
}: Props) {
  const { price, oldPrice, discount } = getEffectivePricing(
    product,
    selectedVariant,
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Product code + stock */}
      <div className="flex items-center justify-between">
        <span className="text-grey-9">
          Код товару: {product.productCode}
        </span>
        {product.inStock && (
          <span className="text-grey-9">
            В наявності
          </span>
        )}
      </div>

      {/* Name + actions */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-unbounded font-bold text-2xl text-black-1">
          {product.name}
        </h1>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full size-12 cursor-pointer bg-white"
          >
            <ChartColumnIncreasing className="size-6 text-black" />
          </Button>
          <AddToFavorite className="static rounded-full size-12 cursor-pointer bg-white" />
        </div>
      </div>

      {/* Pricing */}
      <ProductPricing price={price} oldPrice={oldPrice} discount={discount} />

      {/* Weight variant selector (variable products only) */}
      {product.type === "variable" && product.variants && (
        <WeightVariantSelector
          variants={product.variants}
          selectedWeight={selectedWeight}
        />
      )}

      {/* Cart button */}
      <Button className="w-full h-14 rounded-2xl bg-black-1 text-white text-base font-semibold hover:bg-black-1/90 cursor-pointer">
        <ShoppingCart className="size-5 mr-2" />
        До кошику
      </Button>

      {/* Secondary buttons */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="h-12 rounded-2xl text-sm font-semibold cursor-pointer"
        >
          Купити в боксі
        </Button>
        <Button
          variant="outline"
          className="h-12 rounded-2xl text-sm font-semibold cursor-pointer"
        >
          Оплата частинами
        </Button>
      </div>

      {/* Accordion */}
      <ProductAccordion product={product} />
    </div>
  );
}
