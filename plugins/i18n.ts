import { createI18n } from 'vue-i18n';
import en from '@/lang/en.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: { en },
    missing: (locale, key) => {
      return key;
    },
  });

  vueApp.use(i18n);
});
