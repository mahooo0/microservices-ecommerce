import { formatPrice } from "@/lib/product-utils";

type Props = {
  price: number;
  oldPrice?: number;
  discount?: number;
};

export default function ProductPricing({ price, oldPrice, discount }: Props) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {oldPrice && (
        <>
          <span className="text-lg line-through text-grey-9">
            {formatPrice(oldPrice)} грн
          </span>
          {discount && (
            <span className="bg-red-500 text-white text-sm font-semibold px-2 py-0.5 rounded-md">
              -{discount}%
            </span>
          )}
        </>
      )}
      <span className="font-unbounded font-bold text-3xl text-black-1">
        {formatPrice(price)}{" "}
        <span className="text-lg font-normal">ГРН</span>
      </span>
    </div>
  );
}
