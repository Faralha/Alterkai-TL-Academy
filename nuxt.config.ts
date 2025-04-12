// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/image'],
  css: ['~/assets/css/main.css', '~/assets/css/theme.css'],

  routeRules: {
    '/*': { prerender: true },
  },

  components: true,

  ui: {
    colorMode: false,
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
