# TypeScript: ВСЕ типы - разбор для собеседования

Примеры из проекта microservices-ecommerce + свои примеры там, где в проекте не нашлось.

---

## ЧАСТЬ 1: ПРИМИТИВНЫЕ ТИПЫ

Примитивы - это самые базовые "кирпичики". Как буквы в алфавите - из них строится всё остальное.

### `string` - строка
```ts
// packages/types/src/product.ts
export type StripeProductType = {
  id: string;       // <-- вот он, string
  name: string;
  price: number;
};
```
Просто текст. Имя товара, email, адрес - всё это string.

### `number` - число
```ts
// packages/types/src/order.ts
export type OrderChartType = {
  month: string;
  total: number;      // <-- number
  successful: number;
};
```
Любое число - целое, дробное, отрицательное. В TypeScript нет отдельных `int` и `float` как в других языках - всё просто `number`.

### `boolean` - true/false
```ts
// packages/types/src/cart.ts
export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;  // <-- boolean: или true, или false
};
```
Только два значения - да или нет. "Загрузились ли данные из localStorage?" - да или нет.

### `null` и `undefined`
```ts
// apps/admin/src/components/ui/chart.tsx
const ChartContext = React.createContext<ChartContextProps | null>(null);
//                                                         ^^^^ null
```
- **null** - "значение намеренно пустое". Ты специально сказал: "тут пока ничего нет".
- **undefined** - "значение не было задано". Ты просто забыл или ещё не присвоил.

**Как объяснить на собеседовании:** "null - это пустая коробка. undefined - это когда коробки вообще нет."

### `bigint` и `symbol` (в проекте НЕ найдены - свой пример)
```ts
// bigint - для очень больших чисел (больше чем Number.MAX_SAFE_INTEGER)
const hugeNumber: bigint = 9007199254740991n;  // буква n в конце

// symbol - уникальный идентификатор, который невозможно повторить
const id1: symbol = Symbol("id");
const id2: symbol = Symbol("id");
// id1 === id2  →  false!  Каждый Symbol уникален
```
На практике `bigint` и `symbol` используются редко. На собеседовании достаточно знать что они существуют.

---

## ЧАСТЬ 2: СПЕЦИАЛЬНЫЕ ТИПЫ

### `any` - "мне всё равно, какой тип"

**Пример из проекта** (`apps/payment-service/src/utils/stripe.ts`):
```ts
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-08-27.basil" as any,  // <-- any
});
```

**Что тут происходит:** Stripe ожидает конкретную версию API из своего списка, а мы передаём строку, которой нет в этом списке. `as any` говорит TypeScript: "Заткнись, я знаю что делаю, не проверяй этот тип."

**Ещё пример** (`packages/kafka/src/consumer.ts`):
```ts
topicHandler: (message: any) => Promise<void>;
```
Тут `any` используется потому что из Kafka может прийти сообщение любой формы - мы заранее не знаем его структуру.

**Простыми словами:** `any` - это как выключить TypeScript для конкретной переменной. Ты можешь делать с ней что угодно - вызывать любые методы, присваивать куда угодно - и TypeScript не скажет ни слова. Это удобно, но опасно - ошибки вылезут только в рантайме.

---

### `unknown` - "я не знаю какой тип, но буду осторожен"

**Пример из проекта** (`apps/admin/src/components/ui/chart.tsx`):
```ts
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,    // <-- unknown
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;   // сначала ПРОВЕРЯЕМ
  }
  // только после проверки работаем с payload
}
```

**Простыми словами:** `unknown` - это как посылка без подписи. Ты не знаешь что внутри, и TypeScript НЕ ДАСТ тебе её открыть, пока ты не проверишь содержимое. В отличие от `any`, где ты можешь делать что угодно без проверок.

---

### Разница `any` vs `unknown` (ключевой вопрос на собеседовании!)

| | `any` | `unknown` |
|---|---|---|
| Что это | "Мне плевать на тип" | "Я пока не знаю тип" |
| Можно ли использовать без проверки? | Да (опасно!) | Нет (безопасно) |
| TypeScript ругается? | Никогда | Пока не проверишь тип |
| Когда использовать | Крайний случай, миграция с JS | Данные из внешних источников |

```ts
// any - можно делать ЧТО УГОДНО (TypeScript молчит)
let danger: any = "hello";
danger.foo();          // OK для TypeScript, ОШИБКА в рантайме!
danger.bar.baz;        // OK для TypeScript, ОШИБКА в рантайме!

// unknown - НЕЛЬЗЯ ничего делать без проверки
let safe: unknown = "hello";
safe.foo();            // ОШИБКА TypeScript! Не скомпилируется!

if (typeof safe === "string") {
  safe.toUpperCase();  // Теперь OK - TypeScript знает что это строка
}
```

**Что отвечать на собеседовании:** "any и unknown оба означают 'любой тип', но any полностью отключает проверки - это как писать на JavaScript. А unknown заставляет тебя сначала проверить тип, и только потом работать с данными. Поэтому unknown безопаснее, и его стоит использовать вместо any везде, где это возможно."

---

### `void` - "функция ничего не возвращает"

**Пример из проекта** (`packages/types/src/cart.ts`):
```ts
export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;      // <-- void
  removeFromCart: (product: CartItemType) => void;  // <-- void
  clearCart: () => void;                            // <-- void
};
```

**Ещё пример** (`packages/kafka/src/consumer.ts`):
```ts
topicHandler: (message: any) => Promise<void>;
//                                       ^^^^ void внутри Promise
```

**Простыми словами:** `void` - это как сказать "эта функция делает своё дело, но ничего тебе не отдаёт обратно". `addToCart` добавляет товар в корзину, но не возвращает результат. `Promise<void>` - асинхронная функция, которая тоже ничего не возвращает.

---

### `never` - "этого никогда не произойдёт"

**В проекте напрямую не найден - свой пример:**
```ts
// Функция, которая НИКОГДА не завершится нормально
function throwError(message: string): never {
  throw new Error(message);
  // после throw код никогда не выполнится, поэтому тип - never
}

// Exhaustive check - проверка что мы обработали ВСЕ варианты
type Status = "success" | "failed";

function handleStatus(status: Status) {
  switch (status) {
    case "success":
      return "Ура!";
    case "failed":
      return "Ошибка";
    default:
      // Если мы добавим новый статус в union, но забудем обработать -
      // TypeScript выдаст ошибку именно тут
      const _exhaustive: never = status;
      return _exhaustive;
  }
}
```

**Простыми словами:** `never` - это тип для ситуаций, которые не должны произойти. Если TypeScript видит, что переменная имеет тип `never`, значит что-то пошло не так в логике кода.

---

## ЧАСТЬ 3: ОБЪЕКТНЫЕ / СОСТАВНЫЕ ТИПЫ

### Массивы (Array)
```ts
// packages/types/src/product.ts
export type ProductsType = ProductType[];   // массив продуктов

// packages/types/src/cart.ts
export type CartItemsType = CartItemType[]; // массив товаров в корзине
```
Два варианта записи: `string[]` или `Array<string>` - это одно и то же.

### `Record<Keys, Values>` - объект с известными ключами и значениями

**Пример из проекта** (`apps/client/src/components/ProductCard.tsx`):
```ts
(product.images as Record<string, string>)?.[productTypes.color]
```

**Пример из проекта** (`apps/admin/src/components/ui/chart.tsx`):
```ts
theme: Record<keyof typeof THEMES, string>
// Это значит: объект, где ключи - "light" | "dark", а значения - строки
```

**Простыми словами:** `Record` - это способ описать объект, где ты знаешь какие будут ключи и какого типа будут значения. `Record<string, string>` - это объект, где и ключи, и значения - строки. Как словарь: слово → перевод.

---

### Intersection Type (`&`) - пересечение

**Пример из проекта** (`packages/types/src/cart.ts`):
```ts
export type CartItemType = Product & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
```

**Ещё пример** (`packages/types/src/order.ts`):
```ts
export type OrderType = OrderSchemaType & {
  _id: string;
};
```

**Простыми словами:** `&` - это "И то, И другое". `CartItemType` - это ВСЁ из Product ПЛЮС quantity, selectedSize и selectedColor. Ты берёшь два типа и склеиваешь в один.

---

### `as const` - замораживает значения как литеральные типы

**Пример из проекта** (`packages/order-db/src/order-model.ts`):
```ts
export const OrderStatus = ["success", "failed"] as const;
```

**Ещё пример** (`packages/types/src/product.ts`):
```ts
export const colors = ["blue", "green", "red", "yellow", ...] as const;
export const sizes = ["xs", "s", "m", "l", "xl", ...] as const;
```

**Без `as const`:**
```ts
const colors = ["blue", "green"];
// TypeScript думает: colors это string[] - массив ЛЮБЫХ строк
```

**С `as const`:**
```ts
const colors = ["blue", "green"] as const;
// TypeScript думает: colors это readonly ["blue", "green"]
// Только "blue" или "green" - и никаких других строк!
```

**Простыми словами:** `as const` говорит TypeScript: "Это не просто массив строк - это КОНКРЕТНО эти значения, и они не изменятся". Это как сделать enum, но проще.

---

### Type Assertion (`as`) - утверждение типа

**Пример из проекта** (`apps/payment-service/src/utils/stripe.ts`):
```ts
process.env.STRIPE_SECRET_KEY as string
```

**Ещё пример** (`apps/product-service/src/controllers/product.controller.ts`):
```ts
category as string
search as string
```

**Простыми словами:** `as` - это ты говоришь TypeScript: "Поверь мне, это строка". `process.env.STRIPE_SECRET_KEY` может быть `string | undefined`, но ты знаешь что переменная окружения точно есть, и говоришь TypeScript не беспокоиться.

**Важно:** `as` НЕ меняет данные в рантайме. Если ты напишешь `null as string` - в рантайме там всё равно будет null. Это только подсказка для компилятора.

---

### Type Guard (`typeof`) - проверка типа в рантайме

**Пример из проекта** (`apps/product-service/src/controllers/product.controller.ts`):
```ts
if (!images || typeof images !== "object") {
  return res.status(400).json({ message: "Images object is required!" });
}
```

**Ещё пример** (`apps/admin/src/components/ui/chart.tsx`):
```ts
if (typeof payload !== "object" || payload === null) {
  return undefined;
}
```

**Простыми словами:** Type guard - это проверка типа прямо во время работы программы. После `if (typeof x === "string")` TypeScript внутри этого if знает, что x - это точно строка. Это называется "сужение типа" (type narrowing).

---

### Mapped Types - типы по шаблону

**Пример из проекта** (`apps/admin/src/components/ui/chart.tsx`):
```ts
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}
```

**Разберём по шагам:**

**Шаг 1: `[k in string]` - mapped type (тип по шаблону)**
```ts
{ [k in string]: ... }
```
Это значит: "объект, где ключом может быть ЛЮБАЯ строка". По сути это как `Record<string, ...>`, но с синтаксисом mapped type. Каждый ключ (k) - это произвольное имя, которое ты сам придумаешь: `"total"`, `"successful"`, `"chrome"` и т.д.

**Шаг 2: Базовые поля - label и icon**
```ts
{
  label?: React.ReactNode   // необязательный текст/компонент для подписи
  icon?: React.ComponentType // необязательная иконка
}
```
Каждый ключ получает эти два необязательных поля.

**Шаг 3: Union с `never` - взаимоисключающие варианты**
```ts
& (
  | { color?: string; theme?: never }   // Вариант A: задаёшь color
  | { color?: never; theme: Record<keyof typeof THEMES, string> }  // Вариант B: задаёшь theme
)
```

Тут `&` (intersection) склеивает базовые поля с ОДНИМ из двух вариантов:

- **Вариант A:** указываешь `color` (строку) - тогда `theme` использовать НЕЛЬЗЯ (`theme?: never`)
- **Вариант B:** указываешь `theme` (объект с ключами `light` и `dark`) - тогда `color` использовать НЕЛЬЗЯ (`color?: never`)

`never` здесь работает как запрет: "это свойство не может существовать в данном варианте".

`Record<keyof typeof THEMES, string>` разворачивается так:
```ts
// keyof typeof THEMES = keyof { light: "", dark: ".dark" } = "light" | "dark"
// Record<"light" | "dark", string> =
{ light: string; dark: string }
```

**Что получается В ИТОГЕ - "развёрнутый" тип:**
```ts
// ChartConfig - это объект, где каждый ключ (любая строка) имеет значение:
type ChartConfig = {
  [любойКлюч: string]:
    // Базовые поля (всегда)
    {
      label?: React.ReactNode;
      icon?: React.ComponentType;
    }
    &
    // ПЛЮС один из двух вариантов:
    (
      | { color?: string }              // Вариант A: простой цвет
      | { theme: { light: string; dark: string } }  // Вариант B: цвета для тем
    )
}
```

**Реальные примеры использования из проекта:**

```ts
// apps/admin/src/components/AppBarChart.tsx
// Вариант A - используем color:
const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-1)",      // <-- color есть, theme нет
  },
  successful: {
    label: "Successful",
    color: "var(--chart-4)",      // <-- color есть, theme нет
  },
} satisfies ChartConfig;

// apps/admin/src/components/AppPieChart.tsx
// Тоже вариант A:
const chartConfig = {
  visitors: {
    label: "Visitors",            // <-- только label, без color и theme
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

// Вариант B - если бы использовали theme (в проекте не встречается):
const chartConfigWithTheme = {
  revenue: {
    label: "Revenue",
    theme: {
      light: "#3b82f6",          // цвет для светлой темы
      dark: "#60a5fa",           // цвет для тёмной темы
    },
  },
} satisfies ChartConfig;
```

**А вот так TypeScript НЕ ДАСТ написать (ошибка!):**
```ts
const badConfig = {
  revenue: {
    label: "Revenue",
    color: "#3b82f6",            // color И theme одновременно
    theme: { light: "#3b82f6", dark: "#60a5fa" },  // ОШИБКА!
  },
} satisfies ChartConfig;
```
Нельзя задать `color` и `theme` одновременно - они взаимоисключающие благодаря `never`.

**`satisfies` vs `as`:** В примерах выше используется `satisfies ChartConfig` вместо `as ChartConfig`. Разница: `satisfies` проверяет что объект подходит под тип, НО сохраняет конкретные типы ключей ("total", "successful"). А `as` просто кастит и теряет конкретику.

**Простыми словами:** `ChartConfig` - это конфигурация для графиков. Каждый ключ - это название серии данных (total, successful, chrome...). Для каждой серии задаёшь подпись (label), иконку (icon) и цвет - либо один на все темы (color), либо разный для светлой и тёмной (theme). Смешивать color и theme нельзя.

---

### Inferred Types (`z.infer`, `InferSchemaType`) - вывод типа из схемы

**Пример из проекта** (`packages/types/src/cart.ts`):
```ts
export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
```

**Пример из проекта** (`packages/order-db/src/order-model.ts`):
```ts
export type OrderSchemaType = InferSchemaType<typeof OrderSchema>;
```

**Простыми словами:** Ты один раз описал валидацию (Zod-схему или Mongoose-схему), и TypeScript АВТОМАТИЧЕСКИ создаёт тип из этого описания. Не нужно писать тип отдельно - он "выводится" из схемы. Это DRY-принцип: описал один раз, используешь дважды.

---

## ЧАСТЬ 4: ИТОГОВАЯ ШПАРГАЛКА

### Примитивы
| Тип | Что это | Пример |
|---|---|---|
| `string` | Текст | `"hello"`, `name: string` |
| `number` | Число | `42`, `price: number` |
| `boolean` | Да/нет | `true`, `hasHydrated: boolean` |
| `null` | Намеренно пусто | `let x: string \| null = null` |
| `undefined` | Не задано | `href?: string` (может быть undefined) |
| `bigint` | Большое число | `9007199254740991n` |
| `symbol` | Уникальный ID | `Symbol("id")` |

### Специальные типы
| Тип | Одним предложением | Безопасность |
|---|---|---|
| `any` | "Мне плевать на тип, делаю что хочу" | Опасный |
| `unknown` | "Не знаю тип, но проверю перед использованием" | Безопасный |
| `void` | "Функция ничего не возвращает" | - |
| `never` | "Этого не произойдёт никогда" | - |

### Составные типы
| Тип | Что делает | Пример из проекта |
|---|---|---|
| `Array` / `[]` | Массив | `ProductsType = ProductType[]` |
| `Record<K,V>` | Объект-словарь | `Record<string, string>` для images |
| `&` (intersection) | Склеивает типы | `Product & { quantity: number }` |
| `as const` | Замораживает значения | `["success", "failed"] as const` |
| `as Type` | Утверждение типа | `process.env.KEY as string` |
| `typeof` | Проверка типа в рантайме | `typeof images !== "object"` |
| Mapped type | Тип по шаблону | `[k in string]: { ... }` |
| `z.infer` | Тип из схемы | `z.infer<typeof schema>` |

---

## Файлы с примерами
- `packages/types/src/cart.ts` - string, number, boolean, void, intersection (&), z.infer
- `packages/types/src/product.ts` - string, number, as const, массивы
- `packages/types/src/order.ts` - intersection (&), InferSchemaType
- `packages/order-db/src/order-model.ts` - as const, InferSchemaType
- `apps/payment-service/src/utils/stripe.ts` - **any**, as (type assertion)
- `packages/kafka/src/consumer.ts` - **any**, void, Promise\<void\>
- `apps/admin/src/components/ui/chart.tsx` - **unknown**, typeof, Record, mapped type, never, discriminated union
- `apps/product-service/src/controllers/product.controller.ts` - typeof (type guard), as (assertion)
- `apps/client/src/components/ProductCard.tsx` - Record, as, union
