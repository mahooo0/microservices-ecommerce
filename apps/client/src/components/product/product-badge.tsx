import { Star } from "lucide-react";

type Props = {
  badge: string;
};

export default function ProductBadge({ badge }: Props) {
  return (
    <span className="absolute top-0 flex items-center left-0 gap-1 bg-gradient-green-to-yellow text-black-2 text-md uppercase font-semibold px-4 py-[10px] rounded-br-xl">
      <Star className="size-4 fill-black-2" />
      {badge}
    </span>
  );
}
