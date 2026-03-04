import { type Product, type ProductVariant, type ProductColor, mockProducts } from "@/app/catalog/mock-data";

export type { ProductVariant, ProductColor };

export type ProductDetail = Product & {
  productCode: string;
  inStock: boolean;
  images: string[];
  oldPrice?: number;
  discount?: number;
  variants?: ProductVariant[];
  colors?: ProductColor[];
  composition: string;
  fullDescription: string;
};

const compositions: Record<string, string> = {
  premium:
    "Дегідратоване м'ясо птиці, рис, пшениця, тваринні жири, ізолят рослинних білків, кукурудза, кукурудзяне борошно, гідролізат білків тваринного походження, буряковий жом, мінеральні речовини, риб'ячий жир, соєва олія, дріжджі, фруктоолігосахариди.",
  holistic:
    "Свіже м'ясо курчати (16%), дегідратоване м'ясо курчати (13%), червона сочевиця, зелений горошок, свіжі курячі нутрощі (печінка, серце, нирки) 6%, оселедцева олія (3%), свіжа ціла камбала (4%), свіжі цілі яйця (4%), сушений бурячний жом, сочевиця, нут, зелена сочевиця, люцерна, водорості.",
  economy:
    "Злаки (зокрема рис 4%), м'ясо та субпродукти (зокрема курка 4%), олії та жири, рослинні субпродукти (зокрема висушений буряковий жом), мінеральні речовини, овочі (зокрема морква 0.8%).",
  superPremium:
    "М'ясо птиці (дегідратоване 27%, свіже 8%), рис, жир птиці, кукурудза, білок птиці (гідролізований), буряковий жом (висушений), м'ясо лосося (дегідратоване 3%), лігноцелюлоза, пивні дріжджі, яєчний порошок, мінеральні речовини, хлорид натрію, цикорій.",
};

const descriptions: Record<string, string> = {
  premium:
    "Повнораціонний збалансований корм, розроблений з урахуванням специфічних потреб вашого улюбленця. Спеціальна формула забезпечує оптимальне травлення та підтримує здоров'я шкіри та шерсті. Високоякісні білки сприяють підтримці м'язової маси, а збалансований комплекс вітамінів та мінералів зміцнює імунну систему.\n\nКорм містить оптимальне співвідношення поживних речовин для підтримки ідеальної ваги та життєвої енергії протягом усього дня.",
  holistic:
    "Біологічно відповідний корм, що відображає природний раціон хижака. Виготовлений зі свіжих регіональних інгредієнтів найвищої якості. Формула WholePrey включає м'ясо, хрящі та нутрощі у природних пропорціях, забезпечуючи повний спектр поживних речовин без необхідності додавання синтетичних добавок.\n\nНизькоглікемічна формула з обмеженим вмістом вуглеводів підтримує стабільний рівень цукру в крові та оптимальну вагу тіла.",
  economy:
    "Повноцінний збалансований корм для щоденного годування. Містить усі необхідні вітаміни та мінерали для підтримки здоров'я та активності вашого улюбленця. Смачна формула, яку обожнюють собаки.\n\nЗручна упаковка для щоденного використання.",
  superPremium:
    "Корм супер преміум класу, розроблений спільно з ветеринарними дієтологами. Унікальна рецептура з ретельно підібраними інгредієнтами забезпечує повноцінне харчування та підтримку здоров'я на кожному етапі життя. Спеціальний комплекс для здорових суглобів, блискучої шерсті та сильного імунітету.\n\nФормула без штучних барвників, ароматизаторів та консервантів.",
};

function getCompositionKey(cls: string): string {
  if (cls === "Холістік") return "holistic";
  if (cls === "Супер преміум") return "superPremium";
  if (cls === "Економ" || cls === "Медіум") return "economy";
  return "premium";
}

function generateVariants(
  basePrice: number,
  baseWeight: string,
): ProductVariant[] {
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

function addSaleToVariants(
  variants: ProductVariant[],
  discount: number,
): ProductVariant[] {
  return variants.map((v) => ({
    ...v,
    oldPrice: Math.round(v.price / (1 - discount / 100) / 10) * 10,
  }));
}

function buildDetail(product: Product): ProductDetail {
  const key = getCompositionKey(product.class);
  const isSale = product.sale;
  const discount = isSale ? (product.id % 2 === 0 ? 15 : 10) : undefined;
  const oldPrice =
    isSale && discount
      ? Math.round(product.price / (1 - discount / 100) / 10) * 10
      : undefined;

  let variants: ProductVariant[] | undefined;
  if (product.type === "variable" && product.weight) {
    variants = generateVariants(product.price, product.weight);
    if (isSale && discount) {
      variants = addSaleToVariants(variants, discount);
    }
  }

  return {
    ...product,
    productCode: `PF-${String(product.id).padStart(6, "0")}`,
    inStock: true,
    images: [product.image, product.image, product.image],
    oldPrice,
    discount,
    variants,
    colors: product.colors,
    composition: compositions[key],
    fullDescription: descriptions[key],
  };
}

export const mockProductDetails: Record<number, ProductDetail> =
  Object.fromEntries(mockProducts.map((p) => [p.id, buildDetail(p)]));

export function getProductById(id: number): ProductDetail | undefined {
  return mockProductDetails[id];
}

export function getRecommendedProducts(
  currentId: number,
  count = 4,
): Product[] {
  const others = mockProducts.filter((p) => p.id !== currentId);
  const shuffled = [...others].sort(
    (a, b) => ((a.id * 7 + currentId) % 24) - ((b.id * 7 + currentId) % 24),
  );
  return shuffled.slice(0, count);
}
