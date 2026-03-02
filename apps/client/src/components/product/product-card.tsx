import { ShoppingCart } from "lucide-react";
import Image from "next/image";
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
  return (
    <div
      key={product.id}
      className="relative rounded-2xl overflow-hidden bg-black-7 px-[27px] py-[11px]">
      <ProductBadge badge={product.badge} />
      <AddToFavorite />
      <div className="rounded-xl overflow-hidden h-[290px] w-auto mb-3">
        <Image
          src={product.image}
          alt={product.name}
          width={348}
          height={290}
          className="mx-auto h-full w-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-3 mb-6">
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
        className={cn(
          "text-white grid gap-[3px] mx-auto w-[85%] h-10 justify-between rounded-l-[8px] rounded-r-[8px] overflow-hidden",
          isVariable ? "grid-cols-3" : "grid-cols-2",
        )}>
        <span className="bg-black-1 font-medium flex items-center justify-center">
          {product.price} ₴
        </span>
        {isVariable && (
          <span className="bg-black-1 font-medium flex items-center justify-center">
            {product.weight}
          </span>
        )}
        <Button
          variant="ghost"
          className="bg-black-1 flex rounded-none h-auto items-center cursor-pointer justify-center hover:bg-grey-9 transition-all">
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
