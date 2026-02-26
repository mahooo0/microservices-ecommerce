import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ChartColumnIncreasing, Heart, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProfileButton from "../ProfileButton";
import ShoppingCartIcon from "../ShoppingCartIcon";
import HeaderSearch from "./header-search";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 pt-4 z-20 w-full">
      <div className="container">
        <div className="flex justify-between items-center gap-6 rounded-[20px] bg-white px-10 py-6">
          <Link href="/" className="shrink-0 w-full max-w-[132px]">
            <Image
              src="/images/home/Logo.svg"
              alt="TrendLama"
              width={132}
              height={30}
              className="w-full h-auto"
            />
          </Link>
          <nav>
            <ul className="flex items-center gap-10">
              <li>
                <Link
                  href="/catalog"
                  className="hover:underline hover:text-black-1/80 transition-all">
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline hover:text-black-1/80 transition-all">
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className="hover:underline hover:text-black-1/80 transition-all">
                  Доставка і оплата
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:underline hover:text-black-1/80 transition-all">
                  Контакти
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:underline hover:text-black-1/80 transition-all">
                  Блог
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-6 items-center">
            <HeaderSearch />
            <Link href="/compare">
              <ChartColumnIncreasing className="size-8" />
            </Link>
            <Link href="/favorites">
              <Heart className="size-8" />
            </Link>
            <ShoppingCartIcon />
            <SignedOut>
              <SignInButton>
                <UserRound className="size-8 cursor-pointer" />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <ProfileButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
