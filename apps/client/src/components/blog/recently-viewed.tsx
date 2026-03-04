import ProductCard from "@/components/product/product-card";

const mockProducts = [
  {
    id: 1,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: 2000,
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "variable",
  },
  {
    id: 2,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: 2000,
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "variable",
  },
  {
    id: 3,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: 2000,
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "single",
  },
  {
    id: 4,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: 2000,
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "variable",
  },
];

export default function RecentlyViewed() {
  return (
    <section className="pb-[100px] pt-5">
      <div className="container">
        <h2 className="font-unbounded font-bold text-[56px] uppercase mb-10">
          ПЕРЕГЛЯНУТИ ЗНОВУ:
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
