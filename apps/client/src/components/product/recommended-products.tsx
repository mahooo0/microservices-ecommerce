import type { Product } from "@/app/catalog/mock-data";
import ProductCard from "./product-card";

type Props = {
  products: Product[];
};

export default function RecommendedProducts({ products }: Props) {
  return (
    <section className="w-full py-16">
      <div className="container">
        <h2 className="font-unbounded font-bold text-[72px] uppercase text-black-1 mb-10">
          ДЛЯ ВАС
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
