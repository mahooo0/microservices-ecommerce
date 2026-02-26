"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function HeaderSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Фокус на инпут при открытии
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Закрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSearch = () => {
    if (!value.trim()) return;
    const params = new URLSearchParams(searchParams);
    params.set("search", value);
    router.push(`/products?${params.toString()}`, { scroll: false });
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative flex items-center">
      <button onClick={() => setIsOpen(!isOpen)} aria-label="Пошук">
        <Search className="size-8 cursor-pointer" />
      </button>
      <div className={`
        absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2
        bg-white rounded-md ring-1 ring-gray-200 shadow-md px-3 py-2
        transition-all duration-200 origin-right
        ${isOpen ? "w-64 opacity-100 scale-x-100" : "w-0 opacity-0 scale-x-0 pointer-events-none"}
      `}>
        <input
          ref={inputRef}
          placeholder="Пошук..."
          className="w-full text-sm outline-0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
            if (e.key === "Escape") setIsOpen(false);
          }}
        />
        <button onClick={() => setIsOpen(false)} aria-label="Закрити пошук" className="cursor-pointer">
          <X className="size-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
