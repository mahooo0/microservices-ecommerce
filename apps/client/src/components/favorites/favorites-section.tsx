"use client";

import { useState } from "react";
import { Heart, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import useFavoritesStore from "@/stores/favoritesStore";
import { mockProducts } from "@/app/catalog/mock-data";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 12;

export function FavoritesSection() {
  const favorites = useFavoritesStore((s) => s.favorites);
  const clearFavorites = useFavoritesStore((s) => s.clearFavorites);
  const [currentPage, setCurrentPage] = useState(1);

  const favoriteProducts = mockProducts.filter((p) =>
    favorites.includes(p.id)
  );

  const totalPages = Math.ceil(favoriteProducts.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = favoriteProducts.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  if (favoriteProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <Heart className="size-16 text-grey-9" />
        <p className="text-grey-9 text-lg">Список обраного порожній</p>
        <Link
          href="/catalog"
          className="text-black-1 underline hover:opacity-70 transition-opacity"
        >
          Перейти до каталогу
        </Link>
      </div>
    );
  }

  return (
    <div className="py-6 mb-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-black-1">Обране</h2>
        <Button
          variant="ghost"
          onClick={clearFavorites}
          className="text-grey-9 cursor-pointer flex items-center gap-2 hover:text-black-1"
        >
          <Trash2 className="size-4" />
          Видалити все
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="rounded-xl cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <Button
                key={pageNum}
                variant={pageNum === currentPage ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(pageNum)}
                className={`rounded-xl cursor-pointer ${pageNum === currentPage ? "bg-black-1 text-white" : ""}`}
              >
                {pageNum}
              </Button>
            )
          )}

          <Button
            variant="outline"
            size="icon"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="rounded-xl cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
