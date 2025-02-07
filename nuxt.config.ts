// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  components: [
    {
     path: '~/components/',
     pathPrefix: false,
     extensions: ['vue'],
     pattern: '**/*'
     }
   ],
   app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
      ]
    }
  },
  runtimeConfig : {
    apiKey : process.env.NUXT_API_KEY
    //public : {} // For public variables
  },
  modules: [
    '@pinia/nuxt'
  ],
})