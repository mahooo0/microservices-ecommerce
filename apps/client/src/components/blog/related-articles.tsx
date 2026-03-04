import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/components/blog/blog-card";

interface RelatedArticlesProps {
  posts: BlogPost[];
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="bg-white rounded-2xl p-6 flex font-inter flex-col justify-between group transition-shadow hover:shadow-lg min-h-[240px]">
      <div className="flex justify-end">
        <ArrowUpRight className="w-8 h-8 text-black-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <h3 className="text-black-1 font-medium text-xl leading-tight line-clamp-3">
        {post.title}
      </h3>
    </Link>
  );
}

function CtaCard() {
  return (
    <Link
      href="/blog"
      className="bg-gradient-blue-to-pink-diagonal rounded-2xl p-6 flex flex-col justify-between group transition-shadow hover:shadow-lg min-h-[240px]">
      <div className="flex justify-end">
        <ArrowUpRight className="w-8 h-8 text-black-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <span className="font-unbounded font-bold text-2xl leading-tight">
        Перейти в блог
      </span>
    </Link>
  );
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  const displayPosts = posts.slice(0, 4);
  const firstPost = displayPosts[0];
  const row2Posts = displayPosts.slice(1, 4);

  return (
    <section className="bg-bg py-[120px]">
      <div className="container">
        <div className="flex items-start">
          <h2 className="font-inter font-bold text-[72px] uppercase leading-none mb-10">
            ДИВИТИСЯ
            <br />
            ЩЕ:
          </h2>
          <div>
            {/* Row 1: [empty col 1] | Article Card | CTA Card */}
            <div className="grid grid-cols-3 gap-6">
              <div />

              {firstPost ?
                <ArticleCard post={firstPost} />
              : <div />}

              <CtaCard />
            </div>

            {/* Row 2: Up to 3 article cards */}
            {row2Posts.length > 0 && (
              <div className="grid grid-cols-3 gap-6 mt-6">
                {row2Posts.map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
