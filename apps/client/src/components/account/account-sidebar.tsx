"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ShoppingBag, Heart } from "lucide-react";

const navItems = [
  { label: "Профіль", href: "/account", icon: User },
  { label: "Мої замовлення", href: "/account/orders", icon: ShoppingBag },
  { label: "Обране", href: "/favorites", icon: Heart },
];

export function AccountSidebar() {
  const pathname = usePathname();

  return (
    <nav className="rounded-2xl bg-white p-5">
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/account"
              ? pathname === "/account"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors ${
                  isActive
                    ? "bg-black text-white"
                    : "text-grey-9 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
