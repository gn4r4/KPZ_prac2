# Лабораторна-практична робота №2

## Тема: Робота з package.json, залежностями, змінними оточення, семантичним версіонуванням, базовими можливостями TypeScript (type, interface, class)

**Мета:**

- Ознайомитися зі структурою `package.json` та призначенням основних полів.
- Навчитися відрізняти робочі залежності (`dependencies`) від залежностей для розробки (`devDependencies`).
- Розібратися з принципами семантичного версіонування (`SemVer`) і навчитися оновлювати версії коректно.
- Дослідити використання змінних оточення через .env файли та підключення їх у коді.
- Освоїти базові конструкції `TypeScript`: типи, інтерфейси, класи, generics.
- Налаштувати інструменти перевірки коду: `ESLint`, `Prettier`, `Husky`, `Commitlint`.
- Закріпити практику роботи з `Git` та `GitHub` (ініціалізація репозиторію, коміти, теги версій).

## Хід роботи:

### 1. Ініціалізація проєкту

Створюємо репозиторій на GitHub, клонуємо його локально.

Ініціалізовуємо npm-проєкт. Для цього переходито до папки проєкту, за допомогою команди `cd <шлях до проєкту>`, далі ініціалізовуємо npm-проєкт за допомогою команди `npm init`, заповняємо `package name`, `version`, `description`, `keywords`, `author`, `license`

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/1.png?raw=true)

Створюємо `.gitignore` з вмістом, який виключить залежності, зібрані артефакти та секрети з історії комітів

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/2.png?raw=true)

Встановлюємо основні залежності: 
```bash 
npm i dotenv zod
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/3.png?raw=true)

Встановлюємо `dev` залежності: 
```bash
npm i -D typescript tsup eslint prettier husky commitlint @commitlint/config-conventional @types/node tsx @eslint/js typescript-eslint eslint-config-prettier
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/4.png?raw=true)

Ініціалізовуємо `TypeScript`: 
```bash
npx tsc --init
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/5.png?raw=true)

Створюємо файл `eslint.config.cjs`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/6.png?raw=true)

Створюємо файл `.prettierrc.cjs`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/7.png?raw=true)

Додаємо у `package.json` розділ `scripts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/8.png?raw=true)

Створємо файл `commitlint.config.cjs`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/9.png?raw=true)

Налаштовуємо Husky та додаємо git-хуки: 
```bash
npx husky init
```

В результаті отримали нову папку `.husky/`, яка містить в собі посінсталяційний скрипт у `package.json`

Створюємо файл `.husky/pre-commit`:

```bash
echo "npm run lint && npm run format:check && npm run typecheck" > .husky/pre-commit
```

```bash
git update-index --chmod=+x .husky/pre-commit
```

Створюємо файл `.husky/commit-msg`:

```bash
echo "npm run lint && npm run format:check && npm run typecheck" > .husky/pre-commit
```

```bash
git update-index --chmod=+x .husky/commit-msg
```

Створюємо папку `src` і файл `src/index.ts`, яка буде точкою входу бібліотеки:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/10.png?raw=true)

Робимо перевірки за допомогою команд:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run lint:fix ; npm run format
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/11.png?raw=true)

Перевірки виконано, тепер робимо коміт:

```bash
git add .
git commit -m "chore: project scaffolding (npm, tsconfig, eslint, prettier, husky, commitlint, scripts)"
```

1. Версія 0.1.0 – прості функції з any

Оновлюємо `src/index.ts` – додаємо тип і функцію:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/12.png?raw=true)

Оновлюємо `src/demo.ts` (навмисна помилка):

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/13.png?raw=true)

Запускаємо перевірки:

```bash
npm run typecheck
npm run lint
npm run format:check
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/14.png?raw=true)

Оновлюємо `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/15.png?raw=true)

Повторюємо перевірку:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run lint:fix ; npm run format
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/16.png?raw=true)

Комітимо і підіймаємо версію:

```bash
git add .
git commit -m "feat: basic utils with any (add, capitalize)"
npm version minor # 0.1.0
git push --follow-tags
```

1. Версія 0.2.0 – ті ж функції, але з базовими типами

Оновлюємо `src/index.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/17.png?raw=true)

Оновлюємо `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/18.png?raw=true)

Запускаємо перевірки:

```bash
npm run typecheck # очікуються помилки типів
npm run lint
npm run format:check
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/19.png?raw=true)

Оновлюємо `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/20.png?raw=true)

Робимо перевірку:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/21.png?raw=true)

Робимо коміт і піднімаємо версію:

```bash
git add .
git commit -m "feat: add basic types for utils (number/string)"
npm version minor
git push --follow-tags
```

1. Версія 0.3.0 – нова функція зі складним типом

Оновлюємо `src/index.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/22.png?raw=true)

Оновлюємо з навмисною помилкою `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/23.png?raw=true)

Запускаємо перевірки

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/24.png?raw=true)

Виправляємо код у `src/demo.ts`

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/25.png?raw=true)

Робимо перевірку:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/26.png?raw=true)

Робимо коміт і підняття версії:

```bash
git add .
git commit -m "feat: add formatNumber with NumberFormatOptions"
npm version minor   # 0.3.0
git push --follow-tags
```

1. Версія 0.4.0 – інтерфейси + generics

Оновлюємо `src/index.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/27.png?raw=true)

Оновлюємо з навмисною помилкою `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/28.png?raw=true)

Запускаємо перевірку:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/29.png?raw=true)

Виправляємо код у `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/30.png?raw=true)

Робимо перевірки:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/31.png?raw=true)

Комітимо і піднімаємо версію:

```bash
git add .
git commit -m "feat: add User interface and generic groupBy"
npm version minor
git push --follow-tags
```

1. Версія 0.5.0 – клас `Logger` + змінені оточення (`.env`)

Створюємо `src/config.ts` (валідація `.env`):

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/32.png?raw=true)

Оновлюємо `src/index.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/33.png?raw=true)

Оновляємо `.env` у корені репозиторію:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/34.png?raw=true)

Оновлюємо `src/demo.ts` з навмисною помилкою:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/35.png?raw=true)

Робимо перевірки:

```bash
npm run typecheck
npm run lint
npm run format:check
```


>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/36.png?raw=true)

Виправляємо `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/37.png?raw=true)

Робимо перевірки:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run lint:fix ; npm run format
```

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/38.png?raw=true)

Комітимо і піднімаємо версію:

```bash
git add .
git commit -m "feat: add Logger class and env config via zod; formatNumber uses APP_PRECISION"
npm version minor # 0.5.0
git push --follow-tags
```

1. Версія 1.0.0 – стабілізація публічного `API` + посилення правил

Забороняємо правило any в `eslint.config.cjs` у блоці `rules`, а саме позначаємо його як `'error'`:

`'@typescript-eslint/no-explicit-any'`: `'error'`,

Упорядковуємо публічні експорти (тільки з `src/index.ts`). Створюємо структуру нових папок з їхніми функціями.

Папка утиліт (`utils`):

`src/utils/add.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/39.png?raw=true)

`src/utils/string.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/40.png?raw=true)

Папка методів для вирішення задач з форматуванням (`format`):

`src/format/number.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/41.png?raw=true)

Папка з методами логування (`login`): 

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/42.png?raw=true)


Оновлюємо `package.json`, а саме поля exports і types згідно з нашою новою структурою:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/43.png?raw=true)

Ігнорування директорію `dist/`, це можна зробити в конфігураційному файлі `eslint.config.cjs` в полі `ignores` додавши до масиву `'dist/\*\*'`,

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/44.png?raw=true)

Робимо перевірки, комітимо і піднімаємо версію:

```bash
git add .
git commit -m "chore: stabilize public API; forbid any; add package exports"
npm version major # 1.0.0
git push --follow-tags
```

1. Версія 2.0.0 – `breaking change`: зміна сигнатури `add`

Змінюємо сигнатуру `add` у `src/utils/add.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/45.png?raw=true)

Робимо навмисний помилковий виклик у `src/demo.ts`:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/46.png?raw=true)

Виправляємо виклик під новий API:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/47.png?raw=true)

Робимо перевірку:

>![placeholder](https://github.com/gn4r4/KPZ_prac2/blob/main/images/48.png?raw=true)

Комітимо і піднімаємо версію:

```bash
git add .
git commit -m "feat!: change add signature to accept number\[\]"
npm version major # 2.0.0
git push --follow-tags
```
