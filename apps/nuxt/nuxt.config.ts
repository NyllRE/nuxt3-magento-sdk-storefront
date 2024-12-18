// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@storefront-ui/nuxt'],
  runtimeConfig: {
    public: {
      vsfDemoContent: false,
      vsfPageBuilderModule: false,
      nuxtImageProvider: 'nuxt-image',
      magentoBaseUrl: 'http://localhost:8181/magento',
    }
  }
})
