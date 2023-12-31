import { RuntimeConfig } from 'nuxt/schema';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    //"@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
  ],
  RuntimeConfig: {
    public: {
      stripePK: process.env.STRIPE_PK_KEY,
    }
  },
  app: {
    head: {
      script: [
        { 
          src: 'https://js.stripe.com/v3/', 
          defer: true 
        },
      ]
    }
  },
  build: {
    assets: {
      directory: 'assets'
    }
  }
})
