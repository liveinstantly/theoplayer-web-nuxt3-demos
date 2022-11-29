import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  rootDir: "src",
  ssr: true,
  typescript: {
    shim: false,
    strict: true
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/scss/global.scss"
  ],
  build: {
    transpile: [
      "vuetify"
    ],
  },
  // https://v3.nuxtjs.org/guide/going-further/runtime-config
  // This an be overridden by NUXT_PUBLIC_*
  runtimeConfig: {
    public: {
      theoplayer: {
        license: ''
      }
    }
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
        }
      }
    }
    //server: {
    //  watch: {
    //    usePolling: true
    //  }
    //},
  },
  //nitro: {
  //  preset: "netlify"
  //},
})
