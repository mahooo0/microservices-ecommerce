"use client";

import {
  ChartColumnIncreasing,
  Package,
  ShoppingCart,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AddToFavorite from "./add-to-favorite";
import ProductPricing from "./product-pricing";
import WeightVariantSelector from "./weight-variant-selector";
import ColorSelector from "./color-selector";
import ProductAccordion from "./product-accordion";
import type { ProductDetail, ProductVariant } from "@/app/product/mock-data";
import { getEffectivePricing } from "@/lib/product-utils";

type Props = {
  product: ProductDetail;
  selectedWeight?: string;
  selectedVariant?: ProductVariant;
  selectedColor?: string;
};

export default function ProductInfo({
  product,
  selectedWeight,
  selectedVariant,
  selectedColor,
}: Props) {
  const { price, oldPrice, discount } = getEffectivePricing(
    product,
    selectedVariant,
  );

  return (
    <div className="flex flex-col gap-3 font-inter">
      {/* Product code + stock */}
      <div className="flex items-center justify-between">
        <span className="text-grey-9">Код товару: {product.productCode}</span>
        {product.inStock && <span className="text-grey-9">В наявності</span>}
      </div>

      {/* Name + actions */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl text-black-1">
          {product.name} Acana Heritage Adult Large Breed Grain-Free
        </h1>
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full size-12 cursor-pointer bg-white">
            <ChartColumnIncreasing className="size-6 text-black" />
          </Button>
          <AddToFavorite productId={product.id} className="static rounded-full size-12 cursor-pointer bg-white" iconColor="text-black" iconSize="size-6" />
        </div>
      </div>

      {/* Pricing */}
      <ProductPricing price={price} oldPrice={oldPrice} discount={discount} />
      <div className="flex flex-col gap-6 mb-5">
        {/* Weight variant selector (variable products only) */}
        {product.type === "variable" && product.variants && (
          <WeightVariantSelector
            variants={product.variants}
            selectedWeight={selectedWeight}
          />
        )}

        {/* Color selector (products with colors only) */}
        {product.colors && product.colors.length > 0 && (
          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
          />
        )}
      </div>

      {/* 2x2 Button grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 mb-7">
        <Button className="h-15 rounded-full font-unbounded bg-gradient-blue-to-lightblue text-black-1 text-base font-medium hover:opacity-90 cursor-pointer">
          До кошику
          <ShoppingCart className="size-5" />
        </Button>
        <Button className="h-15 rounded-full bg-black-1 font-unbounded text-white text-base font-medium hover:bg-black-1/90 cursor-pointer">
          Купити в 1 клік
          <ShoppingCart className="size-6 ml-2" />
        </Button>
        <Button
          variant="outline"
          className="h-15 rounded-full font-unbounded text-base font-medium cursor-pointer border-black-1">
          Купити в боксі
          <Package className="size-6 ml-2" />
        </Button>
        <Button
          variant="outline"
          className="h-15 rounded-full font-unbounded text-base font-medium cursor-pointer border-black-1">
          Оплата частинами
          <CreditCard className="size-6 ml-2" />
        </Button>
      </div>

      {/* Accordion */}
      <ProductAccordion product={product} />
    </div>
  );
}
