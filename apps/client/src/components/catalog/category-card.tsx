import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  slug: string;
  image?: string;
  isAllProducts?: boolean;
}

export function CategoryCard({
  name,
  slug,
  image,
  isAllProducts,
}: CategoryCardProps) {
  if (isAllProducts) {
    return (
      <Link
        href="/catalog"
        className='flex items-center justify-center rounded-[20px] p-6 min-h-[456px] bg-gradient-green-to-yellow'
      >
        <span className="font-unbounded font-bold text-[40px] text-center">
          {name}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/catalog/${slug}`}
      className='flex flex-col justify-between rounded-[20px] overflow-hidden min-h-[456px] p-6 transition-shadow hover:shadow-lg bg-gradient-blue-to-pink-diagonal'
    >
      <div className="flex items-center">
        {image && (
          <Image
            src={image}
            alt={name}
            width={140}
            height={135}
            className="object-contain"
          />
        )}
      </div>
      <div className="flex items-center justify-between mt-4 gap-4">
        <span className="font-unbounded font-bold text-[40px]">{name}</span>
        <ArrowUpRight className="size-14 shrink-0" />
      </div>
    </Link>
  );
}
