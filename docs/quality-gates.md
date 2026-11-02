# Quality gates

> Статус: **active**. Каноническое описание быстрых проверок: команды, coverage,
> warnings, CI. Почему гейт такой, а не иначе, — `docs/decisions.md`.

Команды выполняются из корня репозитория.

## Каноническая команда

```text
pnpm verify
```

`verify` выполняет последовательно:

1. `pnpm --dir web check` — SvelteKit sync и `svelte-check`.
2. `pnpm --dir web test` — полный Vitest-набор, включая тесты ESLint-правил.
3. `pnpm --dir web lint:all` — ESLint, Stylelint и token audit.
4. `pnpm --dir web format:check` — форматирование кода `web/` через Biome
   (`biome.json` в корне).
5. `pnpm check:docs` — форматирование Markdown (`AGENTS.md`, `README.md`,
   `docs/`, `web/eslint-plugins/README.md`) тем же Biome.
6. `pnpm --dir web build` — production build, затем генераторы `sitemap.xml` и
   `llms.txt` в `build/` (набор страниц берётся из собранного HTML, правило —
   `docs/plan-seo.md`, §1).

Coverage в `verify` не входит: порог проверяет отдельный джоб `coverage` в
`.github/workflows/verify.yml`, который идёт параллельно остальным. Быстрый
прогон только тестов правил — `pnpm --dir web test:rules`.

Vitest держит кеш трансформаций на диске (`experimental.fsModuleCache` в
`web/vitest.config.ts`, каталог `web/node_modules/.experimental-vitest-cache`):
повторный прогон после правки пары файлов занимает единицы секунд вместо
десятков. Первый прогон после смены конфига, lockfile или `--clearCache`
заполняет кеш и идёт примерно вдвое дольше обычного. Если прогон выглядит
подозрительно (старый результат после правки), кеш снимается
`pnpm --dir web exec vitest run --clearCache`. В CI флаг выключен: там каждый
прогон начинается с пустого кеша, и заполнение было бы только потерей времени.

## Coverage

`pnpm test:coverage` (из корня) считает покрытие только по `src/lib` и падает
ниже порога. Пороги и список исключений из scope — в `web/vitest.config.ts`
(`coverage.thresholds`, `coverage.exclude`); здесь они не дублируются, чтобы
числа не устарели молча (`AGENTS.md`).

Порог — нижняя граница, а не оценка качества: он блокирует регрессию и не
требует сначала закрывать весь долг. Актуальные проценты даёт тот же
`pnpm test:coverage`; в `verify` он не входит, чтобы не удваивать прогон тестов,
регрессию порога ловит CI-джоб `coverage` (`verify.yml`).

Исключения из scope и их причины:

| Исключение                                  | Причина                                     |
| ------------------------------------------- | ------------------------------------------- |
| `**/*.test.ts`, `**/test-helpers.ts`        | сами тесты                                  |
| `**/*.svelte.ts`                            | runes, не работают в node                   |
| `executor/executor.worker.ts`               | entry worker, исполняется только в браузере |
| `components/define.ts`                      | type-only, нет исполняемого кода            |
| `core/domText.ts`, `core/io.ts`             | canvas, `createImageBitmap`, нужен браузер  |
| `i18n/en.ts`, `i18n/ru.ts`, `tool-icons.ts` | данные, а не логика                         |

`registry/*` из scope НЕ исключены: низкое покрытие там означает непокрытую
логику, а не ограничение окружения. Включение браузерных модулей в scope —
отдельное решение, а не молчаливое расширение списка.

## E2E

E2E не входит в `verify`, потому что Playwright поднимает build и статический
сервер:

```text
pnpm --dir web test:e2e
```

Запускать его обязательно для изменений маршрутов, загрузки файла, результата,
download, темы или локализации. Изменения runtime fixtures/загрузки файла
проверяются отдельным `web/e2e/png-fixtures.spec.ts`; ручные бинарники из
`tests/fixtures/` не входят в `verify`.

Локально прогон идёт с `workers: 1` и заметно медленнее. Правила нагрузки на
машину пользователя и диагностика флаков — `docs/agent-workflow.md`, раздел 3;
матрица проектов и ожидаемое поведение декодеров — `docs/testing-strategy.md`,
раздел 7; статус e2e в CI и порядок чтения прогона — `docs/decisions.md`,
разделы 9–10.

## CWV (Lighthouse)

Лабораторный контроль Core Web Vitals не входит в `verify`: прогон поднимает
build, статический сервер и браузер, это минуты, а не секунды.

```text
pnpm --dir web check:cwv
```

Что делает: production build с GA (как деплой) → `serve-static` → Lighthouse в
mobile-пресете (эмуляция устройства, slow 4G, simulated throttling) по страницам
ядра: `/`, топ инструментальных страниц по `POPULARITY` и хабы категорий. Набор
страниц (флаги `--top N`, `--skip-build`) и пороги «зелёного» — константы
`web/scripts/check-cwv.mjs`, здесь числа не дублируются. TBT — лабораторный
прокси полевого INP; сам полевой INP Lighthouse не измеряет.

Когда запускать: после крупных изменений прод-бандла — глобальный layout и
`app.css`, шрифты, тяжёлые картинки, новые крупные зависимости, каркас
`+layout`/`+page`. Цель — все строки отчёта зелёные; `FAIL` любой страницы даёт
ненулевой exit code. Полные HTML-отчёты прогона сохраняются в
`web/cwv-reports/<время запуска>/` (каталог в gitignore). Правила нагрузки на
машину — `docs/agent-workflow.md`, раздел 3: один прогон по явной команде, без
циклов повторов.

## Быстрые подмножества

Матрица «изменение → минимальный набор проверок»:

| Изменение                                                  | Команда                                                 |
| ---------------------------------------------------------- | ------------------------------------------------------- |
| Только Markdown                                            | `pnpm check:docs`                                       |
| TypeScript/Svelte                                          | `pnpm --dir web check` и `pnpm --dir web test`          |
| Lint-правило или lint-конфиг                               | `pnpm --dir web test:rules` и `pnpm --dir web lint:all` |
| Маршрут, загрузка, результат, download, тема, локаль       | `pnpm --dir web test:e2e`                               |
| Крупные изменения UI или бандла (layout, шрифты, картинки) | `pnpm --dir web check:cwv`                              |
| Перед ревью или merge                                      | `pnpm verify`                                           |

## Errors и warnings

- `errors` завершают соответствующий инструмент ненулевым кодом.
- ESLint запускается с `--max-warnings=0`: новые ESLint warnings блокируют gate.
- `conventions/no-deprecated-import` работает только в CI: в джобе `lint`
  задан `EIT_DEPRECATED_IMPORTS=1`, локально правило не подключается (нет
  затрат). Строка `[1/3] ESLint ...` в выводе `lint:all` показывает, включено ли
  оно.
- Token audit оставляет unused-token сообщение неблокирующим: новый токен
  появляется вместе с потребителем, но стиль не блокирует деплой (решение —
  `docs/decisions.md`, раздел 6).
- Резолв `var()` в `app.css` — ошибка: несуществующий токен молча роняет
  объявление, поэтому этот check failing, в отличие от unused.
- `dict-consistency` использует base-locale fallback для registry metadata и
  pattern-based policy для meta-текста страниц (`pages.*.seo`, `categoryHubs`,
  `site`); это не молчаливый `allowPaths`-список.

`lint:all` может завершиться успешно, напечатав unused-token сообщения: это
единственный неблокирующий сигнал в нём. ESLint warnings, наоборот, роняют gate,
поэтому «прошёл» ≠ «нечего чинить». Агент показывает число errors, warnings и
token warnings раздельно.

## CI

`.github/workflows/quality.yml`:

- `verify` блокирует PR при ошибке в любом своём джобе: typecheck, lint,
  formatting, docs, unit, rule-test, build или coverage;
- `e2e` запускается отдельным job после verify и пока не блокирует PR.

Внутри `verify.yml` пять независимых джобов — `types`, `lint`, `test`, `build`,
`coverage` — идут параллельно: общий шаг установки вынесен в
`.github/actions/setup-web` (pnpm, Node с кешем store, корневые и web-зависимости,
ui-kit из GitHub, `svelte-kit sync`). Джоб `lint` восстанавливает кеши ESLint и
Stylelint из `actions/cache`; в `lint-all` для обоих задана стратегия `content`,
иначе свежий checkout меняет mtime и кеш не попадает.

`.github/workflows/deploy.yml` перед production build запускает тот же
`pnpm verify`, поэтому deploy не должен проходить при ошибке быстрых проверок.

| Workflow                 | Триггер                                 | Jobs                        |
| ------------------------ | --------------------------------------- | --------------------------- |
| `Deploy to GitHub Pages` | push в `main`, dispatch                 | `verify`, `build`, `deploy` |
| `Quality`                | push в `main`, `pull_request`, dispatch | `verify`, `e2e`             |

Результат после пуша читается **по отдельным job** — процедура в
`docs/decisions.md`, раздел 10.
