// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: [
    '/assets/main.scss',
    '/assets/theme.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-12'
})