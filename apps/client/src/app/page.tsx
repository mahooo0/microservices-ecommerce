import Benefits from "@/components/home/benefits";
import Boxes from "@/components/home/boxes";
import FAQ from "@/components/home/faq";
import HomeTop from "@/components/home/home-top";
import Sales from "@/components/home/sales";

const Homepage = async () => {
  return (
    <>
      <HomeTop />
      <Benefits />
      <div className="overflow-hidden">
        <Boxes />
        <Sales />
      </div>
      <FAQ />
    </>
  );
};

export default Homepage;
