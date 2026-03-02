import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SeoText } from "@/components/catalog/seo-text";
import ProductFilters from "@/components/catalog/product-filters";
import SortingBar from "@/components/catalog/sorting-bar";
import ProductGrid from "@/components/catalog/product-grid";
import {
  catalogCategories,
  subcategoriesMap,
  mockProducts,
  filterOptions,
  subcategoryProductSeoContent,
} from "../../mock-data";
import { searchParamsCache } from "./search-params";
import type { Product } from "../../mock-data";
import SortDropdown from "@/components/catalog/sort-dropdown";

const PRODUCTS_PER_PAGE = 12;

type SubcategoryPageProps = {
  params: Promise<{ categorySlug: string; subcategorySlug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({
  params,
}: SubcategoryPageProps): Promise<Metadata> {
  const { categorySlug, subcategorySlug } = await params;
  const category = catalogCategories.find((c) => c.slug === categorySlug);
  const subcategory = subcategoriesMap[categorySlug]?.find(
    (s) => s.slug === subcategorySlug,
  );

  if (!category || !subcategory) {
    return { title: "Сторінка не знайдена" };
  }

  return {
    title: `${subcategory.name} — ${category.name} — Каталог — 4Friends Pet Store`,
    description: `${subcategory.name} для ${category.name.toLowerCase()}: широкий вибір товарів за найкращими цінами.`,
  };
}

function filterProducts(
  products: Product[],
  filters: Awaited<ReturnType<typeof searchParamsCache.parse>>,
) {
  return products.filter((product) => {
    if (product.price < filters.priceMin || product.price > filters.priceMax)
      return false;
    if (filters.sale && !product.sale) return false;
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
      return false;
    if (filters.classes.length > 0 && !filters.classes.includes(product.class))
      return false;
    if (filters.ages.length > 0 && !filters.ages.includes(product.age))
      return false;
    if (filters.sizes.length > 0 && !filters.sizes.includes(product.petSize))
      return false;
    if (
      filters.weights.length > 0 &&
      !filters.weights.includes(product.weightCategory)
    )
      return false;
    if (
      filters.foodTypes.length > 0 &&
      !filters.foodTypes.includes(product.foodType)
    )
      return false;
    if (
      filters.countries.length > 0 &&
      !filters.countries.includes(product.country)
    )
      return false;
    return true;
  });
}

function sortProducts(products: Product[], sort: string) {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name, "uk"));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name, "uk"));
    default:
      return sorted;
  }
}

export default async function SubcategoryPage({
  params,
  searchParams,
}: SubcategoryPageProps) {
  const { categorySlug, subcategorySlug } = await params;
  const category = catalogCategories.find((c) => c.slug === categorySlug);
  const subcategory = subcategoriesMap[categorySlug]?.find(
    (s) => s.slug === subcategorySlug,
  );

  if (!category || !subcategory) {
    notFound();
  }

  const filters = await searchParamsCache.parse(await searchParams);

  // Get products for this category + subcategory
  const categoryProducts = mockProducts.filter(
    (p) =>
      p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug,
  );

  // Apply filters and sorting
  const filteredProducts = filterProducts(categoryProducts, filters);
  const sortedProducts = sortProducts(filteredProducts, filters.sort);

  // Pagination
  const totalCount = sortedProducts.length;
  const totalPages = Math.ceil(totalCount / PRODUCTS_PER_PAGE);
  const page = Math.min(Math.max(filters.page, 1), Math.max(totalPages, 1));
  const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE,
  );

  return (
    <>
      <h1 className="font-unbounded text-center font-bold text-[56px] uppercase mt-6 mb-10 leading-none">
        {subcategory.name}
      </h1>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.name, href: `/catalog/${categorySlug}` },
          { label: subcategory.name },
        ]}
      />

      <div className="flex mt-4 gap-6 mb-10">
        <div className="max-w-[402px] w-full flex flex-col gap-6">
          <SortDropdown />
          <ProductFilters filterOptions={filterOptions} />
        </div>
        <div className="flex flex-col gap-6">
          <SortingBar
            shownCount={paginatedProducts.length}
            totalCount={totalCount}
          />
          <ProductGrid
            products={paginatedProducts}
            totalPages={totalPages}
            currentPage={page}
          />
        </div>
      </div>

      <SeoText
        title={subcategoryProductSeoContent.title}
        paragraphs={subcategoryProductSeoContent.paragraphs}
      />
    </>
  );
}
