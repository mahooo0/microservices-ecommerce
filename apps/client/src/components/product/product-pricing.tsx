import { formatPrice } from "@/lib/product-utils";

type Props = {
  price: number;
  oldPrice?: number;
  discount?: number;
};

export default function ProductPricing({ price, oldPrice, discount }: Props) {
  return (
    <div className="flex flex-col">
      {oldPrice && (
        <div className="flex items-center gap-2 relative w-fit pr-2">
          <span className="text-lg line-through text-grey-9">
            {formatPrice(oldPrice)} грн
          </span>
          {discount && (
            <span className="text-sm text-black absolute top-0 left-full">-{discount}%</span>
          )}
        </div>
      )}
      <span className="font-unbounded font-medium text-[32px] uppercase text-black-1 inline-block -mt-2">
        {formatPrice(price)}{" "}
        <span>ГРН</span>
      </span>
    </div>
  );
}
