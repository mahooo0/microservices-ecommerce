import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import RecommendedProducts from "@/components/product/recommended-products";
import { mockProducts } from "@/app/catalog/mock-data";
import { CompareSection } from "@/components/compare/compare-section";

const breadcrumbItems = [
  { label: "Головна", href: "/" },
  { label: "Порівняння" },
];

export default function ComparePage() {
  const recommendedProducts = mockProducts.slice(0, 4);

  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        <CompareSection />
      </div>
      <RecommendedProducts products={recommendedProducts} />
    </main>
  );
}
