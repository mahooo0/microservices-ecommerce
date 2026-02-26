"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: "/images/home/bone1.svg",
    gradient: "bg-gradient-blue-to-pink-diagonal",
    title: "З ЛЮБОВ'Ю\nДО ХВОСТИКІВ",
    description:
      "Наш магазин створений із любові до тварин. Ми ретельно відбираємо кожен товар, щоб ваш улюбленець отримував лише найкраще — від якісного корму до безпечних іграшок.",
  },
  {
    icon: "/images/home/bone2.svg",
    gradient: "bg-gradient-pink-to-green",
    title: "УСЕ ДЛЯ ЗРУЧНОСТІ ГОСПОДАРЯ",
    description:
      "Ми зробили сайт простим і швидким, щоб ви могли знайти потрібне за лічені секунди. Зручний каталог, швидка доставка та уважна підтримка — усе для вашого комфорту.",
  },
  {
    icon: "/images/home/bone3.svg",
    gradient: "bg-gradient-green-to-yellow",
    title: "ЗООМАГАЗИН,\nЩО РОЗУМІЄ ТЕБЕ",
    description:
      "Ми знаємо, як важливо знайти саме те, що підходить вашому улюбленцю. Тому пропонуємо персональні рекомендації та чесні описи товарів — без маркетингових хитрощів.",
  },
];

const CARD_WIDTH = 360;
const CARD_HEIGHT = 500;
const GAP = 40;

// Stack offsets for the initial pile (card 0 = front/top, card 2 = back/bottom)
const stackOffsets = [
  { x: 0, y: 0, rotation: -8, scale: 1, zIndex: 30 },
  { x: 30, y: -20, rotation: 3, scale: 0.95, zIndex: 20 },
  { x: 60, y: -40, rotation: 10, scale: 0.9, zIndex: 10 },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const container = cardsContainerRef.current;
      if (!section || !container) return;

      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      const inners = innerRefs.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length !== 3 || inners.length !== 3) return;

      // Calculate positions
      const containerWidth = container.offsetWidth;
      const centerX = (containerWidth - CARD_WIDTH) / 2;

      // Row positions: 3 cards centered with gaps
      const totalRowWidth = CARD_WIDTH * 3 + GAP * 2;
      const startX = (containerWidth - totalRowWidth) / 2;
      const rowPositions = benefits.map((_, i) => ({
        x: startX + i * (CARD_WIDTH + GAP),
        y: 0,
      }));

      // Stack position: centered, overlapping the title (negative y)
      const stackY = -180;

      // Initial position: above the section, completely hidden
      const offScreenY = -(CARD_HEIGHT + 800);

      // Set initial positions — off-screen above the section
      cards.forEach((card, i) => {
        const offset = stackOffsets[i];
        if (!offset) return;
        gsap.set(card, {
          position: "absolute",
          top: 0,
          left: 0,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          x: centerX + offset.x,
          y: offScreenY,
          rotation: offset.rotation,
          scale: offset.scale,
          zIndex: offset.zIndex,
          willChange: "transform",
        });
      });

      // Ensure inner cards start at rotateY(0)
      inners.forEach((inner) => {
        gsap.set(inner, { rotateY: 0 });
      });

      // Create the timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=300%",
        },
      });

      // Phase 1 (0 → 0.3): Drop in from top → stacked position
      cards.forEach((card, i) => {
        const offset = stackOffsets[i];
        if (!offset) return;
        tl.to(
          card,
          {
            y: stackY + offset.y,
            duration: 0.3,
            ease: "power2.out",
          },
          i * 0.02 // slight stagger
        );
      });

      // Phase 2 (0.3 → 0.65): Stack → Row
      cards.forEach((card, i) => {
        const pos = rowPositions[i];
        if (!pos) return;
        tl.to(
          card,
          {
            x: pos.x,
            y: pos.y,
            rotation: 0,
            scale: 1,
            duration: 0.35,
            ease: "power2.inOut",
          },
          0.3 + i * 0.03
        );
      });

      // Phase 3 (0.65 → 1.0): Flip
      inners.forEach((inner, i) => {
        tl.to(
          inner,
          {
            rotateY: 180,
            duration: 0.35,
            ease: "power2.inOut",
          },
          0.65 + i * 0.03
        );
      });

      // Refresh on resize
      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="h-screen flex flex-col justify-center overflow-hidden">
      <div className="container">
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-unbounded font-bold text-[56px] leading-none uppercase text-center mb-10 relative z-10">
            Місце, де розуміють тебе і твого улюбленця
          </h2>
          <div
            ref={cardsContainerRef}
            className="relative overflow-visible"
            style={{
              height: CARD_HEIGHT,
              perspective: 1200,
            }}>
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute top-0 left-0"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}>
                {/* Inner wrapper for 3D flip */}
                <div
                  ref={(el) => {
                    innerRefs.current[i] = el;
                  }}
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}>
                  {/* Back face — gradient + logo centered + bone icons in corners */}
                  <div
                    className={`${benefit.gradient} absolute inset-0 rounded-[20px] p-8 flex flex-col justify-between items-center`}
                    style={{ backfaceVisibility: "hidden" }}>
                    <div className="flex w-full justify-end">
                      <Image
                        src={benefit.icon}
                        alt=""
                        width={33}
                        height={32}
                      />
                    </div>
                    <Image
                      src="/images/home/Logo.svg"
                      alt="4friends"
                      width={130}
                      height={30}
                    />
                    <div className="flex w-full justify-start">
                      <Image
                        src={benefit.icon}
                        alt=""
                        width={33}
                        height={32}
                      />
                    </div>
                  </div>

                  {/* Front face — full content (rotated 180 so it shows correctly after flip) */}
                  <div
                    className={`${benefit.gradient} absolute inset-0 rounded-[20px] p-8 flex flex-col gap-3 justify-between`}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}>
                    <div className="flex justify-between items-start">
                      <Image
                        src={benefit.icon}
                        alt=""
                        width={33}
                        height={32}
                      />
                      <Image
                        src="/images/home/Logo.svg"
                        alt="4friends"
                        width={87}
                        height={20}
                      />
                    </div>
                    <h3 className="font-semibold font-geologica text-2xl uppercase whitespace-pre-line">
                      {benefit.title}
                    </h3>
                    <p className="text-black-2">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
