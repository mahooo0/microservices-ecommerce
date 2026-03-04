"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  images: string[];
  name: string;
};

export default function ProductImageCarousel({ images, name }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = images[currentIndex];

  if (!currentImage) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="relative rounded-2xl bg-black-7 flex items-center justify-center min-h-[500px] max-h-[826px] overflow-hidden">
      <Image
        src={currentImage}
        alt={`${name} — зображення ${currentIndex + 1}`}
        width={500}
        height={500}
        className="object-contain max-h-[500px] w-auto"
      />
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </Button>
        </>
      )}
    </div>
  );
}
