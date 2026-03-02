"use client";

import { useQueryState, parseAsInteger } from "nuqs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/app/catalog/mock-data";

interface ProductGridProps {
  products: Product[];
  totalPages: number;
  currentPage: number;
}

export default function ProductGrid({ products, totalPages, currentPage }: ProductGridProps) {
  const [, setPage] = useQueryState(
    "page",
    parseAsInteger.withDefault(1).withOptions({ shallow: false })
  );

  if (products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[400px]">
        <p className="text-grey-9 text-lg">Товарів не знайдено</p>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage <= 1}
            onClick={() => setPage(currentPage - 1)}
            className="rounded-xl cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Button
              key={pageNum}
              variant={pageNum === currentPage ? "default" : "outline"}
              size="icon"
              onClick={() => setPage(pageNum)}
              className={`rounded-xl cursor-pointer ${pageNum === currentPage ? "bg-black-1 text-white" : ""}`}
            >
              {pageNum}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            disabled={currentPage >= totalPages}
            onClick={() => setPage(currentPage + 1)}
            className="rounded-xl cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
