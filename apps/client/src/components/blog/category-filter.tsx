"use client";

import { useQueryState, parseAsArrayOf, parseAsString } from "nuqs";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Годування", "Виховання", "Імунітет", "Вакцинації"];

interface CategoryFilterProps {
  totalArticles: number;
  shownArticles: number;
}

export default function CategoryFilter({
  totalArticles,
  shownArticles,
}: CategoryFilterProps) {
  const [selected, setSelected] = useQueryState(
    "categories",
    parseAsArrayOf(parseAsString).withDefault([]).withOptions({ shallow: false })
  );

  const isAllSelected = selected.length === 0;

  function toggleCategory(category: string) {
    if (selected.includes(category)) {
      const next = selected.filter((c) => c !== category);
      setSelected(next.length === 0 ? null : next);
    } else {
      setSelected([...selected, category]);
    }
  }

  function clearAll() {
    setSelected(null);
  }

  return (
    <div className="flex items-center gap-6 flex-wrap mb-10">
      <span className="font-medium shrink-0">Категорії:</span>

      <div className="flex items-center gap-3 flex-wrap">
        <button
          type="button"
          onClick={clearAll}
          className={cn(
            "flex items-center gap-1 rounded-full border px-5 py-1 font-medium transition-colors cursor-pointer",
            isAllSelected
              ? "bg-gradient-green-to-yellow text-black-1 border-grey-9"
              : "bg-white text-grey-9 border-transparent hover:bg-grey-8/30"
          )}
        >
          Всі категорії
        </button>

        {categories.map((category) => {
          const isActive = selected.includes(category);

          return (
            <button
              key={category}
              type="button"
              onClick={() => toggleCategory(category)}
              className={cn(
                "flex items-center gap-[10px] rounded-full border px-5 py-1 font-medium transition-colors cursor-pointer",
                isActive
                  ? "bg-gradient-green-to-yellow text-black-1 border-transparent"
                  : "bg-white text-grey-9 border-transparent hover:bg-grey-8/30"
              )}
            >
              {category}
              {isActive && <X className="size-5" />}
            </button>
          );
        })}
      </div>

      {selected.length > 1 && (
        <button
          type="button"
          onClick={clearAll}
          className="flex items-center gap-[10px] text-grey-9 hover:text-black-1 bg-white rounded-full px-5 py-1 transition-colors cursor-pointer"
        >
          Очистити все <X className="size-5" />
        </button>
      )}

      <span className="ml-auto text-sm text-grey-9">
        Показано {shownArticles} статей з {totalArticles}
      </span>
    </div>
  );
}
