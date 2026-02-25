"use client";

import { useId } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const STAR_PATH =
  "M150.989 2.395C160.59-2.313 172.173 2.075 176.243 11.964L189.098 43.193C190.947 47.684 194.405 51.324 198.797 53.4L229.329 67.833C238.997 72.403 242.788 84.195 237.594 93.543L221.193 123.064C218.834 127.31 218.145 132.283 219.26 137.01L227.013 169.88C229.467 180.288 222.611 190.604 212.065 192.372L178.758 197.956C173.968 198.759 169.649 201.321 166.649 205.14L145.784 231.695C139.177 240.103 126.838 241.176 118.879 234.032L93.748 211.473C90.133 208.229 85.438 206.45 80.581 206.485L46.81 206.729C36.116 206.806 27.585 197.827 28.208 187.151L30.177 153.437C30.46 148.588 28.922 143.808 25.867 140.033L4.621 113.782C-2.107 105.469-.407 93.2 8.329 87.031L35.914 67.55C39.882 64.748 42.661 60.566 43.708 55.824L50.985 22.846C53.289 12.403 63.941 6.083 74.211 9.066L106.641 18.487C111.306 19.842 116.308 19.407 120.669 17.268L150.989 2.395Z";

const VARIANTS = {
  blue: {
    fill: [
      { offset: "0%", color: "#89BEFF", opacity: 0.2 },
      { offset: "100%", color: "#89BEFF", opacity: 0.6 },
    ],
    stroke: [
      { offset: "0%", color: "#89BEFF" },
      { offset: "100%", color: "#FFFFFF" },
    ],
    defaultTextColor: "text-white",
  },
  purple: {
    fill: [
      { offset: "0%", color: "#BED0F5", opacity: 1 },
      { offset: "100%", color: "#FBE1EC", opacity: 1 },
    ],
    stroke: [
      { offset: "0%", color: "#BED0F5" },
      { offset: "100%", color: "#FACDD4" },
    ],
    defaultTextColor: "text-black-1",
  },
} as const;

interface StarButtonProps {
  href: string;
  text: string;
  variant?: "blue" | "purple";
  textColor?: string;
  size?: number;
  className?: string;
}

function StarSvg({
  fillId,
  strokeId,
  variant,
}: {
  fillId: string;
  strokeId: string;
  variant: "blue" | "purple";
}) {
  const v = VARIANTS[variant];
  return (
    <svg
      viewBox="0 0 241 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id={fillId} x1="0" y1="0" x2="241" y2="240" gradientUnits="userSpaceOnUse">
          {v.fill.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} stopOpacity={s.opacity} />
          ))}
        </linearGradient>
        <linearGradient id={strokeId} x1="0" y1="0" x2="241" y2="240" gradientUnits="userSpaceOnUse">
          {v.stroke.map((s) => (
            <stop key={s.offset} offset={s.offset} stopColor={s.color} />
          ))}
        </linearGradient>
      </defs>
      <path d={STAR_PATH} fill={`url(#${fillId})`} stroke={`url(#${strokeId})`} strokeWidth="2" />
    </svg>
  );
}

export default function StarButton({
  href,
  text,
  variant = "blue",
  textColor,
  size = 240,
  className,
}: StarButtonProps) {
  const id = useId();
  const shadowFillId = `${id}-shadow-fill`;
  const shadowStrokeId = `${id}-shadow-stroke`;
  const mainFillId = `${id}-main-fill`;
  const mainStrokeId = `${id}-main-stroke`;

  return (
    <Link
      href={href}
      className={cn("relative inline-block rotate-[20deg] cursor-pointer", className)}
      style={{ width: size, height: size }}
    >
      {/* Shadow — rotates, offset bottom-right */}
      <div
        className="absolute inset-0 translate-x-[6%] translate-y-[6%] animate-spin-slow"
        style={{ filter: "blur(15px)", opacity: 0.7 }}
      >
        <StarSvg fillId={shadowFillId} strokeId={shadowStrokeId} variant={variant} />
      </div>
      {/* Base — rotates */}
      <div className="absolute inset-0 animate-spin-slow">
        <StarSvg fillId={mainFillId} strokeId={mainStrokeId} variant={variant} />
      </div>
      {/* Text — static */}
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center font-unbounded text-center text-xl font-medium uppercase leading-tight",
          textColor ?? VARIANTS[variant].defaultTextColor,
        )}
      >
        {text}
      </span>
    </Link>
  );
}
