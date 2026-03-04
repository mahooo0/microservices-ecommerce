"use client";

import { useQueryStates, parseAsString, parseAsInteger } from "nuqs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const sortOptions = [
  { value: "default", label: "Сортувати за замовчуванням" },
  { value: "price-asc", label: "Спочатку дешевше" },
  { value: "price-desc", label: "Спочатку дорожче" },
  { value: "name-asc", label: "За назвою (А-Я)" },
  { value: "name-desc", label: "За назвою (Я-А)" },
];

const parsers = {
  sort: parseAsString.withDefault("default"),
  page: parseAsInteger.withDefault(1),
};

export default function SortDropdown() {
  const [urlState, setUrlState] = useQueryStates(parsers, { shallow: false });

  function handleSortChange(value: string) {
    setUrlState({ sort: value === "default" ? null : value, page: 1 });
  }

  return (
    <div className="shrink-0 p-4 bg-white rounded-2xl font-inter font-medium h-[52px]">
      <Select value={urlState.sort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
