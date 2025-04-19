// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-gtag',
    'nuxt-disqus',
  ],
  css: ['~/assets/css/main.css', '~/assets/css/theme.css'],

  routeRules: {
    '/*': { prerender: true },
  },

  components: true,

  disqus: {
    shortname: 'alterkai-tl-academy',
  },

  ui: {
    colorMode: false,
  },

  gtag: {
    id: 'G-M48MX6BEXN',
  },

  image: {
    quality: 75,
    format: ['webp']
  },

  site: {
    url: 'https://academy.alterkaiscans.my.id',
    name: 'Alterkai TL Academy',
  },

  compatibilityDate: '2024-07-12',
});