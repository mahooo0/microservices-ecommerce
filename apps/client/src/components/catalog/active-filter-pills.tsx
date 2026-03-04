"use client";

import {
  useQueryStates,
  parseAsArrayOf,
  parseAsString,
  parseAsInteger,
  parseAsBoolean,
} from "nuqs";
import { X } from "lucide-react";

const filterLabels: Record<string, string> = {
  brands: "Бренд",
  classes: "Клас",
  ages: "Вік",
  sizes: "Розмір",
  weights: "Вага",
  foodTypes: "Тип корму",
  countries: "Країна",
};

const parsers = {
  page: parseAsInteger.withDefault(1),
  priceMin: parseAsInteger.withDefault(1),
  priceMax: parseAsInteger.withDefault(10000),
  sale: parseAsBoolean.withDefault(false),
  brands: parseAsArrayOf(parseAsString).withDefault([]),
  classes: parseAsArrayOf(parseAsString).withDefault([]),
  ages: parseAsArrayOf(parseAsString).withDefault([]),
  sizes: parseAsArrayOf(parseAsString).withDefault([]),
  weights: parseAsArrayOf(parseAsString).withDefault([]),
  foodTypes: parseAsArrayOf(parseAsString).withDefault([]),
  countries: parseAsArrayOf(parseAsString).withDefault([]),
};

const arrayKeys = [
  "brands",
  "classes",
  "ages",
  "sizes",
  "weights",
  "foodTypes",
  "countries",
] as const;

type FilterPill = { key: string; label: string; values: string[] };

export default function ActiveFilterPills() {
  const [urlState, setUrlState] = useQueryStates(parsers, { shallow: false });

  const activePills: FilterPill[] = [];
  for (const key of arrayKeys) {
    const values = urlState[key];
    if (values.length > 0) {
      activePills.push({ key, label: filterLabels[key] ?? key, values });
    }
  }

  const hasActiveFilters =
    activePills.length > 0 ||
    urlState.sale ||
    urlState.priceMin > 1 ||
    urlState.priceMax < 10000;

  if (!hasActiveFilters) return null;

  function removeFilterGroup(key: string) {
    setUrlState({ [key]: null, page: 1 });
  }

  function clearAllFilters() {
    setUrlState({
      priceMin: null,
      priceMax: null,
      sale: null,
      brands: null,
      classes: null,
      ages: null,
      sizes: null,
      weights: null,
      foodTypes: null,
      countries: null,
      page: 1,
    });
  }

  return (
    <div className="flex items-center gap-[11px] flex-wrap flex-1">
      {urlState.sale && (
        <span className="flex items-center gap-1.5 rounded-full bg-blue-2 py-1 h-10 font-inter font-medium px-5 border border-grey-9">
          Акції
          <button
            type="button"
            onClick={() => setUrlState({ sale: null, page: 1 })}
            className="cursor-pointer hover:text-black-1 text-black-1"
          >
            <X className="size-5" />
          </button>
        </span>
      )}
      {(urlState.priceMin > 1 || urlState.priceMax < 10000) && (
        <span className="flex items-center gap-1.5 rounded-full bg-blue-2 py-1 h-10 font-inter font-medium px-5 border border-grey-9">
          Ціна: {urlState.priceMin}–{urlState.priceMax} ₴
          <button
            type="button"
            onClick={() =>
              setUrlState({ priceMin: null, priceMax: null, page: 1 })
            }
            className="cursor-pointertext-black-1"
          >
            <X className="size-5" />
          </button>
        </span>
      )}
      {activePills.map((pill) => (
        <span
          key={pill.key}
          className="flex items-center gap-1.5 rounded-full bg-blue-2 py-1 h-10 font-inter font-medium px-5 border border-grey-9"
        >
          {pill.label}: {pill.values[0]}
          {pill.values.length > 1 && ` +${pill.values.length - 1}`}
          <button
            type="button"
            onClick={() => removeFilterGroup(pill.key)}
            className="cursor-pointer text-black-1"
          >
            <X className="size-5" />
          </button>
        </span>
      ))}
      <button
        type="button"
        onClick={clearAllFilters}
        className="flex items-center gap-1 font-inter font-medium px-5 bg-white border h-10 rounded-full border-grey-9 text-grey-9 hover:text-black-1 transition-colors cursor-pointer"
      >
        Очистити все <X className="size-5" />
      </button>
    </div>
  );
}
