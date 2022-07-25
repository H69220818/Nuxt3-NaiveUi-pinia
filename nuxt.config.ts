import { defineNuxtConfig } from "nuxt";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
    }
  },
  buildModules: ["nuxt-windicss", "@pinia/nuxt"],
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer"
          ]
        : ["@juggle/resize-observer"]
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],

    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : []
    }
  },
  css: ["@/assets/style/main.css", "@/assets/style/normalize.css"]
});
