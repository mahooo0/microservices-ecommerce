import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CategoryCard } from "@/components/catalog/category-card";
import { SeoText } from "@/components/catalog/seo-text";
import { catalogCategories, seoContent } from "./mock-data";

export default function CatalogPage() {
  return (
    <>
      <h1 className="font-unbounded text-center font-bold text-[56px] uppercase mt-4 mb-6 leading-none">
        КАТАЛОГ
      </h1>
      <Breadcrumbs
        items={[{ label: "Головна", href: "/" }, { label: "Каталог" }]}
      />

      <div className="grid grid-cols-4 gap-6 mt-6">
        {catalogCategories.map((category) => (
          <CategoryCard
            key={category.slug}
            name={category.name}
            slug={category.slug}
            image={category.image}
          />
        ))}
        <CategoryCard
          name="Всі товари"
          slug="all"
          isAllProducts
        />
      </div>

      <SeoText title={seoContent.title} paragraphs={seoContent.paragraphs} />
    </>
  );
}
