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
  ],
  css: ['~/assets/css/main.css', '~/assets/css/theme.css'],

  routeRules: {
    '/*': { prerender: true },
  },

  components: true,

  ui: {
    colorMode: false,
  },

  gtag: {
    id: 'G-M48MX6BEXN',
  },

  site: {
    url: 'https://academy.alterkaiscans.my.id',
    name: 'Alterkai TL Academy',
  },

  googleFonts: {
    families: {
      Bitter: true,
      'Open Sans': true,
      Lato: true,
    },
    display: 'swap',
  },

  compatibilityDate: '2024-07-12',
});
