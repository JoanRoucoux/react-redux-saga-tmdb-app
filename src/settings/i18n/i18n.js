import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './locales/en.json';
import translationsFR from './locales/fr.json';
import translationsES from './locales/es.json';

// the translations
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

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'es'],
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
