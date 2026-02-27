import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import BlogCard, { type BlogPost } from "@/components/blog/blog-card";
import CategoryFilter from "@/components/blog/category-filter";
import RecentlyViewed from "@/components/blog/recently-viewed";
import FAQ from "@/components/home/faq";
import { searchParamsCache } from "./search-params";

const mockPosts: BlogPost[] = [
  {
    id: 1,
    slug: "yak-pravylno-hoduvaty-tsutsenyat",
    date: "16.05.25",
    category: "Годування",
    image: "/images/product.png",
    title: "Як правильно годувати цуценят у перші місяці життя",
    description:
      "Правильне харчування цуценят — запорука їхнього здорового росту та розвитку. Дізнайтеся, які продукти підходять найкраще та як скласти раціон.",
  },
  {
    id: 2,
    slug: "vykhovannia-domashnoho-ulublentsia",
    date: "14.05.25",
    category: "Виховання",
    image: "/images/product.png",
    title: "Основні принципи виховання домашнього улюбленця",
    description:
      "Виховання тварини потребує терпіння та послідовності. У цій статті ми розглянемо базові команди та підходи до навчання вашого улюбленця.",
  },
  {
    id: 3,
    slug: "imunitet-kotiv-yak-pidtrymaty",
    date: "12.05.25",
    category: "Імунітет",
    image: "/images/product.png",
    title: "Імунітет котів: як підтримати здоров'я вашого улюбленця",
    description:
      "Сильний імунітет — основа здоров'я кота. Розповідаємо про вітаміни, правильне харчування та регулярні огляди у ветеринара.",
  },
  {
    id: 4,
    slug: "vaktsynatsiia-tsutsenyat-kalendar",
    date: "10.05.25",
    category: "Вакцинації",
    image: "/images/product.png",
    title: "Календар вакцинацій для цуценят: що потрібно знати",
    description:
      "Вакцинація захищає вашого улюбленця від небезпечних хвороб. Дізнайтеся, які щеплення необхідні та коли їх робити.",
  },
  {
    id: 5,
    slug: "sukhyj-chy-volozhyj-korm",
    date: "08.05.25",
    category: "Годування",
    image: "/images/product.png",
    title: "Сухий чи вологий корм: що обрати для вашого кота",
    description:
      "Порівняння сухого та вологого корму для котів. Переваги, недоліки та рекомендації ветеринарів для оптимального раціону.",
  },
  {
    id: 6,
    slug: "yak-viduchyty-kota-dryapaty-mebli",
    date: "06.05.25",
    category: "Виховання",
    image: "/images/product.png",
    title: "Як відучити кота дряпати меблі: поради експертів",
    description:
      "Дряпання меблів — природна поведінка котів, але її можна скоригувати. Практичні поради, як зберегти ваші меблі.",
  },
  {
    id: 7,
    slug: "sezonni-zahrozy-dlya-tvaryn",
    date: "04.05.25",
    category: "Імунітет",
    image: "/images/product.png",
    title: "Сезонні загрози для здоров'я домашніх тварин",
    description:
      "Кожна пора року несе свої ризики для здоров'я вашого улюбленця. Дізнайтеся, як захистити тварину від сезонних небезпек.",
  },
  {
    id: 8,
    slug: "vaktsynatsiia-doroslyh-sobak",
    date: "02.05.25",
    category: "Вакцинації",
    image: "/images/product.png",
    title: "Вакцинація дорослих собак: графік та особливості",
    description:
      "Ревакцинація необхідна навіть дорослим собакам. Розповідаємо про графік щеплень та важливість регулярних візитів до ветеринара.",
  },
  {
    id: 9,
    slug: "naturalne-hoduvanyia-sobak",
    date: "30.04.25",
    category: "Годування",
    image: "/images/product.png",
    title: "Натуральне годування собак: переваги та ризики",
    description:
      "Натуральне годування має свої плюси та мінуси. Розглянемо, як правильно скласти раціон із натуральних продуктів.",
  },
  {
    id: 10,
    slug: "sotsialisatsiia-tsutsenyat",
    date: "28.04.25",
    category: "Виховання",
    image: "/images/product.png",
    title: "Соціалізація цуценят: чому це важливо",
    description:
      "Рання соціалізація допомагає цуценяті стати впевненим та дружнім собакою. Поради, як правильно знайомити тварину зі світом.",
  },
  {
    id: 11,
    slug: "alerhii-u-domashnih-tvaryn",
    date: "26.04.25",
    category: "Імунітет",
    image: "/images/product.png",
    title: "Алергії у домашніх тварин: симптоми та лікування",
    description:
      "Алергії можуть суттєво впливати на якість життя тварини. Дізнайтеся, як розпізнати симптоми та що робити для полегшення стану.",
  },
  {
    id: 12,
    slug: "mify-pro-vaktsynatsiiu",
    date: "24.04.25",
    category: "Вакцинації",
    image: "/images/product.png",
    title: "Міфи про вакцинацію тварин: розвінчуємо хибні уявлення",
    description:
      "Навколо вакцинації тварин існує багато міфів. У цій статті ми спростовуємо найпоширеніші з них на основі наукових даних.",
  },
];

type BlogPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { categories } = await searchParamsCache.parse(searchParams);

  const filteredPosts =
    categories.length === 0
      ? mockPosts
      : mockPosts.filter((post) => categories.includes(post.category));

  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs
          items={[{ label: "Головна", href: "/" }, { label: "Блог" }]}
        />

        <h1 className="font-unbounded text-center font-bold text-[72px] uppercase mt-6 mb-10 leading-none">
          БЛОГ
        </h1>

        <CategoryFilter
          totalArticles={mockPosts.length}
          shownArticles={filteredPosts.length}
        />

        <div className="grid grid-cols-4 gap-6 mb-10">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <FAQ className="py-[120px]" />
      <RecentlyViewed />
    </main>
  );
}
