import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function ExchangeReturnPage() {
  return (
    <main className="pt-[120px]">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Головна", href: "/" },
            { label: "Обмін і повернення" },
          ]}
        />

        <h1 className="font-unbounded font-bold text-[72px] uppercase mt-6 mb-10 leading-none text-center">
          ОБМІН І ПОВЕРНЕННЯ
        </h1>

        <div className="max-w-[685px] mx-auto mb-16">
          <p className="text-lg mb-6 leading-relaxed">
            Ми цінуємо, щоб кожна покупка приносила вам задоволення, тому
            надаємо зручні та прозорі умови обміну й повернення товарів. Якщо з
            будь-якої причини товар вам не підійшов — ми допоможемо виправити
            ситуацію.
          </p>

          <h2 className="font-unbounded font-bold text-2xl mb-4">
            Повернення товару
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Ви можете повернути товар протягом{" "}
            <strong>14 днів</strong> з моменту отримання, відповідно до Закону
            України «Про захист прав споживачів».
          </p>
          <p className="text-lg mb-2 leading-relaxed">
            Товар приймається до повернення, якщо він:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-1 text-lg">
            <li>не був у використанні;</li>
            <li>збережено оригінальну упаковку, пломби та етикетки;</li>
            <li>
              є документ, що підтверджує покупку (електронний чек, накладна).
            </li>
          </ul>
          <p className="text-lg mb-2 leading-relaxed">
            Повернення <strong>не здійснюється</strong>, якщо товар:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-1 text-lg">
            <li>має сліди використання;</li>
            <li>був розпакований;</li>
            <li>
              належить до категорії, що не підлягає поверненню (корми, лакомства,
              гігієнічні засоби, ветеринарні препарати — згідно із
              законодавством).
            </li>
          </ul>

          <h2 className="font-unbounded font-bold text-2xl mb-4">
            Обмін товару
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Обмін можливий протягом <strong>14 днів</strong> за умови наявності
            аналогічного товару на складі.
          </p>
          <p className="text-lg mb-2 leading-relaxed">
            Якщо потрібного товару немає — ми запропонуємо:
          </p>
          <ul className="list-disc pl-5 mb-6 space-y-1 text-lg">
            <li>заміну на інший товар;</li>
            <li>оформлення подарункового сертифіката;</li>
            <li>повернення коштів.</li>
          </ul>

          <h2 className="font-unbounded font-bold text-2xl mb-4">
            Повернення коштів
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Повернення здійснюється тим самим способом, яким була проведена
            оплата.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            <strong>Термін повернення коштів:</strong> до 7 робочих днів після
            отримання нами товару та перевірки його стану.
          </p>

          <h2 className="font-unbounded font-bold text-2xl mb-4">
            Як оформити повернення або обмін
          </h2>
          <p className="text-lg mb-2 leading-relaxed">
            Зв&apos;яжіться з нашою підтримкою:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-lg">
            <li>support@4friends-pet.com.ua</li>
            <li>+38 (067) 345-67-89</li>
          </ul>
          <p className="text-lg mb-2 leading-relaxed">Вкажіть:</p>
          <ul className="list-disc pl-5 mb-4 space-y-1 text-lg">
            <li>номер замовлення;</li>
            <li>причину повернення/обміну;</li>
            <li>фото товару (за потреби).</li>
          </ul>
          <p className="text-lg mb-6 leading-relaxed">
            Упакуйте товар, щоб запобігти пошкодженню під час транспортування.
            Надішліть товар на адресу нашого складу або передайте кур&apos;єру
            (за узгодженням).
          </p>

          <h2 className="font-unbounded font-bold text-2xl mb-4">
            Ми завжди на зв&apos;язку
          </h2>
          <p className="text-lg leading-relaxed">
            Ми дбаємо про якість сервісу та комфорт наших клієнтів. Якщо у вас
            виникли питання — пишіть або телефонуйте, ми з радістю допоможемо!
          </p>
        </div>
      </div>
    </main>
  );
}
