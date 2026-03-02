"use client";

import { useState, useCallback } from "react";
import {
  useQueryStates,
  parseAsArrayOf,
  parseAsString,
  parseAsInteger,
  parseAsBoolean,
} from "nuqs";
import { X, ShoppingCart, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FilterOptions = {
  brands: string[];
  classes: string[];
  ages: string[];
  sizes: string[];
  weights: string[];
  foodTypes: string[];
  countries: string[];
};

interface ProductFiltersProps {
  filterOptions: FilterOptions;
}

const PRICE_MIN = 1;
const PRICE_MAX = 10000;

const parsers = {
  sort: parseAsString.withDefault("default"),
  page: parseAsInteger.withDefault(1),
  priceMin: parseAsInteger.withDefault(PRICE_MIN),
  priceMax: parseAsInteger.withDefault(PRICE_MAX),
  sale: parseAsBoolean.withDefault(false),
  brands: parseAsArrayOf(parseAsString).withDefault([]),
  classes: parseAsArrayOf(parseAsString).withDefault([]),
  ages: parseAsArrayOf(parseAsString).withDefault([]),
  sizes: parseAsArrayOf(parseAsString).withDefault([]),
  weights: parseAsArrayOf(parseAsString).withDefault([]),
  foodTypes: parseAsArrayOf(parseAsString).withDefault([]),
  countries: parseAsArrayOf(parseAsString).withDefault([]),
};

function CheckboxFilterSection({
  items,
  selected,
  onToggle,
  defaultVisibleCount = 5,
}: {
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
  defaultVisibleCount?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, defaultVisibleCount);
  const hasMore = items.length > defaultVisibleCount;

  return (
    <div className="flex flex-col gap-3">
      {visibleItems.map((item) => (
        <label key={item} className="flex items-center gap-3 cursor-pointer">
          <Checkbox
            checked={selected.includes(item)}
            onCheckedChange={() => onToggle(item)}
            className="size-6 rounded-[2px] data-[state=checked]:bg-transparent data-[state=checked]:border-black-1 data-[state=checked]:text-black-1"
          />
          <span
            className={
              selected.includes(item) ?
                "text-black-1 text-base"
              : "text-black-3 text-base"
            }>
            {item}
          </span>
        </label>
      ))}
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm text-grey-9 hover:text-black-1 transition-colors cursor-pointer">
          {expanded ? "Сховати" : "Показати ще"}
          <ChevronDown
            className={cn(
              "size-4 transition-transform",
              expanded && "rotate-180",
            )}
          />
        </button>
      )}
    </div>
  );
}

export default function ProductFilters({ filterOptions }: ProductFiltersProps) {
  const [urlState, setUrlState] = useQueryStates(parsers, { shallow: false });

  // Local state for batch updates
  const [localPriceMin, setLocalPriceMin] = useState(urlState.priceMin);
  const [localPriceMax, setLocalPriceMax] = useState(urlState.priceMax);
  const [localSale, setLocalSale] = useState(urlState.sale);
  const [localBrands, setLocalBrands] = useState<string[]>(urlState.brands);
  const [localClasses, setLocalClasses] = useState<string[]>(urlState.classes);
  const [localAges, setLocalAges] = useState<string[]>(urlState.ages);
  const [localSizes, setLocalSizes] = useState<string[]>(urlState.sizes);
  const [localWeights, setLocalWeights] = useState<string[]>(urlState.weights);
  const [localFoodTypes, setLocalFoodTypes] = useState<string[]>(
    urlState.foodTypes,
  );
  const [localCountries, setLocalCountries] = useState<string[]>(
    urlState.countries,
  );

  const toggleItem = useCallback(
    (list: string[], setList: (val: string[]) => void, item: string) => {
      setList(
        list.includes(item) ? list.filter((i) => i !== item) : [...list, item],
      );
    },
    [],
  );

  function handleApply() {
    setUrlState({
      priceMin: localPriceMin === PRICE_MIN ? null : localPriceMin,
      priceMax: localPriceMax === PRICE_MAX ? null : localPriceMax,
      sale: localSale || null,
      brands: localBrands.length > 0 ? localBrands : null,
      classes: localClasses.length > 0 ? localClasses : null,
      ages: localAges.length > 0 ? localAges : null,
      sizes: localSizes.length > 0 ? localSizes : null,
      weights: localWeights.length > 0 ? localWeights : null,
      foodTypes: localFoodTypes.length > 0 ? localFoodTypes : null,
      countries: localCountries.length > 0 ? localCountries : null,
      page: 1,
    });
  }

  function handleClear() {
    setLocalPriceMin(PRICE_MIN);
    setLocalPriceMax(PRICE_MAX);
    setLocalSale(false);
    setLocalBrands([]);
    setLocalClasses([]);
    setLocalAges([]);
    setLocalSizes([]);
    setLocalWeights([]);
    setLocalFoodTypes([]);
    setLocalCountries([]);
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

  function handleSliderChange(values: number[]) {
    setLocalPriceMin(values[0] ?? PRICE_MIN);
    setLocalPriceMax(values[1] ?? PRICE_MAX);
  }

  const hasActiveLocalFilters =
    localPriceMin > PRICE_MIN ||
    localPriceMax < PRICE_MAX ||
    localSale ||
    localBrands.length > 0 ||
    localClasses.length > 0 ||
    localAges.length > 0 ||
    localSizes.length > 0 ||
    localWeights.length > 0 ||
    localFoodTypes.length > 0 ||
    localCountries.length > 0;

  return (
    <aside className="w-full shrink-0 font-inter">
      <div>
        <div className="rounded-2xl bg-white py-6 px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-unbounded text-xl uppercase">Фільтр:</span>
            {hasActiveLocalFilters && <button
              type="button"
              onClick={handleClear}
              className="flex items-center gap-1 text-sm text-grey-9 hover:text-black-1 transition-colors cursor-pointer">
              Очистити все <X className="size-4" />
            </button>}
          </div>

          <Accordion
            type="multiple"
            defaultValue={["price", "brand", "class", "weight"]}>
            {/* Price */}
            <AccordionItem value="price">
              <AccordionTrigger className="text-xl font-medium">
                Ціна
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative flex-1">
                    <input
                      type="number"
                      value={localPriceMin}
                      onChange={(e) =>
                        setLocalPriceMin(Number(e.target.value) || PRICE_MIN)
                      }
                      className="w-full rounded-md h-[50px] bg-black-6 px-4 py-2 pr-10 text-base outline-none"
                      placeholder="Від"
                      min={PRICE_MIN}
                      max={localPriceMax}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base text-grey-9">
                      ₴
                    </span>
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="number"
                      value={localPriceMax}
                      onChange={(e) =>
                        setLocalPriceMax(Number(e.target.value) || PRICE_MAX)
                      }
                      className="w-full rounded-md h-[50px] bg-black-6 px-4 py-2 pr-10 text-base outline-none"
                      placeholder="До"
                      min={localPriceMin}
                      max={PRICE_MAX}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-base text-grey-9">
                      ₴
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm text-black-1">
                  <span>{localPriceMin}₴</span>
                  <span>{localPriceMax}₴</span>
                </div>
                <Slider
                  min={PRICE_MIN}
                  max={PRICE_MAX}
                  step={10}
                  value={[localPriceMin, localPriceMax]}
                  onValueChange={handleSliderChange}
                />
              </AccordionContent>
            </AccordionItem>

            {/* Sale toggle — outside accordion */}
            <div className="flex items-center justify-between py-4 border-b">
              <span className="text-xl font-medium">Акції</span>
              <Switch checked={localSale} onCheckedChange={setLocalSale} />
            </div>

            {/* Brand */}
            <AccordionItem value="brand">
              <AccordionTrigger className="text-xl font-medium">
                Бренд
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxFilterSection
                  items={filterOptions.brands}
                  selected={localBrands}
                  onToggle={(item) =>
                    toggleItem(localBrands, setLocalBrands, item)
                  }
                />
              </AccordionContent>
            </AccordionItem>

            {/* Class */}
            <AccordionItem value="class">
              <AccordionTrigger className="text-xl font-medium">
                Клас
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxFilterSection
                  items={filterOptions.classes}
                  selected={localClasses}
                  onToggle={(item) =>
                    toggleItem(localClasses, setLocalClasses, item)
                  }
                />
              </AccordionContent>
            </AccordionItem>

            {/* Age */}
            <AccordionItem value="age">
              <AccordionTrigger className="text-xl font-medium">
                Вік
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxFilterSection
                  items={filterOptions.ages}
                  selected={localAges}
                  onToggle={(item) => toggleItem(localAges, setLocalAges, item)}
                />
              </AccordionContent>
            </AccordionItem>

            {/* Pet Size */}
            <AccordionItem value="size">
              <AccordionTrigger className="text-xl font-medium">
                Розмір тварини
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxFilterSection
                  items={filterOptions.sizes}
                  selected={localSizes}
                  onToggle={(item) =>
                    toggleItem(localSizes, setLocalSizes, item)
                  }
                />
              </AccordionContent>
            </AccordionItem>

            {/* Weight */}
            <AccordionItem value="weight">
              <AccordionTrigger className="text-xl font-medium">
                Вага
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxFilterSection
                  items={filterOptions.weights}
                  selected={localWeights}
                  onToggle={(item) =>
                    toggleItem(localWeights, setLocalWeights, item)
                  }
                />
              </AccordionContent>
            </AccordionItem>

            {/* Food Type */}
            <AccordionItem value="foodType">
              <AccordionTrigger className="text-xl font-medium">
                Тип корму
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxFilterSection
                  items={filterOptions.foodTypes}
                  selected={localFoodTypes}
                  onToggle={(item) =>
                    toggleItem(localFoodTypes, setLocalFoodTypes, item)
                  }
                />
              </AccordionContent>
            </AccordionItem>

            {/* Country */}
            <AccordionItem value="country">
              <AccordionTrigger className="text-xl font-medium">
                Країна виробник
              </AccordionTrigger>
              <AccordionContent>
                <CheckboxFilterSection
                  items={filterOptions.countries}
                  selected={localCountries}
                  onToggle={(item) =>
                    toggleItem(localCountries, setLocalCountries, item)
                  }
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* Action buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <Button
            onClick={handleApply}
            className="w-full bg-black-1 text-white font-unbounded hover:bg-black-1/90 rounded-full h-12 text-base font-medium">
            <ShoppingCart className="size-5" />
            Застосувати
            <ShoppingCart className="size-5" />
          </Button>
          <Button
            variant="outline"
            onClick={handleClear}
            className="w-full rounded-full font-unbounded h-12 text-base font-medium">
            Очистити
          </Button>
        </div>
      </div>
    </aside>
  );
}
