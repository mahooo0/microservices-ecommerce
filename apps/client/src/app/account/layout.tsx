import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { AccountSidebar } from "@/components/account/account-sidebar";

const breadcrumbItems = [
  { label: "Головна", href: "/" },
  { label: "Особистий кабінет" },
];

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="mt-5 grid grid-cols-[280px_1fr] gap-5">
          <AccountSidebar />
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
}
