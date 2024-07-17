// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages:true,
  modules:[//'@nuxtjs/supabase',
  '@nuxtjs/tailwindcss', '@pinia/nuxt', '@vite-pwa/nuxt', "@nuxt/icon", '@nuxtjs/supabase'],
  runtimeConfig:{
    public: {
      bucketUrl: process.env.BUCKET_URL
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false }, 
  pwa: {
    manifest: {
      name: "Threads Clone",
      short_name: "Threads Clone",
      description: "This is a Threads Clone",
      theme_color: "#000000",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  supabase: {
    redirectOptions:{
      login:'/auth',
      callback: '/',
      include: undefined,
      exclude:[], 
      cookieRedirect: false,
    }
  }
})