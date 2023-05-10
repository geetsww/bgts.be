// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['~/assets/css/reset.css', '~/assets/css/typo.css'],
  vue:{
    compilerOptions:{
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    }
  }
})
