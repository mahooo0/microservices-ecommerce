import Link from "next/link";

const phones = [
  "(067) 100-17-45",
  "(095) 100-17-45",
  "(073) 100-17-45",
];

export default function FooterAddress() {
  return (
    <div className="flex flex-col gap-6 font-unbounded">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold uppercase">Адреса:</h3>
        <p className="text-base">Київ, вул. Олени Пчілки 24</p>
        <div className="flex flex-col">
          {phones.map((phone) => (
            <Link key={phone} href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="text-base hover:opacity-70 transition-opacity">
              {phone}
            </Link>
          ))}
        </div>
        <Link href="mailto:email@gmail.com" className="text-base hover:opacity-70 transition-opacity">
          email@gmail.com
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-semibold">Графік роботи:</h3>
        <div className="flex flex-col text-base">
          <span>ПН-Пт: 09:00-18:00</span>
          <span>Сб: 09:00-15:00</span>
          <span>Нд: Зачинено</span>
        </div>
      </div>
    </div>
  );
}
