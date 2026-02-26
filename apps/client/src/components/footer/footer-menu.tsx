import Link from "next/link";

const menuItems = [
  { label: "Каталог", href: "/catalog" },
  { label: "Про нас", href: "/about" },
  { label: "Контакти", href: "/contacts" },
  { label: "Блог", href: "/blog" },
  { label: "Програма лояльності", href: "/loyalty" },
  { label: "Акції", href: "/sales" },
  { label: "Кошик", href: "/cart" },
  { label: "Особистий кабінет", href: "/account" },
];

export default function FooterMenu() {
  return (
    <nav>
      <ul className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-unbounded font-semibold text-xl hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
