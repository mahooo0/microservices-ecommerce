import {
  parseAsArrayOf,
  parseAsString,
  parseAsInteger,
  parseAsBoolean,
  createSearchParamsCache,
} from "nuqs/server";

export const catalogFilterParsers = {
  sort: parseAsString.withDefault("default"),
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

export const searchParamsCache = createSearchParamsCache(catalogFilterParsers);
