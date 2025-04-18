// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: [{ path: "~/shared/icons", prefix: "Icon" }, "~/components"],
  alias: {
    css: "/<rootDir>/assets/css",
  },
  app: {
    baseURL: "/",
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/ui",
  ],
  i18n: {
    vueI18n: "~/i18n/i18n.config.ts",
  },
  pinia: {
    storesDirs: ["./stores/**"]
  },
  debug: true,
});
