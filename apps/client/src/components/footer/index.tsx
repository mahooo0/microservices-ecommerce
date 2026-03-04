import FooterAddress from "./footer-address";
import FooterLogo from "./footer-logo";
import FooterMenu from "./footer-menu";
import FooterSocials from "./footer-socials";

export default function Footer() {
  return (
    <footer className="pt-[70px] pb-[56px] bg-gradient-blue-to-pink relative">
      <div className="absolute bottom-[56px] right-20 w-[390px]">
        <FooterLogo />
      </div>
      <div className="container">
        <div className="flex gap-[15%]">
          <FooterSocials />
          <FooterMenu />
          <FooterAddress />
        </div>
      </div>
    </footer>
  );
}
