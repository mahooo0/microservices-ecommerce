"use client";

import ActiveFilterPills from "./active-filter-pills";

interface SortingBarProps {
  shownCount: number;
  totalCount: number;
}

export default function SortingBar({
  shownCount,
  totalCount,
}: SortingBarProps) {
  return (
    <div className="flex items-center rounded-2xl gap-6 min-h-[52px]">
      <div className="flex items-center w-full justify-between gap-6">
        <ActiveFilterPills />
        <span className="ml-auto font-inter font-medium text-grey-9 shrink-0">
          Показано {shownCount} товарів з {totalCount}
        </span>
      </div>
    </div>
  );
}
