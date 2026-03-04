export type CategoryItem = {
  name: string;
  slug: string;
  image: string;
};

export type SubcategoryItem = {
  name: string;
  slug: string;
  icon: string;
};

export const catalogCategories: CategoryItem[] = [
  {
    name: "Собаки",
    slug: "sobaky",
    image: "/images/catalog/dogs.svg",
  },
  {
    name: "Коти",
    slug: "koty",
    image: "/images/catalog/cats.svg",
  },
  {
    name: "Гризуни",
    slug: "hryzuny",
    image: "/images/catalog/rodents.svg",
  },
  {
    name: "Риби",
    slug: "ryby",
    image: "/images/catalog/fish.svg",
  },
  {
    name: "Птахи",
    slug: "ptakhy",
    image: "/images/catalog/birds.svg",
  },
  {
    name: "Рептилії",
    slug: "reptylii",
    image: "/images/catalog/reptiles.svg",
  },
  {
    name: "Тхори",
    slug: "tkhory",
    image: "/images/catalog/tkhors.svg",
  },
];

export const subcategoriesMap: Record<string, SubcategoryItem[]> = {
  sobaky: [
    { name: "Годування", slug: "hoduvannia", icon: "/images/catalog/cats/feed.png", },
    { name: "Домашній затишок", slug: "domashnii-zatyshok", icon: "/images/catalog/cats/home.png" },
    { name: "Ігри та розваги", slug: "ihry-ta-rozvahy", icon: "/images/catalog/cats/games.png" },
    { name: "Подорожі", slug: "podorozhi", icon: "/images/catalog/cats/travel.png" },
    { name: "Ветеринарна аптека", slug: "veterynanra-apteka", icon: "/images/catalog/cats/vet.png" },
    { name: "Догляд та гігієна", slug: "dohliad-ta-hihiiena", icon: "/images/catalog/cats/brush.png" },
  ],
  koty: [
    { name: "Годування", slug: "hoduvannia", icon: "/images/catalog/cats/feed.png", },
    { name: "Домашній затишок", slug: "domashnii-zatyshok", icon: "/images/catalog/cats/home.png" },
    { name: "Ігри та розваги", slug: "ihry-ta-rozvahy", icon: "/images/catalog/cats/games.png" },
    { name: "Подорожі", slug: "podorozhi", icon: "/images/catalog/cats/travel.png" },
    { name: "Ветеринарна аптека", slug: "veterynanra-apteka", icon: "/images/catalog/cats/vet.png" },
    { name: "Догляд та гігієна", slug: "dohliad-ta-hihiiena", icon: "/images/catalog/cats/brush.png" },
  ],
  hryzuny: [
    { name: "Годування", slug: "hoduvannia", icon: "/images/catalog/cats/feed.png", },
    { name: "Домашній затишок", slug: "domashnii-zatyshok", icon: "/images/catalog/cats/home.png" },
    { name: "Ігри та розваги", slug: "ihry-ta-rozvahy", icon: "/images/catalog/cats/games.png" },
    { name: "Подорожі", slug: "podorozhi", icon: "/images/catalog/cats/travel.png" },
    { name: "Ветеринарна аптека", slug: "veterynanra-apteka", icon: "/images/catalog/cats/vet.png" },
    { name: "Догляд та гігієна", slug: "dohliad-ta-hihiiena", icon: "/images/catalog/cats/brush.png" },
  ],
  ryby: [
    { name: "Годування", slug: "hoduvannia", icon: "/images/catalog/cats/feed.png", },
    { name: "Домашній затишок", slug: "domashnii-zatyshok", icon: "/images/catalog/cats/home.png" },
    { name: "Ігри та розваги", slug: "ihry-ta-rozvahy", icon: "/images/catalog/cats/games.png" },
    { name: "Подорожі", slug: "podorozhi", icon: "/images/catalog/cats/travel.png" },
    { name: "Ветеринарна аптека", slug: "veterynanra-apteka", icon: "/images/catalog/cats/vet.png" },
    { name: "Догляд та гігієна", slug: "dohliad-ta-hihiiena", icon: "/images/catalog/cats/brush.png" },
  ],
  ptakhy: [
    { name: "Годування", slug: "hoduvannia", icon: "/images/catalog/cats/feed.png", },
    { name: "Домашній затишок", slug: "domashnii-zatyshok", icon: "/images/catalog/cats/home.png" },
    { name: "Ігри та розваги", slug: "ihry-ta-rozvahy", icon: "/images/catalog/cats/games.png" },
    { name: "Подорожі", slug: "podorozhi", icon: "/images/catalog/cats/travel.png" },
    { name: "Ветеринарна аптека", slug: "veterynanra-apteka", icon: "/images/catalog/cats/vet.png" },
    { name: "Догляд та гігієна", slug: "dohliad-ta-hihiiena", icon: "/images/catalog/cats/brush.png" },
  ],
  reptylii: [
    { name: "Годування", slug: "hoduvannia", icon: "/images/catalog/cats/feed.png", },
    { name: "Домашній затишок", slug: "domashnii-zatyshok", icon: "/images/catalog/cats/home.png" },
    { name: "Ігри та розваги", slug: "ihry-ta-rozvahy", icon: "/images/catalog/cats/games.png" },
    { name: "Подорожі", slug: "podorozhi", icon: "/images/catalog/cats/travel.png" },
    { name: "Ветеринарна аптека", slug: "veterynanra-apteka", icon: "/images/catalog/cats/vet.png" },
    { name: "Догляд та гігієна", slug: "dohliad-ta-hihiiena", icon: "/images/catalog/cats/brush.png" },
  ],
  tkhory: [
    { name: "Годування", slug: "hoduvannia", icon: "/images/catalog/cats/feed.png", },
    { name: "Домашній затишок", slug: "domashnii-zatyshok", icon: "/images/catalog/cats/home.png" },
    { name: "Ігри та розваги", slug: "ihry-ta-rozvahy", icon: "/images/catalog/cats/games.png" },
    { name: "Подорожі", slug: "podorozhi", icon: "/images/catalog/cats/travel.png" },
    { name: "Ветеринарна аптека", slug: "veterynanra-apteka", icon: "/images/catalog/cats/vet.png" },
    { name: "Догляд та гігієна", slug: "dohliad-ta-hihiiena", icon: "/images/catalog/cats/brush.png" },
  ],
};

export const seoContent = {
  title: "Товари для домашніх тварин",
  paragraphs: [
    "«Правильне харчування та якісний догляд — це основа здоров'я вашого улюбленця. У нашому магазині ви знайдете широкий асортимент товарів для собак, котів, гризунів, птахів, рептилій та інших домашніх тварин. Ми ретельно підбираємо кожен продукт, щоб забезпечити найкращу якість та безпеку для ваших вихованців.»",
    "«Наша команда експертів постійно слідкує за новинками зооіндустрії та обирає лише перевірені бренди з усього світу. Від преміум-кормів до іграшок, від засобів гігієни до аксесуарів для подорожей — все, що потрібно вашому улюбленцю, зібрано в одному місці. Ми віримо, що кожна тварина заслуговує на найкраще.»",
  ],
};

// === Product listing mock data ===

export type ProductVariant = {
  weight: string;
  price: number;
  oldPrice?: number;
};

export type ProductColor = {
  name: string;
  hex: string;
};

export type Product = {
  id: number;
  type: "simple" | "variable";
  badge?: "top" | "new" | "sale";
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  weight?: string;
  variants?: ProductVariant[];
  colors?: ProductColor[];
  brand: string;
  class: string;
  age: string;
  petSize: string;
  weightCategory: string;
  foodType: string;
  country: string;
  sale: boolean;
  categorySlug: string;
  subcategorySlug: string;
};

function generateVariants(basePrice: number, baseWeight: string, isSale: boolean): ProductVariant[] {
  const weightNum = parseFloat(baseWeight);
  const pricePerKg = basePrice / weightNum;

  const variants: ProductVariant[] = weightNum >= 10
    ? [
        { weight: "2 кг", price: Math.round((pricePerKg * 2) / 10) * 10 },
        { weight: "6 кг", price: Math.round((pricePerKg * 6) / 10) * 10 },
        { weight: baseWeight, price: basePrice },
      ]
    : [
        { weight: "340 г", price: Math.round((pricePerKg * 0.34) / 10) * 10 },
        { weight: "2 кг", price: Math.round((pricePerKg * 2) / 10) * 10 },
        { weight: baseWeight, price: basePrice },
      ];

  if (isSale) {
    return variants.map((v) => ({
      ...v,
      oldPrice: Math.round((v.price / 0.85) / 10) * 10,
    }));
  }

  return variants;
}

export const mockProducts: Product[] = [
  { id: 1, type: "variable", badge: "top", image: "/images/product.png", name: "Royal Canin Maxi Adult", description: "Сухий корм для дорослих собак великих порід", price: 1850, weight: "15 кг", variants: generateVariants(1850, "15 кг", false), brand: "Royal Canin", class: "Преміум", age: "Дорослі", petSize: "Великі", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Франція", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 2, type: "variable", badge: "sale", image: "/images/product.png", name: "Acana Heritage Adult Large Breed Grain-Free", description: "Сухий корм для дорослих собак усіх порід", price: 2200, oldPrice: 2400, weight: "11.4 кг", variants: generateVariants(2200, "11.4 кг", true), colors: [{ name: "Червоний", hex: "#E85D5D" }, { name: "Зелений", hex: "#A8D86B" }, { name: "Фіолетовий", hex: "#C9A8D8" }, { name: "Персиковий", hex: "#E8D8A8" }], brand: "Acana", class: "Холістік", age: "Дорослі", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Канада", sale: true, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 3, type: "variable", badge: "new", image: "/images/product.png", name: "Brit Premium Adult L", description: "Повнораціонний корм для великих порід", price: 1320, weight: "15 кг", variants: generateVariants(1320, "15 кг", false), brand: "Brit", class: "Преміум", age: "Дорослі", petSize: "Великі", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Чехія", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 4, type: "variable", badge: "sale", image: "/images/product.png", name: "Josera SensiPlus", description: "Корм для вибагливих собак з качкою", price: 1680, oldPrice: 1980, weight: "12.5 кг", variants: generateVariants(1680, "12.5 кг", true), brand: "Josera", class: "Супер преміум", age: "Дорослі", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Німеччина", sale: true, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 5, type: "variable", image: "/images/product.png", name: "Orijen Original Dog", description: "Біологічно відповідний корм для собак", price: 3200, weight: "11.4 кг", variants: generateVariants(3200, "11.4 кг", false), brand: "Orijen", class: "Холістік", age: "Дорослі", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Канада", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 6, type: "simple", image: "/images/product.png", name: "Pedigree Vital Adult", description: "Повноцінний сухий корм для собак", price: 580, brand: "Pedigree", class: "Економ", age: "Дорослі", petSize: "Середні", weightCategory: "3-5 кг", foodType: "Сухий корм", country: "США", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 7, type: "variable", badge: "top", image: "/images/product.png", name: "Hills Science Plan", description: "Корм для дорослих собак середніх порід", price: 2100, weight: "12 кг", variants: generateVariants(2100, "12 кг", false), brand: "Hills", class: "Супер преміум", age: "Дорослі", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "США", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 8, type: "variable", image: "/images/product.png", name: "Pro Plan Puppy Large", description: "Корм для цуценят великих порід з куркою", price: 1950, weight: "12 кг", variants: generateVariants(1950, "12 кг", false), brand: "Pro Plan", class: "Супер преміум", age: "Цуценята", petSize: "Великі", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Франція", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 9, type: "simple", badge: "sale", image: "/images/product.png", name: "Club 4 Paws Premium", description: "Сухий корм для дорослих собак", price: 420, oldPrice: 490, brand: "Club 4 Paws", class: "Медіум", age: "Дорослі", petSize: "Середні", weightCategory: "3-5 кг", foodType: "Сухий корм", country: "Україна", sale: true, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 10, type: "variable", image: "/images/product.png", name: "Grandorf Adult Medium", description: "Гіпоалергенний корм з ягням та рисом", price: 2800, weight: "12 кг", variants: generateVariants(2800, "12 кг", false), brand: "Grandorf", class: "Холістік", age: "Дорослі", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Бельгія", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 11, type: "simple", image: "/images/product.png", name: "Royal Canin Mini Indoor", description: "Корм для малих собак домашнього утримання", price: 890, brand: "Royal Canin", class: "Преміум", age: "Дорослі", petSize: "Малі", weightCategory: "1-3 кг", foodType: "Сухий корм", country: "Франція", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 12, type: "variable", badge: "new", image: "/images/product.png", name: "Acana Puppy Small", description: "Корм для цуценят малих порід", price: 1750, weight: "6 кг", variants: generateVariants(1750, "6 кг", false), brand: "Acana", class: "Холістік", age: "Цуценята", petSize: "Малі", weightCategory: "5-10 кг", foodType: "Сухий корм", country: "Канада", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 13, type: "variable", image: "/images/product.png", name: "Brit Care Senior L&R", description: "Корм для літніх собак з ягням", price: 1450, weight: "12 кг", variants: generateVariants(1450, "12 кг", false), brand: "Brit", class: "Супер преміум", age: "Літні", petSize: "Великі", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Чехія", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 14, type: "simple", badge: "sale", image: "/images/product.png", name: "Josera Mini Junior", description: "Корм для цуценят малих порід", price: 950, oldPrice: 1120, brand: "Josera", class: "Супер преміум", age: "Цуценята", petSize: "Малі", weightCategory: "1-3 кг", foodType: "Сухий корм", country: "Німеччина", sale: true, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 15, type: "variable", image: "/images/product.png", name: "Orijen Puppy", description: "Біологічно відповідний корм для цуценят", price: 3500, weight: "11.4 кг", variants: generateVariants(3500, "11.4 кг", false), brand: "Orijen", class: "Холістік", age: "Цуценята", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Канада", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 16, type: "simple", image: "/images/product.png", name: "Pedigree Puppy", description: "Корм для цуценят з куркою", price: 490, brand: "Pedigree", class: "Економ", age: "Цуценята", petSize: "Середні", weightCategory: "3-5 кг", foodType: "Сухий корм", country: "США", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 17, type: "variable", image: "/images/product.png", name: "Hills Ideal Balance", description: "Натуральний корм для дорослих собак", price: 2350, weight: "12 кг", variants: generateVariants(2350, "12 кг", false), brand: "Hills", class: "Супер преміум", age: "Дорослі", petSize: "Великі", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "США", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 18, type: "variable", badge: "top", image: "/images/product.png", name: "Pro Plan Medium Adult", description: "Корм для дорослих собак середніх порід", price: 1780, weight: "14 кг", variants: generateVariants(1780, "14 кг", false), brand: "Pro Plan", class: "Супер преміум", age: "Дорослі", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Франція", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 19, type: "simple", image: "/images/product.png", name: "Club 4 Paws Puppy", description: "Корм для цуценят усіх порід", price: 380, brand: "Club 4 Paws", class: "Медіум", age: "Цуценята", petSize: "Середні", weightCategory: "3-5 кг", foodType: "Сухий корм", country: "Україна", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 20, type: "variable", badge: "sale", image: "/images/product.png", name: "Grandorf Puppy", description: "Гіпоалергенний корм для цуценят", price: 2600, oldPrice: 3060, weight: "12 кг", variants: generateVariants(2600, "12 кг", true), brand: "Grandorf", class: "Холістік", age: "Цуценята", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Бельгія", sale: true, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 21, type: "variable", image: "/images/product.png", name: "Royal Canin Medium", description: "Корм для собак середніх порід з птицею", price: 1650, weight: "15 кг", variants: generateVariants(1650, "15 кг", false), brand: "Royal Canin", class: "Преміум", age: "Дорослі", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Франція", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 22, type: "simple", image: "/images/product.png", name: "Brit Premium Senior", description: "Корм для літніх собак з куркою", price: 1100, brand: "Brit", class: "Преміум", age: "Літні", petSize: "Середні", weightCategory: "3-5 кг", foodType: "Сухий корм", country: "Чехія", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 23, type: "variable", image: "/images/product.png", name: "Acana Senior Dog", description: "Корм для літніх собак усіх порід", price: 2700, weight: "11.4 кг", variants: generateVariants(2700, "11.4 кг", false), brand: "Acana", class: "Холістік", age: "Літні", petSize: "Середні", weightCategory: "10-20 кг", foodType: "Сухий корм", country: "Канада", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
  { id: 24, type: "simple", badge: "new", image: "/images/product.png", name: "Josera Large Breed", description: "Корм для собак великих порід", price: 1550, brand: "Josera", class: "Супер преміум", age: "Дорослі", petSize: "Великі", weightCategory: "5-10 кг", foodType: "Сухий корм", country: "Німеччина", sale: false, categorySlug: "sobaky", subcategorySlug: "hoduvannia" },
];

export const filterOptions = {
  brands: ["Royal Canin", "Acana", "Brit", "Josera", "Orijen", "Pedigree", "Hills", "Pro Plan", "Club 4 Paws", "Grandorf"],
  classes: ["Економ", "Медіум", "Преміум", "Супер преміум", "Холістік"],
  ages: ["Цуценята", "Дорослі", "Літні"],
  sizes: ["Малі", "Середні", "Великі"],
  weights: ["1-3 кг", "3-5 кг", "5-10 кг", "10-20 кг"],
  foodTypes: ["Сухий корм", "Вологий корм", "Ласощі"],
  countries: ["Франція", "Канада", "Чехія", "Німеччина", "США", "Україна", "Бельгія"],
};

export const subcategoryProductSeoContent = {
  title: "Сухий корм для собак",
  paragraphs: [
    "«Вибір правильного сухого корму для вашого собаки — це запорука його здоров'я та довголіття. У нашому магазині представлено широкий асортимент сухих кормів від провідних світових виробників, які забезпечують збалансоване харчування для собак будь-якого віку, розміру та рівня активності. Кожен продукт ретельно відібраний нашими експертами.»",
    "«Ми пропонуємо корми різних класів — від економ до холістік, щоб кожен власник міг обрати оптимальний варіант для свого улюбленця. Преміум та супер-преміум корми містять високоякісні інгредієнти, натуральне м'ясо та корисні добавки для підтримки імунітету, здоров'я шкіри та блискучої шерсті.»",
    "«Серед наших брендів — Royal Canin, Acana, Orijen, Hills, Pro Plan та інші перевірені виробники. Кожен бренд має свої унікальні формули, розроблені ветеринарними дієтологами з урахуванням особливостей різних порід та вікових груп. Ви завжди можете звернутися до наших консультантів за допомогою у виборі.»",
    "«Замовляйте сухий корм для собак з доставкою по всій Україні. Ми гарантуємо оригінальність продукції, свіжість та правильне зберігання. Постійним клієнтам доступна програма лояльності та спеціальні пропозиції. Оберіть найкраще для свого чотирилапого друга!»",
  ],
};
