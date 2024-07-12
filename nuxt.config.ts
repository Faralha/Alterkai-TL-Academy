// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    "@nuxt/image",
    "@vesp/nuxt-fontawesome",
    "@nuxtjs/google-fonts"
  ],
  css: [
    '/assets/main.scss',
    '/assets/theme.css'],

  routeRules: {
    '/': { prerender: true }
  },

  fontawesome: {
    icons: {
      solid: [
        'arrow-left',
        'arrow-right'
      ],
      brands: [
        'github'
      ]
    }
  },

  googleFonts: {
    families: {
      Bitter: true,
      "Open Sans": true,
      Lato: true,
    },
    display: 'swap',
  },

  compatibilityDate: '2024-07-12'
})