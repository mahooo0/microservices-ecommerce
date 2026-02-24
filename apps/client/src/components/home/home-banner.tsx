import React from "react";
import StarButton from "@/components/star-button";
import Image from "next/image";

export default function HomeBanner() {
  return (
    <section className="h-screen relative pt-[144px]">
      <div className="absolute -z-0 top-0 left-0 w-full">
        <Image
          src="/images/home/home-bg.gif"
          alt="banner"
          className="w-full h-auto object-cover"
          width={1920}
          height={1080}
        />
      </div>
      <Image
        src="/images/home/cloud-1.webp"
        alt="cloud layer 1"
        className="absolute -bottom-[425px] left-0 w-auto h-[775px] object-contain z-10"
        width={1920}
        height={775}
      />
      <Image
        src="/images/home/cloud-2.webp"
        alt="cloud layer 2"
        className="absolute -bottom-[380px] left-2/4 -translate-x-1/4 w-auto h-[775px] object-contain z-10"
        width={1162}
        height={775}
      />
      <Image
        src="/images/home/cloud-3.webp"
        alt="cloud layer 3"
        className="absolute -bottom-[425px] right-0 w-auto h-[775px] object-contain z-10"
        width={1280}
        height={775}
      />
      <div className="container">
        <div className="flex flex-col relative z-40">
          <div className="max-w-[900px] mx-auto flex flex-col text-center gap-2">
            <h1 className="font-unbounded font-black text-6xl uppercase">
              Усе для здоров’я та радостi вашого улюбленця
            </h1>
            <p className="text-black-2">
              Корм, іграшки, аксесуари та турбота — в одному місці
            </p>
          </div>
          <div className="absolute right-20 top-2/3 translate-y-2/3">
            <StarButton
              href="/catalog"
              text="В КАТАЛОГ"
              className="mt-8 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
