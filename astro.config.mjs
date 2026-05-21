import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

const isDotCom = process.env.VITE_DOMAIN === 'com';
const SITE = isDotCom
  ? 'https://academy.alterkaiscans.com'
  : 'https://academy.alterkaiscans.my.id';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    starlight({
      title: 'Alterkai TL Academy',
      description:
        'Platform pembelajaran manga translation dan scanlation terlengkap dalam bahasa Indonesia. Pelajari translator, typesetter, cleaner, redraw, dan quality control secara gratis.',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Alterkai Scans',
      },
      favicon: '/favicon.ico',
      lastUpdated: true,
      defaultLocale: 'root',
      locales: {
        root: { label: 'Bahasa Indonesia', lang: 'id-ID' },
      },
      social: {
        github: 'https://github.com/Faralha/Alterkai-TL-Academy',
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        Header: './src/components/Header.astro',
        PageTitle: './src/components/PageTitle.astro',
        Sidebar: './src/components/Sidebar.astro',
        TableOfContents: './src/components/TableOfContents.astro',
      },
      sidebar: [
        {
          label: 'Pengenalan',
          items: [
            { label: 'Perkenalan', slug: 'perkenalan' },
            { label: 'About', slug: 'about' },
          ],
        },
        {
          label: 'Tutorial Posisi',
          items: [
            { label: '✏️ Translator', slug: 'translator' },
            { label: '🖋️ Typesetter', slug: 'typesetter' },
            { label: '🧹 Cleaner', slug: 'cleaner' },
            { label: '🎨 Redraw', slug: 'redraw' },
            { label: '🔍 Quality Control', slug: 'qc' },
          ],
        },
        {
          label: 'Lainnya',
          items: [
            {
              label: 'Alterkai Scans',
              link: 'https://alterkaiscans.my.id',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'Alterkai Scans v2',
              link: 'https://alterkaiscans.com',
              attrs: { target: '_blank', rel: 'noopener' },
            },
            {
              label: 'Trakteer / Donasi',
              link: 'https://trakteer.id/faralha',
              attrs: { target: '_blank', rel: 'noopener' },
            },
          ],
        },
      ],
      head: [
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400;1,6..72,500;1,6..72,600&family=Inter:wght@300;400;500;600;700;800;900&family=Inter+Tight:wght@600;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;600;900&family=Shippori+Mincho:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
          },
        },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ff4d8d' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:locale', content: 'id_ID' } },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'Alterkai TL Academy',
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: '/img/logo.png' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:image', content: '/img/logo.png' },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content:
              'manga translation, scanlation, translator, typesetter, cleaner, redraw, quality control, manga indonesia, tutorial scanlation',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'author', content: 'Alterkai Scans' },
        },
        {
          tag: 'meta',
          attrs: { name: 'robots', content: 'index, follow' },
        },
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Alterkai TL Academy',
            description:
              'Platform pembelajaran manga translation dan scanlation gratis dalam bahasa Indonesia',
            url: [
              'https://academy.alterkaiscans.com',
              'https://academy.alterkaiscans.my.id',
            ],
            logo: '/img/logo.png',
            sameAs: ['https://github.com/Faralha/Alterkai-TL-Academy'],
            inLanguage: 'id-ID',
            audience: {
              '@type': 'Audience',
              audienceType: 'manga enthusiasts, aspiring scanlators',
            },
          }),
        },
      ],
    }),
    sitemap(),
  ],
});
