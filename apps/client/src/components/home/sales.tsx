import Image from "next/image";
import ProductCard from "../product/product-card";

const mockProducts = [
  {
    id: 1,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: '2000 г',
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "variable",
  },
  {
    id: 2,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: '2000 г',
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "variable",
  },
  {
    id: 3,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: '2000 г',
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "single",
  },
  {
    id: 4,
    name: "Royal Canin Kitten Dry Food",
    description: "Royal Canin Kitten Dry Food 2kg",
    price: 1243,
    weight: '2000 г',
    image: "/images/product.png",
    badge: "НОВИНКИ",
    type: "variable",
  },
];

export default function Sales() {
  return (
    <section className="bg-gradient-green-to-blue pt-[130px] pb-[173px]">
      <div className="container max-w-[1730px]!">
        <div className="flex flex-col gap-12">
          <h2 className="font-unbounded font-bold text-[56px] uppercase text-center">
            Акцiї
          </h2>
          <div className="grid grid-cols-[minmax(400px,_857px)_1fr] gap-6">
            <div className="rounded-2xl relative overflow-hidden border flex flex-col border-white bg-white/30 px-[50px] text-center pt-[120px]">
              <div className="flex flex-col gap-3">
                <h2 className="font-unbounded font-bold text-[48px] leading-none">
                  Любов у кожній мисці ❤️
                </h2>
                <p className="text-[32px] font-medium leading-none">
                  Якісний корм і корисні смаколики для здоров’я та енергії твого
                  друга.
                </p>
              </div>
              <Image
                src="/images/home/sale-dog.png"
                alt="sale"
                width={650}
                height={650}
                className="mx-auto absolute left-1/2 -translate-x-1/2 -bottom-[190px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
