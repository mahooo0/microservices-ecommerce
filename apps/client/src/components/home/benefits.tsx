import Image from "next/image";

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

export default function Benefits() {
  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="max-w-[1160px] mx-auto ">
          <h2 className="font-unbounded font-bold text-[56px] leading-none uppercase text-center mb-10">
            Місце, де розуміють тебе і твого улюбленця
          </h2>
          <div className="grid grid-cols-3 gap-10">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`${benefit.gradient} rounded-[20px] p-8 flex flex-col gap-3 justify-between min-h-[500px]`}>
                <div className="flex justify-between items-start">
                  <Image src={benefit.icon} alt="" width={33} height={32} />
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
                <p className=" text-black-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
