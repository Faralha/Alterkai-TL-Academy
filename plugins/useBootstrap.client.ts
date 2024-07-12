// plugins/useBootstrap.client.ts
import { defineNuxtPlugin } from '#app';
import * as bootstrap from 'bootstrap';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('bootstrap', bootstrap);
});
