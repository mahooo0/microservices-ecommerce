import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import ProductImageCarousel from "@/components/product/product-image-carousel";
import ProductInfo from "@/components/product/product-info";
import RecommendedProducts from "@/components/product/recommended-products";
import {
  getProductById,
  getRecommendedProducts,
} from "@/app/product/mock-data";
import { buildBreadcrumbItems } from "@/lib/product-utils";
import { searchParamsCache } from "./search-params";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    return { title: "Товар не знайдено" };
  }

  return {
    title: `${product.name} — 4Friends Pet Store`,
    description: product.description,
  };
}

export default async function ProductPage({ params, searchParams }: Props) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  const { weight } = await searchParamsCache.parse(await searchParams);

  // Resolve selected variant
  const variants = product.variants ?? [];

  if (!variants.length) {
    notFound();
  }

  let selectedWeight = weight;
  let selectedVariant = variants.find((v) => v.weight === weight);

  if (!selectedVariant) {
    const firstVariant = variants[0]!;
    selectedVariant = firstVariant;
    selectedWeight = firstVariant.weight;
  }

  if (!selectedVariant) {
    notFound();
  }

  const breadcrumbItems = buildBreadcrumbItems(product);
  const recommendedProducts = getRecommendedProducts(product.id, 4);

  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="grid grid-cols-2 gap-10 mt-8 mb-16">
          <ProductImageCarousel images={product.images} name={product.name} />
          <ProductInfo
            product={product}
            selectedWeight={selectedWeight}
            selectedVariant={selectedVariant!}
          />
        </div>
      </div>
      <RecommendedProducts products={recommendedProducts} />
    </main>
  );
}
