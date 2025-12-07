# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` hosts App Router routes; folders map to URLs (`galeria/`, `opiniones/`, `nosotros/`, etc.).
- `src/components/` keeps shared UI like `Footer.jsx`; centralize reusable logic here.
- `public/` stores static assets; mirror route structure when practical.
- `scripts/` contains maintenance helpers (`patch-menu.mjs`, `clear`).
- Build artefacts live in `out/` (fresh export) and `site/` (deployment mirror). Never commit `out/` or `site_backup_*`.

## Build, Test & Development Commands
- `npm run dev` starts the local Next.js dev server with hot reloading.
- `npm run build` produces the production bundle (static export ready).
- `npm run export` regenerates the static site in `out/`.
- `npm run preview` serves the exported site at http://localhost:8080 for smoke checks.
- `npm run lint` or `npm run lint:fix` enforce the ESLint ruleset; run before every PR.
- `npm run deploy` syncs `out/` into `site/` via rsync; reserve for vetted releases.

## Coding Style & Naming Conventions
- Follow the default Next.js + `eslint-config-next` guidance (2-space indent, single quotes in JS/TS, no dangling semicolons).
- Components and hooks use `PascalCase`/`camelCase`; route folders use kebab-case aligned with URL slugs.
- Co-locate Tailwind classes within JSX; add CSS modules only when styles repeat.
- Store shared constants under `src/` utilities instead of duplicating per page.

## Testing Guidelines
- There is no automated test runner yet; rely on manual QA plus linting. Document manual steps in the PR description.
- When adding tests, place them beside the feature (`src/<feature>/__tests__/`) and wire them into CI before enforcing checks.
- Always verify `npm run build` and `npm run preview` before deployment, especially after asset or routing changes.

## Commit & Pull Request Guidelines
- Prefer Conventional Commits (`feat:`, `fix:`, `docs:`, `chore(scope):`, etc.); the recent history (`docs: README inicial`, `chore(git): …`) is the model.
- Keep commits focused and revert-ready. Squash trivial fixups before pushing.
- PRs describe the user-facing impact, include screenshots for visual updates, and link to tracking issues or tasks.
- Note deployment or content migration steps so operators can reproduce them after merge.

## Deployment Notes
- Static export requires `next.config.js` to keep `output: "export"`; do not enable server-only features.
- After deploying, back up the previous `site/` snapshot to `site_backup_<date>` if automation is unavailable.
