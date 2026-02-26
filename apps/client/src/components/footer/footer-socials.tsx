import Link from "next/link";
import { FaFacebookF, FaInstagram, FaViber } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";

const socials = [
  { name: "TELEGRAM", href: "#", icon: <RiTelegram2Fill className="size-6" /> },
  { name: "INSTAGRAM", href: "#", icon: <FaInstagram className="size-6" /> },
  { name: "VIBER", href: "#", icon: <FaViber className="size-6" /> },
  { name: "FACEBOOK", href: "#", icon: <FaFacebookF className="size-6" /> },
];

export default function FooterSocials() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-[repeat(2,minmax(260px,1fr))] gap-3">
        {socials.map((social) => (
          <Link
            key={social.name}
            href={social.href}
            className="rounded-2xl bg-white w-full max-w-[260px] p-6 flex flex-col justify-between hover:bg-grey-3 transition-all min-h-[188px]">
            <div className="size-12 rounded-full border border-black-1 flex items-center justify-center">
              {social.icon}
            </div>
            <span className="font-unbounded font-semibold text-xl uppercase">
              {social.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex justify-between gap-3 w-full">
        <Link
          href="/privacy-policy"
          className="hover:opacity-70 transition-opacity hover:underline">
          Політика конфіденційності
        </Link>
        <Link
          href="/offer"
          className="hover:opacity-70 transition-opacity hover:underline">
          Оферта
        </Link>
        <Link
          href="/delivery-and-payment"
          className="hover:opacity-70 transition-opacity hover:underline">
          Доставка і оплата
        </Link>
      </div>
    </div>
  );
}
