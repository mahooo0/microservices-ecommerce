import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Каталог — 4Friends Pet Store",
  description:
    "Каталог товарів для домашніх тварин: собаки, коти, гризуни, риби, птахи, рептилії та тхори.",
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-[120px]">
      <div className="container">{children}</div>
    </main>
  );
}
