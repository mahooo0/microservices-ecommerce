"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { catalogCategories, subcategoriesMap } from "@/app/catalog/mock-data";

export default function CatalogDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!panelRef.current) {
        setIsOpen(false);
        return;
      }
      const tl = gsap.timeline({
        onComplete: () => setIsOpen(false),
      });
      tl.to(panelRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
      });
    }, 100);
  }, []);

  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    gsap.set(panelRef.current, { opacity: 0, y: -10 });

    const tl = gsap.timeline();
    tl.to(panelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: "power2.out",
    });

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <li
      className="relative"
      onMouseEnter={open}
      onMouseLeave={close}
    >
      <Link
        href="/catalog"
        className="hover:underline hover:text-black-1/80 transition-all">
        Каталог
      </Link>
      {/* invisible bridge: extends li hover zone down to reach the dropdown panel */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-[200px] h-[60px]" />
      )}

      {isOpen && (
        <div
          className="fixed left-0 right-0 top-[88px] z-20"
          onMouseEnter={open}
          onMouseLeave={close}
        >
          {/* invisible bridge to keep hover across the 24px gap */}
          <div className="h-6" />
          <div ref={panelRef} className="container">
            <div className="rounded-[20px] bg-white p-6 pb-[104px] shadow-xl grid grid-cols-8 gap-4">
              {catalogCategories.map((category) => {
                const subcategories = subcategoriesMap[category.slug] || [];
                return (
                  <div key={category.slug} className="flex flex-col gap-3">
                    <Link
                      href={`/catalog/${category.slug}`}
                      className="rounded-[12px] bg-gradient-blue-to-pink-diagonal h-[231px] px-4 pt-6 pb-4 flex justify-between transition-shadow hover:shadow-md flex-col">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={55}
                        height={55}
                        className="object-contain w-full h-auto max-w-[55px]"
                      />
                      <div className="flex items-center justify-between gap-1 group">
                        <span className="font-unbounded font-semibold text-xl">
                          {category.name}
                        </span>
                        <ArrowUpRight className="size-6 shrink-0" />
                      </div>
                    </Link>
                    <ul className="flex flex-col gap-6 font-inter font-medium">
                      {subcategories.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/catalog/${category.slug}/${sub.slug}`}
                            className="text-black-2 hover:underline transition-all">
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

              {/* "Всі товари" card */}
              <Link
                href="/catalog"
                className="flex items-center justify-center rounded-[12px] h-[231px] bg-gradient-green-to-yellow p-4 transition-shadow hover:shadow-md">
                <span className="font-unbounded font-bold text-lg text-center">
                  Всі товари
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
