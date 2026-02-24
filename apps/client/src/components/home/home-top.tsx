import HomeBanner from "./home-banner";
import HomeCatalog from "./home-catalog";

export default function HomeTop() {
  return (
    <div className="bg-gradient-blue-to-pink-diagonal overflow-hidden">
      <HomeBanner />
      <HomeCatalog />
    </div>
  );
}
