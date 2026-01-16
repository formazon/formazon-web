# Анализ компонентов по Vercel React Best Practices

Полный анализ всех компонентов проекта с предложениями по улучшениям согласно Vercel React Best Practices.

## 📊 Приоритеты улучшений

| Приоритет | Категория | Количество проблем | Статус |
|-----------|-----------|-------------------|--------|
| 🔴 CRITICAL | Eliminating Waterfalls | 3 | Требует немедленного внимания |
| 🔴 CRITICAL | Bundle Size Optimization | 4 | Требует немедленного внимания |
| 🟠 HIGH | Server-Side Performance | 5 | Важно для производительности |
| 🟡 MEDIUM-HIGH | Client-Side Data Fetching | 2 | Улучшит UX |
| 🟡 MEDIUM | Re-render Optimization | 8 | Улучшит производительность |
| 🟡 MEDIUM | Rendering Performance | 6 | Улучшит рендеринг |
| 🔵 LOW-MEDIUM | JavaScript Performance | 4 | Микро-оптимизации |

---

## 🔴 CRITICAL: Eliminating Waterfalls

### 1. CookieConsentProvider: Waterfall в useEffect
**Файл:** `src/components/providers/CookieConsentProvider.tsx`

**Проблема:** Чтение localStorage происходит в useEffect, создавая waterfall между монтированием и отображением контента.

**Текущий код:**
```typescript
useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") {
        setConsentStatus(stored);
    } else {
        setConsentStatus("pending");
    }
}, []);
```

**Решение:** Использовать inline script для синхронного чтения localStorage до гидратации (правило `rendering-hydration-no-flicker`).

**Улучшенный код:**
```typescript
// В RootLayout добавить inline script:
<script
    dangerouslySetInnerHTML={{
        __html: `
            (function() {
                const consent = localStorage.getItem('cookie-consent');
                window.__COOKIE_CONSENT__ = consent === 'accepted' || consent === 'rejected' 
                    ? consent 
                    : 'pending';
            })();
        `,
    }}
/>

// В CookieConsentProvider:
useEffect(() => {
    setMounted(true);
    const stored = (window as any).__COOKIE_CONSENT__ ?? 
        localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored === "accepted" || stored === "rejected") {
        setConsentStatus(stored);
    } else {
        setConsentStatus("pending");
    }
}, []);
```

### 2. Analytics Scripts: Можно улучшить загрузку
**Файлы:** `src/components/analytics/GoogleAnalytics.tsx`, `src/components/analytics/YandexMetrika.tsx`

**Проблема:** Скрипты загружаются с `strategy="afterInteractive"`, но можно использовать `strategy="lazyOnload"` для еще большей отсрочки.

**Улучшение:** Изменить strategy на `lazyOnload` (правило `bundle-defer-third-party`).

```typescript
<Script
    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
    strategy="lazyOnload"  // вместо afterInteractive
/>
```

### 3. ContactForm: Нет обработки параллельных запросов
**Файл:** `src/components/contact/ContactForm.tsx`

**Проблема:** Если пользователь быстро отправит форму дважды, создастся два параллельных запроса.

**Решение:** Добавить флаг и отмену предыдущего запроса.

---

## 🔴 CRITICAL: Bundle Size Optimization

### 1. Тяжелые компоненты не используют динамический импорт
**Файлы:** `src/app/page.tsx`, `src/app/work/page.tsx`

**Проблема:** Все компоненты загружаются сразу, даже те, что ниже первого экрана.

**Текущий код:**
```typescript
import { HomeHero } from "@/components/home/HomeHero";
import { SelectedWorkSection } from "@/components/home/SelectedWorkSection";
// ... все сразу
```

**Решение:** Использовать `next/dynamic` для компонентов ниже первого экрана (правило `bundle-dynamic-imports`).

**Улучшенный код:**
```typescript
import dynamic from 'next/dynamic';

const SelectedWorkSection = dynamic(
    () => import('@/components/home/SelectedWorkSection').then(mod => ({ default: mod.SelectedWorkSection })),
    { ssr: true }
);

const AboutPreviewSection = dynamic(
    () => import('@/components/home/AboutPreviewSection').then(mod => ({ default: mod.AboutPreviewSection })),
    { ssr: true }
);

// Или использовать preload на hover (правило bundle-preload):
const SelectedWorkSection = dynamic(
    () => import('@/components/home/SelectedWorkSection').then(mod => ({ default: mod.SelectedWorkSection })),
    { 
        ssr: true,
        loading: () => <div className="h-96" /> // placeholder
    }
);
```

### 2. WorkPreviewCard: Можно сделать динамическим
**Файл:** `src/components/ui/WorkPreviewCard.tsx`

**Проблема:** Компонент используется только при hover, но загружается всегда.

**Решение:** Динамический импорт в Header и HomeHero.

### 3. TypingText: Можно отложить загрузку
**Файл:** `src/components/ui/TypingText.tsx`

**Проблема:** Анимация не критична для начального рендера.

**Решение:** Динамический импорт с `ssr: false`.

### 4. Проверка barrel imports
**Проблема:** Нужно проверить, нет ли barrel файлов (index.ts), которые экспортируют много компонентов.

**Решение:** Импортировать напрямую из файлов (правило `bundle-barrel-imports`).

---

## 🟠 HIGH: Server-Side Performance

### 1. Footer: Может быть Server Component
**Файл:** `src/components/layout/Footer.tsx`

**Проблема:** Компонент не использует клиентские фичи, но не помечен как Server Component явно.

**Решение:** Убедиться, что он остается Server Component (сейчас он уже таковой, хорошо).

### 2. WorkCard: Может быть Server Component
**Файл:** `src/components/work/WorkCard.tsx`

**Проблема:** Не использует клиентские хуки, может быть Server Component.

**Статус:** Уже Server Component - ✓

### 3. WorkPage: Неоптимальная логика рендера
**Файл:** `src/app/work/page.tsx`

**Проблема:** Создание массива items в теле компонента вместо useMemo или чистого рендера.

**Текущий код:**
```typescript
const items: React.ReactNode[] = [];
workItems.forEach((item, index) => {
    // ...
});
```

**Решение:** Использовать чистый JSX без промежуточного массива или использовать React.cache для кеширования.

### 4. ContactForm API Route: Можно оптимизировать
**Файл:** `src/app/api/contact/route.ts`

**Проблема:** Имитация задержки с setTimeout - не оптимально.

**Решение:** Убрать после интеграции с реальным сервисом.

### 5. React.cache для повторяющихся данных
**Проблема:** Не используется React.cache для кеширования контента в пределах одного запроса.

**Решение:** Обернуть чтение данных в React.cache (правило `server-cache-react`).

```typescript
// В lib/content/work.ts или создать wrapper:
import { cache } from 'react';

export const getWorkItems = cache(() => {
    return workItems;
});
```

---

## 🟡 MEDIUM-HIGH: Client-Side Data Fetching

### 1. ContactForm: Нет дедупликации запросов
**Файл:** `src/components/contact/ContactForm.tsx`

**Проблема:** Использует fetch напрямую без дедупликации.

**Решение:** Использовать SWR или React Query (правило `client-swr-dedup`), или хотя бы добавить AbortController для отмены.

**Улучшенный код:**
```typescript
const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Отменить предыдущий запрос если есть
    if (abortControllerRef.current) {
        abortControllerRef.current.abort();
    }
    
    setStatus("submitting");
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    
    // ... остальной код с signal: abortController.signal
}, []);
```

### 2. Global Event Listeners: Нет дедупликации
**Файлы:** `src/components/layout/Header.tsx`, `src/components/home/HomeHero.tsx`

**Проблема:** Несколько компонентов добавляют scroll listeners.

**Решение:** Использовать общий хук или дедуплицировать (правило `client-event-listeners`).

---

## 🟡 MEDIUM: Re-render Optimization

### 1. Button: Неоптимальный useMemo
**Файл:** `src/components/ui/Button.tsx`

**Проблема:** useMemo для простой конкатенации строк не дает преимуществ (правило `rerender-memo`).

**Текущий код:**
```typescript
const combinedClassName = useMemo(
    () => `${baseStyles} ${variants[variant]} ${className}`,
    [variant, className]
);
```

**Решение:** Убрать useMemo - конкатенация строк слишком простая операция.

```typescript
const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;
```

### 2. WorkGrid: Неоптимальный useMemo
**Файл:** `src/components/work/WorkGrid.tsx`

**Проблема:** useMemo для простого условного выражения.

**Текущий код:**
```typescript
const colsClass = useMemo(() => {
    if (columns === 3) return "grid gap-x-5 md:grid-cols-3";
    if (columns === 1) return "grid gap-x-4 gap-y-20";
    return "grid gap-x-4 gap-y-20 md:grid-cols-2";
}, [columns]);
```

**Решение:** Можно упростить, но useMemo здесь оправдан, так как className передается как prop. Оставить как есть.

### 3. SelectedWorkSection: Неоптимальный useMemo
**Файл:** `src/components/home/SelectedWorkSection.tsx`

**Проблема:** useMemo для создания массива JSX элементов - лучше использовать чистый рендер.

**Текущий код:**
```typescript
const items = useMemo(() => {
    const result: React.ReactNode[] = [];
    featuredWorkItems.forEach((item, index) => {
        // ...
    });
    return result;
}, []);
```

**Решение:** Использовать чистый JSX рендер:

```typescript
return (
    <section className="mb-16 space-y-6">
        <H2Index index={1}>Work</H2Index>
        <div className="grid grid-cols-1 gap-x-4 gap-y-20 md:grid-cols-2">
            {featuredWorkItems.map((item, index) => (
                <>
                    <div key={item.slug}>
                        <WorkCard item={item} />
                    </div>
                    {(index + 1) % 2 === 0 && index < featuredWorkItems.length - 1 && (
                        <div key={`quadro-${index}`} className="col-span-1 md:col-span-2">
                            <QuadroDot />
                        </div>
                    )}
                </>
            ))}
        </div>
    </section>
);
```

### 4. Header: Избыточные useMemo/useCallback
**Файл:** `src/components/layout/Header.tsx`

**Проблема:** Некоторые useCallback/useMemo могут быть избыточны.

**Анализ:**
- `activeNavItems` useMemo с пустым массивом зависимостей - хорошо, так как journalEnabled статичен
- `handleMouseMove` useCallback - хорошо, передается как prop
- Остальные handlers - проверить, действительно ли нужны

**Рекомендация:** Оставить как есть, но можно упростить некоторые handlers, если они не передаются как props.

### 5. HomeHero: Множественные useCallback
**Файл:** `src/components/home/HomeHero.tsx`

**Проблема:** Все handlers обернуты в useCallback, но не все передаются как props.

**Решение:** Убрать useCallback там, где handlers используются только внутри компонента.

### 6. TypingText: Оптимизация setState
**Файл:** `src/components/ui/TypingText.tsx`

**Проблема:** Множественные setState вызовы в интервале.

**Решение:** Можно батчить через flushSync или использовать один state объект (но текущая реализация приемлема).

### 7. CookieConsentProvider: Derived state
**Файл:** `src/components/providers/CookieConsentProvider.tsx`

**Проблема:** `hasConsented` вычисляется каждый рендер.

**Решение:** Использовать useMemo:

```typescript
const hasConsented = useMemo(
    () => consentStatus === "accepted",
    [consentStatus]
);
```

### 8. ContactForm: Functional setState
**Файл:** `src/components/contact/ContactForm.tsx`

**Статус:** Уже использует функциональный setState в handleSubmit - ✓

---

## 🟡 MEDIUM: Rendering Performance

### 1. Static JSX: Можно хоистить
**Проблема:** В некоторых компонентах статический JSX можно вынести наружу.

**Пример:** Footer copyright текст можно вынести как константу.

### 2. Conditional Rendering: Использовать ternary вместо &&
**Файлы:** Множество файлов

**Проблема:** Использование `{condition && <Component />}` вместо `{condition ? <Component /> : null}` может вызывать проблемы с 0/false значениями (правило `rendering-conditional-render`).

**Примеры для исправления:**
- `src/components/layout/Header.tsx:131` - `{isWorkHovered && ...}`
- `src/components/home/HomeHero.tsx:149` - `{hoveredProject && ...}`
- И другие места

**Решение:** Заменить на ternary:
```typescript
{isWorkHovered ? (
    <div>...</div>
) : null}
```

### 3. SVG Animation: Проверить анимацию
**Проблема:** Нужно проверить, анимируются ли SVG элементы напрямую (правило `rendering-animate-svg-wrapper`).

**Решение:** Если есть, обернуть в div и анимировать div.

### 4. Content Visibility: Длинные списки
**Файл:** `src/app/work/page.tsx`

**Проблема:** Длинные списки работ могут выиграть от `content-visibility` (правило `rendering-content-visibility`).

**Решение:** Добавить CSS:
```css
.work-grid > * {
    content-visibility: auto;
    contain-intrinsic-size: 400px;
}
```

### 5. Inline Styles: Группировать в CSS классы
**Файлы:** `src/components/layout/Header.tsx`, `src/components/home/HomeHero.tsx`

**Проблема:** Использование inline styles для позиционирования (`left`, `top`).

**Решение:** Если возможно, использовать CSS переменные или классы (правило `js-batch-dom-css`).

### 6. Hydration: Inline script для cookie consent
**Уже упомянуто в разделе Waterfalls** - использовать inline script для предотвращения flicker.

---

## 🔵 LOW-MEDIUM: JavaScript Performance

### 1. Regex Hoisting
**Файл:** `src/app/api/contact/route.ts`

**Проблема:** Regex создается каждый вызов функции.

**Текущий код:**
```typescript
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**Статус:** Уже вынесен как константа - ✓

### 2. localStorage Caching
**Файл:** `src/components/providers/CookieConsentProvider.tsx`

**Проблема:** localStorage читается дважды (в inline script и в useEffect).

**Решение:** Кешировать значение (правило `js-cache-storage`).

### 3. Object Property Access: Кеширование
**Файлы:** Различные компоненты

**Проблема:** Повторяющийся доступ к свойствам объектов в циклах.

**Пример:** В Header.tsx `workCases[hoveredWorkSlug]` проверяется несколько раз.

**Решение:** Кешировать в переменную (правило `js-cache-property-access`).

### 4. Array Operations: Комбинирование итераций
**Проблема:** В некоторых местах можно комбинировать filter/map (правило `js-combine-iterations`).

**Примеры:** Проверить все `.map().filter()` цепочки.

---

## 📝 Дополнительные рекомендации

### 1. TypeScript: Использовать `as const` для литералов
**Пример:** В Button.tsx `variants` уже использует `as const` - ✓

### 2. Accessibility: Проверить ARIA атрибуты
**Рекомендация:** Добавить aria-labels где необходимо.

### 3. Error Boundaries: Использовать более специфичные
**Файл:** `src/components/layout/ErrorBoundary.tsx`

**Рекомендация:** Разместить Error Boundaries ближе к компонентам, которые могут падать.

### 4. Suspense Boundaries: Добавить для динамических компонентов
**Рекомендация:** Обернуть динамически импортированные компоненты в Suspense.

### 5. Image Optimization: Проверить все Image компоненты
**Статус:** Используется next/image - ✓
**Рекомендация:** Убедиться, что все изображения имеют правильные width/height.

---

## 🎯 Приоритетный план действий

### Фаза 1 (Критично - сделать немедленно):
1. ✅ Исправить CookieConsentProvider waterfall
2. ✅ Добавить динамические импорты для компонентов ниже первого экрана
3. ✅ Изменить strategy аналитики на `lazyOnload`

### Фаза 2 (Высокий приоритет):
4. ✅ Убрать неоптимальные useMemo (Button, SelectedWorkSection)
5. ✅ Исправить conditional rendering (&& на ternary)
6. ✅ Добавить React.cache для данных

### Фаза 3 (Средний приоритет):
7. ✅ Оптимизировать useCallback в HomeHero/Header
8. ✅ Добавить SWR/дедупликацию в ContactForm
9. ✅ Добавить content-visibility для длинных списков

### Фаза 4 (Низкий приоритет):
10. ✅ Микро-оптимизации (кеширование, комбинирование итераций)

---

## 📊 Метрики для измерения улучшений

После внедрения улучшений рекомендуется измерить:

1. **LCP (Largest Contentful Paint)**: Должен улучшиться с динамическими импортами
2. **FCP (First Contentful Paint)**: Улучшится с устранением waterfalls
3. **TTI (Time to Interactive)**: Улучшится с отложенной загрузкой аналитики
4. **Bundle Size**: Должен уменьшиться с динамическими импортами
5. **Re-render Count**: Должен уменьшиться с оптимизацией useMemo/useCallback

---

**Дата анализа:** 2025-01-27
**Проанализировано компонентов:** 78+ файлов
**Всего улучшений предложено:** 32
