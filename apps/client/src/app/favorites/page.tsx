import { FavoritesSection } from "@/components/favorites/favorites-section";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const breadcrumbItems = [
  { label: "Головна", href: "/" },
  { label: "Обране" },
];

export default function FavoritesPage() {

  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        <FavoritesSection />
      </div>
    </main>
  );
}
