'use client';

import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function AddToFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Button
      onClick={toggleFavorite}
      variant="ghost"
      className="absolute top-4 right-4 rounded-[12px] cursor-pointer size-10 flex items-center justify-center border-black-6 shadow-[0_3px_9px_0_rgba(0,0,0,0.09)]">
      <Heart className="size-4 text-grey-9" fill={isFavorite ? "#A5A5BA" : "none"} />
    </Button>
  );
}
