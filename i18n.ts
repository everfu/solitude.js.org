import { defineI18n } from 'fumadocs-core/i18n';

export const localeCookieName = 'FD_LOCALE';
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'cn'],
  hideLocale: 'default-locale',
});
