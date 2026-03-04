import { notFound } from "next/navigation";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import RelatedArticles from "@/components/blog/related-articles";
import { mockPosts } from "../mock-data";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = mockPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const pTagStyles = "[&>p]:max-w-[685px] [&>p]:mr-auto";

  const relatedPosts = mockPosts.filter((p) => p.id !== post.id).slice(0, 5);

  const truncatedTitle =
    post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title;

  return (
    <div className="pt-[120px]">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Головна", href: "/" },
            { label: "Блог", href: "/blog" },
            { label: truncatedTitle },
          ]}
        />
        <div className="font-inter blog-post">
          <div className="mt-6 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-black-1">Категорія:</span>
              <span className="bg-gradient-green-to-yellow border border-grey-9 rounded-full px-5 py-2 text-sm font-semibold">
                {post.category}
              </span>
            </div>
            <span className="text-grey-9 text-sm">{post.date}</span>
          </div>

          <h1 className="font-semibold text-[72px] uppercase leading-none mb-12">
            {post.title}
          </h1>

          <p>
            Правильне харчування вашого улюбленця — це основа його
            здоров&apos;я, енергії та довголіття. Незалежно від того, чи у вас
            цуценя, доросла собака чи кіт, збалансований раціон відіграє ключову
            роль у підтримці імунітету, здоров&apos;я шерсті, кісток та
            загального самопочуття тварини.
          </p>

          <p>
            У цій статті ми розглянемо основні принципи годування домашніх
            тварин, поширені помилки та поради від ветеринарів, які допоможуть
            вам зробити правильний вибір для вашого улюбленця.
          </p>

          <h3>
            Бокс — це готовий набір для вашого улюбленця, у якому вже є все
            необхідне.
          </h3>

          <p>
            <Image
              src="/images/product.png"
              alt={post.title}
              width={500}
              height={400}
              className="rounded-2xl w-full"
            />
          </p>

          <p>
            Перш за все, варто враховувати вік, породу, вагу та рівень
            активності вашої тварини. Цуценята та кошенята потребують більше
            білка та калорій для росту, тоді як дорослі тварини мають інші
            потреби. Літнім тваринам часто потрібен спеціальний раціон з
            підтримкою суглобів та зниженою калорійністю.
          </p>

          <p>
            Якісний корм повинен містити м&apos;ясо як основний інгредієнт,
            необхідні вітаміни та мінерали, а також правильне співвідношення
            білків, жирів та вуглеводів. Уникайте кормів із великою кількістю
            штучних добавок, барвників та консервантів.
          </p>

          <p>
            Не менш важливим є режим годування. Дотримуйтесь регулярного графіку
            прийому їжі та не перегодовуйте тварину. Зайва вага може призвести
            до серйозних проблем зі здоров&apos;ям, включаючи діабет, проблеми з
            суглобами та серцево-судинні захворювання.
          </p>

          <p>
            Завжди забезпечуйте доступ до свіжої питної води. Вода є критично
            важливою для нормального функціонування організму тварини, особливо
            якщо вона харчується сухим кормом.
          </p>

          <p>
            Якщо ви вирішили змінити раціон тварини, робіть це поступово
            протягом 7-10 днів, змішуючи новий корм із старим. Різка зміна
            харчування може викликати розлади травлення та стрес у тварини.
          </p>

          <p>
            Консультуйтесь з ветеринаром щодо оптимального раціону саме для
            вашого улюбленця. Кожна тварина унікальна, і те, що підходить одній,
            може бути не найкращим вибором для іншої.
          </p>
        </div>
      </div>

      <RelatedArticles posts={relatedPosts} />
    </div>
  );
}
