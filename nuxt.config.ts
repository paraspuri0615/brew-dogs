// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: "src/",
  app: {
    baseURL: "/brew-dogs/",
    buildAssetsDir: "assets",
  },
  runtimeConfig: {
    public: {
      baseURL: "https://api.punkapi.com/v2",
    },
  },
  css: ["@quasar/extras/roboto-font/roboto-font.css"],
  modules: ["nuxt-quasar-ui"],
});
