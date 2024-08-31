// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: `%s %separator %appName`,
      templateParams: {
        appName: process.env.APP_NAME,
        separator: "|"
      }
    }
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@element-plus/nuxt", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      backendUrl: process.env.BACKEND_URL
    }
  },
  ssr: false,
  telemetry: false
})
