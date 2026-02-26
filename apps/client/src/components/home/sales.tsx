import Image from "next/image";

export default function Sales() {
  return (
    <section className="bg-gradient-green-to-blue pt-[130px] pb-[173px]">
      <div className="container">
        <div className="flex flex-col gap-12">
          <h2 className="font-unbounded font-bold text-[56px] uppercase text-center">Акцiї</h2>
          <div className="grid grid-cols-2 gap-6">
            <Image
              src="/images/home/sale.webp"
              alt="sale"
              width={1920}
              height={1080}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
