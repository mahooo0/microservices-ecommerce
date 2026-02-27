import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import BlogCard from "@/components/blog/blog-card";
import CategoryFilter from "@/components/blog/category-filter";
import RecentlyViewed from "@/components/blog/recently-viewed";
import FAQ from "@/components/home/faq";
import { searchParamsCache } from "./search-params";
import { mockPosts } from "./mock-data";

type BlogPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { categories } = await searchParamsCache.parse(searchParams);

  const filteredPosts =
    categories.length === 0
      ? mockPosts
      : mockPosts.filter((post) => categories.includes(post.category));

  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs
          items={[{ label: "Головна", href: "/" }, { label: "Блог" }]}
        />

        <h1 className="font-unbounded text-center font-bold text-[72px] uppercase mt-6 mb-10 leading-none">
          БЛОГ
        </h1>

        <CategoryFilter
          totalArticles={mockPosts.length}
          shownArticles={filteredPosts.length}
        />

        <div className="grid grid-cols-4 gap-6 mb-10">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <FAQ className="py-[120px]" />
      <RecentlyViewed />
    </main>
  );
}
