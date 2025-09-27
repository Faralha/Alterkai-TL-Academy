import { defineConfig } from 'vitepress'

// Multi-domain configuration
const isDotCom = typeof process !== 'undefined' && process.env.VITE_DOMAIN === 'com'
const baseURL = isDotCom ? 'https://academy.alterkaiscans.com' : 'https://academy.alterkaiscans.my.id'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './content',

  // Enhanced SEO Configuration
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'id_ID' }],
    ['meta', { property: 'og:site_name', content: 'Alterkai TL Academy' }],
    ['meta', { property: 'og:image', content: '/img/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/img/logo.png' }],
    // Canonical akan diatur dinamis per halaman jika diperlukan
    ['meta', { name: 'keywords', content: 'manga translation, scanlation, translator, typesetter, cleaner, redraw, quality control, manga indonesia, tutorial scanlation' }],
    ['meta', { name: 'author', content: 'Alterkai Scans' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // JSON-LD Structured Data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      'name': 'Alterkai TL Academy',
      'description': 'Platform pembelajaran manga translation dan scanlation gratis dalam bahasa Indonesia',
      'url': ['https://academy.alterkaiscans.com', 'https://academy.alterkaiscans.my.id'],
      'logo': '/img/logo.png',
      'sameAs': [
        'https://github.com/Faralha/Alterkai-TL-Academy'
      ],
      'courseMode': 'online',
      'teaches': [
        'Manga Translation',
        'Typesetting',
        'Image Cleaning',
        'Redraw Techniques',
        'Quality Control'
      ],
      'inLanguage': 'id-ID',
      'audience': {
        '@type': 'Audience',
        'audienceType': 'manga enthusiasts, aspiring scanlators'
      }
    })]
  ],
  
  title: "Alterkai TL Academy",
  description: "Platform pembelajaran manga translation dan scanlation terlengkap dalam bahasa Indonesia. Pelajari translator, typesetter, cleaner, redraw, dan quality control secara gratis.",
  
  // Enhanced site configuration
  lang: 'id-ID',
  lastUpdated: true,
  cleanUrls: true,
  
  ignoreDeadLinks: true,

  // Sitemap generation - primary domain
  sitemap: {
    hostname: baseURL
  },
  
  vite: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Perkenalan', link: '/perkenalan' },
      { 
        text: 'Tutorial', 
        items: [
          { text: '✏️ Translator', link: '/translator' },
          { text: '🖋️ Typesetter', link: '/typesetter' },
          { text: '🧹 Cleaner', link: '/cleaner' },
          { text: '🎨 Redraw', link: '/redraw' }
        ]
      },
      { text: 'About', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Pengenalan',
        items: [
          { text: 'About', link: '/about' }
        ]
      },
      {
        text: 'Tutorial',
        items: [
          { text: 'Perkenalan', link: '/perkenalan' },
          { text: '✏️ Translator', link: '/translator' },
          { text: '🖋️ Typesetter', link: '/typesetter' },
          { text: '🧹 Cleaner', link: '/cleaner' },
          { text: '🎨 Redraw', link: '/redraw' },
          { text: '🔍 Quality Control', link: '/qc' }
        ]
      },
      {
        text: 'Lainnya',
        items: [
          { text: 'Alterkai Scans', link: 'https://alterkaiscans.my.id' },
          { text: 'Alterkai Scans v2', link: 'https://alterkaiscans.com' },
          { text: 'Trakteer / Donasi', link: 'https://trakteer.id/faralha' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Faralha/Alterkai-TL-Academy' }
    ],

    footer: {
      message: 'Belajar Translate TL Manga dengan Mudah, gratis, dan cepat.',
      copyright: 'Copyright © 2023-present Alterkai Scans'
    },

    // Enhanced SEO settings
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Cari Tutorial',
                buttonAriaLabel: 'Cari Tutorial'
              },
              modal: {
                displayDetails: 'Tampilkan detail',
                resetButtonTitle: 'Reset pencarian',
                backButtonTitle: 'Tutup pencarian',
                noResultsText: 'Tidak ada hasil untuk',
                footer: {
                  selectText: 'pilih',
                  navigateText: 'navigasi',
                  closeText: 'tutup'
                }
              }
            }
          }
        }
      }
    }
  }
})
