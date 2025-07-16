// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  image: {
    domains: ['contrib.rocks']
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'cn',
        name: '简体中文',
        language: 'zh-CN',
      }
    ],
  },
  compatibilityDate: '2025-06-25',
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    'nuxt-seo-utils',
    'nuxt-og-image',
    '@nuxtjs/seo',
    'nuxt-feedme'
  ],
  site: {
    url: 'https://solitude.js.org',
    name: 'solitude-docs',
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          content: 'OQ-FnVME50EgIvv5nO4fsNl7EHkEl0vUSoFUe_fAMgY',
        }
      ]
    }
  }
});