import type { ProductDetail, ProductVariant } from "@/app/product/mock-data";
import { catalogCategories, subcategoriesMap } from "@/app/catalog/mock-data";

export function formatPrice(price: number): string {
  return price.toLocaleString("uk-UA");
}

export function getEffectivePricing(
  product: ProductDetail,
  selectedVariant?: ProductVariant,
): { price: number; oldPrice?: number; discount?: number } {
  if (selectedVariant) {
    return {
      price: selectedVariant.price,
      oldPrice: selectedVariant.oldPrice,
      discount: product.discount,
    };
  }
  return {
    price: product.price,
    oldPrice: product.oldPrice,
    discount: product.discount,
  };
}

export function buildBreadcrumbItems(product: ProductDetail) {
  const category = catalogCategories.find(
    (c) => c.slug === product.categorySlug,
  );
  const subcategories = subcategoriesMap[product.categorySlug] ?? [];
  const subcategory = subcategories.find(
    (s) => s.slug === product.subcategorySlug,
  );

  const items: { label: string; href?: string }[] = [
    { label: "Головна", href: "/" },
  ];

  if (category) {
    items.push({
      label: category.name,
      href: `/catalog/${category.slug}`,
    });
  }

  if (category && subcategory) {
    items.push({
      label: subcategory.name,
      href: `/catalog/${category.slug}/${subcategory.slug}`,
    });
  }

  items.push({ label: product.name });

  return items;
}
