import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './locales/en.json';
import translationsFR from './locales/fr.json';
import translationsES from './locales/es.json';

const resources = {
  en: {
    translations: translationsEN,
  },
  fr: {
    translations: translationsFR,
  },
  es: {
    translations: translationsES,
  },
};

const i18nextOptions = {
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr', 'es'],
  ns: ['translations'],
  defaultNS: 'translations',
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nextOptions);

export default i18n;
