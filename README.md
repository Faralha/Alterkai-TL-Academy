![Website](https://img.shields.io/website?url=https%3A%2F%2Facademy.alterkaiscans.my.id)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/faralha/Alterkai-TL-Academy)

![image](https://github.com/user-attachments/assets/63749a38-636d-4ca6-959e-29934e0bf365)

# Alterkai TL Academy

A website that's build entirely to educate newbies into Scanlate. Features easy-to-understand explanation with image example. It is currently available only in Indonesian.

## Features

- A brief History and explanation on Scanlation
- Explanation and guide to:
  - Translate
  - Typeset
  - Clean
  - Redraw
  - Quality Control
- Role summary (difficulty, time, file format) and Do's / Don'ts on every tutorial
- Progress tracking: mark a tutorial as done, saved in your browser

## Contributing

Contributions are always welcome!

Want to suggest a features but can't code? Kindly open an Issues. Or if you can code, any pull request that may benefit are always welcome.

This website is built with [Astro](https://astro.build) 7 and [Starlight](https://starlight.astro.build) 0.42. All content lives in `src/content/docs/`: plain Markdown (`.md`) for most pages, MDX (`.mdx`) for pages that use the `DoDont` component. No JS knowledge required to contribute a tutorial. Before writing, read the [content style guide](CONTENT-GUIDE.md) (in Indonesian).

Where things live:

- `src/content/docs/` — tutorial pages. Frontmatter fields (`icon`, `heroImage`, `spec`) are defined in `src/content.config.ts`
- `src/components/` — Starlight overrides (`Header`, `PageTitle`, `Sidebar`, `TableOfContents`, `Pagination`) plus `RoleSpec` and `DoDont`
- `src/styles/custom.css` — site styles, including the tutorial reading mode
- `src/pages/index.astro` — landing page
- `public/img/` — images used in the tutorials

## Local development

Requires Node.js 22.23.4 or newer and pnpm (`corepack enable` sets it up).

```bash
pnpm install
pnpm dev            # http://localhost:4321
pnpm build          # checks content, then builds the static site -> dist/
pnpm preview
pnpm check:content  # Markdown breakage + style guide check only
```

Multi-domain builds:

```bash
VITE_DOMAIN=com  pnpm build  # academy.alterkaiscans.com
VITE_DOMAIN=myid pnpm build  # academy.alterkaiscans.my.id (default)
```
