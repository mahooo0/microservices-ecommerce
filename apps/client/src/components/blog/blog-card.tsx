import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type BlogPost = {
  id: number;
  slug: string;
  date: string;
  category: string;
  image: string;
  title: string;
  description: string;
};

type Props = {
  post: BlogPost;
};

export default function BlogCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col group bg-white rounded-2xl p-4 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="text-sm text-grey-9 font-medium mb-4 block">{post.date}</span>
        <span
          className={cn(
            "rounded-bl-2xl px-4 py-1 text-sm font-semibold text-white h-10 flex items-center justify-center bg-black-1 absolute top-0 right-0",
          )}>
          {post.category}
        </span>
      </div>

      <div className="rounded-2xl overflow-hidden bg-grey-3 h-[290px] mb-4 w-[95%] mx-auto">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={400}
          className="h-full w-full object-contain transition-transform group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-medium line-clamp-2 mb-3 leading-tight">
        {post.title}
      </h3>

      <p className="text-sm text-grey-9 line-clamp-4 leading-tight">
        {post.description}
      </p>
    </Link>
  );
}
