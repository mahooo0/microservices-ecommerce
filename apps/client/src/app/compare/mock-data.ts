import { type ProductVariant } from "@/app/product/mock-data";

export type CompareProduct = {
  id: number;
  type: "simple" | "variable";
  badge?: "top" | "new" | "sale";
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  weight: string;
  variants?: ProductVariant[];
  attributes: Record<string, string>;
};

function generateVariants(basePrice: number, baseWeight: string): ProductVariant[] {
  const weightNum = parseFloat(baseWeight);
  const pricePerKg = basePrice / weightNum;

  if (weightNum >= 10) {
    return [
      { weight: "2 кг", price: Math.round((pricePerKg * 2) / 10) * 10 },
      { weight: "6 кг", price: Math.round((pricePerKg * 6) / 10) * 10 },
      { weight: baseWeight, price: basePrice },
    ];
  }

  return [
    { weight: "340 г", price: Math.round((pricePerKg * 0.34) / 10) * 10 },
    { weight: "2 кг", price: Math.round((pricePerKg * 2) / 10) * 10 },
    { weight: baseWeight, price: basePrice },
  ];
}

export const compareProducts: CompareProduct[] = [
  {
    id: 1,
    type: "variable",
    badge: "top",
    image: "/images/product.png",
    name: "Royal Canin Maxi Adult",
    description: "Сухий корм для дорослих собак великих порід",
    price: 1850,
    weight: "15 кг",
    variants: generateVariants(1850, "15 кг"),
    attributes: {
      moisture: "10%",
      weight: "15 кг",
      calories: "3800 ккал/кг",
      breed: "Великі",
      fiber: "2.5%",
      age: "Дорослі",
    },
  },
  {
    id: 2,
    type: "variable",
    image: "/images/product.png",
    name: "Acana Heritage Adult",
    description: "Сухий корм для дорослих собак усіх порід",
    price: 2450,
    weight: "11.4 кг",
    variants: generateVariants(2450, "11.4 кг"),
    attributes: {
      moisture: "12%",
      weight: "11.4 кг",
      calories: "3510 ккал/кг",
      breed: "Усі породи",
      fiber: "5%",
      age: "Дорослі",
    },
  },
  {
    id: 3,
    type: "variable",
    badge: "new",
    image: "/images/product.png",
    name: "Brit Premium Adult L",
    description: "Повнораціонний корм для великих порід",
    price: 1320,
    weight: "15 кг",
    variants: generateVariants(1320, "15 кг"),
    attributes: {
      moisture: "10%",
      weight: "15 кг",
      calories: "4100 ккал/кг",
      breed: "Великі",
      fiber: "3%",
      age: "Дорослі",
    },
  },
  {
    id: 4,
    type: "simple",
    badge: "sale",
    image: "/images/product.png",
    name: "Purina Pro Plan Large",
    description: "Корм для великих собак з куркою",
    price: 1650,
    oldPrice: 1830,
    weight: "14 кг",
    attributes: {
      moisture: "14%",
      weight: "14 кг",
      calories: "3650 ккал/кг",
      breed: "Великі",
      fiber: "4%",
      age: "Дорослі",
    },
  },
];

export const comparisonAttributes = [
  { label: "Вологість", key: "moisture"},
  { label: "Вага", key: "weight"},
  { label: "Калораж", key: "calories"},
  { label: "Порода", key: "breed"},
  { label: "Клетчатка", key: "fiber"},
  { label: "Вік", key: "age"},
] as const;
