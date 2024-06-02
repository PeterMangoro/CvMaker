// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@vee-validate/nuxt",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxt/image",
  ],

  ui: {
    icons: ["heroicons", "lucide","solar"],
  },
});