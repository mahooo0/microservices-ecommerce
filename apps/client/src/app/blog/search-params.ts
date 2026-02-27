import {
  parseAsArrayOf,
  parseAsString,
  createSearchParamsCache,
} from "nuqs/server";

export const categoriesParsers = {
  categories: parseAsArrayOf(parseAsString).withDefault([]),
};

export const searchParamsCache = createSearchParamsCache(categoriesParsers);
