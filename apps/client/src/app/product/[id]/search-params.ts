import { parseAsString, createSearchParamsCache } from "nuqs/server";

export const productDetailParsers = {
  weight: parseAsString.withDefault(""),
  color: parseAsString.withDefault(""),
};

export const searchParamsCache = createSearchParamsCache(productDetailParsers);
