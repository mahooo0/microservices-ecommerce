import Image from "next/image";
import Link from "next/link";

interface SubcategoryCardProps {
  name: string;
  slug: string;
  categorySlug: string;
  icon?: string;
  isAllProducts?: boolean;
}

export function SubcategoryCard({
  name,
  slug,
  categorySlug,
  icon,
  isAllProducts,
}: SubcategoryCardProps) {
  if (isAllProducts) {
    return (
      <Link
        href={`/catalog/${categorySlug}`}
        className='flex items-center justify-center rounded-[12px] p-[10px] min-h-[260px] bg-gradient-green-to-yellow transition-shadow hover:shadow-lg'
      >
        <span className="font-unbounded font-bold text-xl text-center">
          {name}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/catalog/${categorySlug}/${slug}`}
      className='flex flex-col justify-between rounded-[12px] overflow-hidden min-h-[260px] p-[9px] transition-shadow hover:shadow-lg bg-gradient-blue-to-pink-diagonal'
    >
      <div className="flex items-center">
        {icon && (
          <Image
            src={icon}
            alt={name}
            width={80}
            height={80}
            className="object-contain"
          />
        )}
      </div>
      <span className="font-unbounded font-bold text-xl mt-3">{name}</span>
    </Link>
  );
}
