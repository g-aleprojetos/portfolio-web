import i18next, {i18n as i18nInstance} from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {languages} from './i18n.constants';
import {en} from './translation/i18n.en-US';
import {pt} from './translation/i18n.pt-BR';
import {fr} from './translation/i18n.fr-FR';

export const defaultNS = 'pages.header';

export const resources = {
  [languages.pt]: pt,
  [languages.en]: en,
  [languages.fr]: fr,
};

const createI18n = (language: string): i18nInstance => {
  const i18n = i18next
    .createInstance()
    .use(LanguageDetector)
    .use(initReactI18next);

  i18n.init({
    fallbackLng: language,
    resources: resources,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
};

export const i18n = createI18n(languages.pt);
