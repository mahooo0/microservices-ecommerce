import Image from "next/image";
import StarButton from "../star-button";

export default function Boxes() {
  return (
    <section className="pt-20 bg-grey-3 relative">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="font-unbounded font-bold text-[56px] max-w-[1160px] mx-auto leading-none uppercase">
              Бокси для<br/> улюбленців
            </h2>
            <p className="text-black-2 text-xl">
              Бокси — це зручний спосіб придбати все необхідне одразу.{" "}
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/home/box-gif.gif"
              alt="box gif"
              width={982}
              height={865}
              className="mx-auto"
            />
            <StarButton
              href="/products"
              className="absolute z-20 top-2/3 right-32 -translate-y-2/3 [&_span]:w-[150px] [&_span]:mx-auto"
              text="Зібрати свій бокс"
            />
          </div>
          <Image
            src="/images/home/cloud-1.webp"
            alt="box cloud 1"
            className="absolute -bottom-[150px] -left-10 w-auto h-[500px] object-contain z-10"
            width={1920}
            height={600}
          />
          <Image
            src="/images/home/cloud-2.webp"
            alt="box cloud 2"
            className="absolute -bottom-[155px] left-1/2 transform -translate-x-2/3 w-auto h-[500px] object-contain z-10"
            width={1920}
            height={600}
          />
          <Image
            src="/images/home/cloud-1.webp"
            alt="box cloud 4"
            className="absolute -bottom-[210px] -right-20 w-auto h-[600px] object-contain z-10 transform -scale-x-100"
            width={1920}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
