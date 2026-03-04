import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import Link from "next/link";

const phones = ["📞 +38 (067) 345-67-89", " 📞 +38 (050) 123-45-67"];
const email = "✉️ info@4friends-pet.com.ua";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Tiktok", href: "https://tiktok.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Telegram", href: "https://telegram.org" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function ContactsPage() {
  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Головна", href: "/" },
            { label: "Контакти" },
          ]}
        />

        <h1 className="font-unbounded font-bold text-[72px] uppercase mt-6 mb-10 leading-none">
          КОНТАКТИ
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 leading-none">
          {/* Address */}
          <div>
            <h2 className="font-unbounded font-medium text-2xl uppercase mb-4">
              АДРЕСА
            </h2>
            <p className="text-black-2 text-xl">
              м. Київ, вул. Антоновича, 102
              <br />
              (район Либідська)
            </p>
          </div>

          {/* Working Hours */}
          <div>
            <h2 className="font-unbounded font-medium text-2xl uppercase mb-4">
              РОБОЧИЙ ЧАС
            </h2>
            <div className="text-black-2 space-y-2 text-xl">
              <p>Пн–Пт 09:00–20:00</p>
              <p>Субота 10:00–18:00</p>
              <p>Неділя: вихідний</p>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h2 className="font-unbounded font-medium text-2xl uppercase mb-4">
              КОНТАКТИ
            </h2>
            <div className="space-y-2 text-xl">
              {phones.map((phone) => (
                <Link
                  key={phone}
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-2 text-black-2 transition-opacity hover:opacity-70"
                >
                  {phone}
                </Link>
              ))}
              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-black-2 transition-opacity hover:opacity-70"
              >
                {email}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="font-unbounded font-medium text-2xl uppercase mb-4">
              СОЦ. МЕРЕЖІ
            </h2>
            <div className="space-y-2 text-xl">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-black-2 transition-opacity hover:opacity-70"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full rounded-[20px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.457889683839!2d30.51598!3d50.42114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf07be813517%3A0x6a2e9e3058d5c1c8!2z0LLRg9C7LiDQkNC90YLQvtC90L7QstC40YfQsCwgMTAyLCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1700000000000"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TrendLama store location"
          />
        </div>
      </div>
    </main>
  );
}
