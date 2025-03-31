import {
  reactive,
  watch
} from "./chunk-LW4I4DCF.js";

// node_modules/.pnpm/vitepress-plugin-tabs@0.6.0_vitepress@1.6.3_@algolia+client-search@5.23.0_postcss@8.5.3_e7f13db3b5cf4e7168a3e3ce031c613b/node_modules/vitepress-plugin-tabs/src/client/index.ts
import PluginTabs from "/Users/Everly/Downloads/hexo-theme-solitude-doc-main/node_modules/.pnpm/vitepress-plugin-tabs@0.6.0_vitepress@1.6.3_@algolia+client-search@5.23.0_postcss@8.5.3_e7f13db3b5cf4e7168a3e3ce031c613b/node_modules/vitepress-plugin-tabs/src/client/PluginTabs.vue";
import PluginTabsTab from "/Users/Everly/Downloads/hexo-theme-solitude-doc-main/node_modules/.pnpm/vitepress-plugin-tabs@0.6.0_vitepress@1.6.3_@algolia+client-search@5.23.0_postcss@8.5.3_e7f13db3b5cf4e7168a3e3ce031c613b/node_modules/vitepress-plugin-tabs/src/client/PluginTabsTab.vue";

// node_modules/.pnpm/vitepress-plugin-tabs@0.6.0_vitepress@1.6.3_@algolia+client-search@5.23.0_postcss@8.5.3_e7f13db3b5cf4e7168a3e3ce031c613b/node_modules/vitepress-plugin-tabs/src/client/useTabsSelectedState.ts
var injectionKey = "vitepress:tabSharedState";
var ls = typeof localStorage !== "undefined" ? localStorage : null;
var localStorageKey = "vitepress:tabsSharedState";
var setLocalStorageValue = (v) => {
  if (!ls) return;
  ls.setItem(localStorageKey, JSON.stringify(v));
};
var provideTabsSharedState = (app) => {
  const state = reactive({});
  watch(
    () => state.content,
    (newStateContent, oldStateContent) => {
      if (newStateContent && oldStateContent) {
        setLocalStorageValue(newStateContent);
      }
    },
    { deep: true }
  );
  app.provide(injectionKey, state);
};

// node_modules/.pnpm/vitepress-plugin-tabs@0.6.0_vitepress@1.6.3_@algolia+client-search@5.23.0_postcss@8.5.3_e7f13db3b5cf4e7168a3e3ce031c613b/node_modules/vitepress-plugin-tabs/src/client/index.ts
var enhanceAppWithTabs = (app) => {
  provideTabsSharedState(app);
  app.component("PluginTabs", PluginTabs);
  app.component("PluginTabsTab", PluginTabsTab);
};
export {
  enhanceAppWithTabs
};
//# sourceMappingURL=vitepress-plugin-tabs_client.js.map
