import { i18nProvider, uiTranslations } from 'fumadocs-ui/i18n';
import { i18n } from '../../i18n';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add('ui', {
    en: {
      displayName: 'English',
    },
    cn: {
      displayName: '简体中文',
      search: '搜索文档...',
      searchNoResult: '没有找到结果',
      toc: '本页内容',
      tocNoHeadings: '没有标题',
      lastUpdate: '最后更新',
      chooseLanguage: '选择语言',
      nextPage: '下一页',
      previousPage: '上一页',
      chooseTheme: '选择主题',
      editOnGithub: '编辑此页面',
    },
  });

export function getI18nProvider(locale?: string) {
  return i18nProvider(translations, locale);
}
