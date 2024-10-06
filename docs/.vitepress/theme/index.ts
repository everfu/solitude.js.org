// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@theojs/lumen/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import { DocVideoLink,DocBox, DocLinks, DocBoxCube } from '@theojs/lumen'
import ScriptX from 'vue-scriptx'
import Ads from 'vue-google-adsense'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app }) {
    enhanceAppWithTabs(app),
    app.use(ScriptX),
    app.use(Ads.Adsense),
    app.use(Ads.InArticleAdsense),
    app.use(Ads.InFeedAdsense),
    app.component('VideoLink', DocVideoLink),
    app.component('Box', DocBox),
    app.component('Links', DocLinks),
    app.component('BoxCube', DocBoxCube)
  }
} satisfies Theme
