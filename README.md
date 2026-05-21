![Website](https://img.shields.io/website?url=https%3A%2F%2Facademy.alterkaiscans.my.id)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/faralha/Alterkai-TL-Academy)

![image](https://github.com/user-attachments/assets/63749a38-636d-4ca6-959e-29934e0bf365)

# Alterkai TL Academy

A website that's build entirely to educate newbies into Scanlate. Features easy-to-understand explanation with image example. It is currently available only in Indonesian.

## Features

- A brief History and explanation on Scanlation
- Explanation and guide to:
  - Typeset
  - Translate
  - Clean
  - Redraw (soon)

## Contributing

Contributions are always welcome!

Want to suggest a features but can't code? Kindly open an Issues. Or if you can code, any pull request that may benefit are always welcome.

This website is built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build). All content lives in `src/content/docs/` as plain Markdown — no JS knowledge required to contribute a tutorial.

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # static site -> dist/
pnpm preview
```

Multi-domain builds:

```bash
VITE_DOMAIN=com  pnpm build  # academy.alterkaiscans.com
VITE_DOMAIN=myid pnpm build  # academy.alterkaiscans.my.id (default)
```
