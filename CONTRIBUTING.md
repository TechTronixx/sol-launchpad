# Contributing to Solana Launchpad Template

Thanks for your interest. This is a small project — keep PRs focused.

## Branch workflow

- `development` is the active branch; `master` mirrors stable releases.
- Branch off `development`, commit, and open a PR back to `development` (or to `master` once stable).
- Keep `development` and `master` in sync after merging.

## Before you submit

- `bun install` to sync dependencies.
- `bun run lint` — no new lint errors.
- `bun run build` — the project builds cleanly.
- Do not commit `.env`, private keys, RPC URLs with secrets, or build output (`.next/`).
- No emoji in README and docs (house style).

## Reporting issues

- Bugs: open an issue with the **Bug report** template.
- Feature ideas: use the **Feature request** template.
- Questions: open an issue and label it `question`.

## Licensing

By contributing you agree your contributions are licensed under the project's MIT license (see LICENSE).
