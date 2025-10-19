
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Load translations via HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: "en",
    debug: process.env.NODE_ENV !== 'production',
    interpolation: {
      escapeValue: false, // Not needed for React
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to load translations
    },
  });

export default i18n;
