import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 pt-4 z-20 w-full">
      <div className="container">
        <nav className="w-full flex bg-white rounded-[20px] shadow-[0_4px_38px_0_rgba(0,0,0,0.05)] items-center justify-between border-b border-gray-200 px-10 py-6">
          {/* LEFT */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="TrendLama"
              width={36}
              height={36}
              className="w-6 h-6 md:w-9 md:h-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider">
              TRENDLAMA.
            </p>
          </Link>
          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <SearchBar />
            <Link href="/">
              <Home className="w-4 h-4 text-gray-600" />
            </Link>
            <Bell className="w-4 h-4 text-gray-600" />
            <ShoppingCartIcon />
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <ProfileButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
