import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SubcategoryCard } from "@/components/catalog/subcategory-card";
import { SeoText } from "@/components/catalog/seo-text";
import { catalogCategories, subcategoriesMap, seoContent } from "../mock-data";

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = catalogCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    return { title: "Категорія не знайдена" };
  }

  return {
    title: `${category.name} — Каталог — 4Friends Pet Store`,
    description: `Товари для категорії ${category.name}: годування, догляд, ігри та інше.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = catalogCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const subcategories = subcategoriesMap[categorySlug] ?? [];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Головна", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.name },
        ]}
      />

      <h1 className="font-unbounded text-center font-bold text-[56px] uppercase mt-6 mb-10 leading-none">
        {category.name}
      </h1>

      <div className="grid grid-cols-7 gap-4">
        {subcategories.map((sub) => (
          <SubcategoryCard
            key={sub.slug}
            name={sub.name}
            slug={sub.slug}
            categorySlug={categorySlug}
            icon={sub.icon}
          />
        ))}
        <SubcategoryCard
          name="Всі товари"
          slug="all"
          categorySlug={categorySlug}
          isAllProducts
        />
      </div>

      <SeoText title={seoContent.title} paragraphs={seoContent.paragraphs} />
    </>
  );
}
