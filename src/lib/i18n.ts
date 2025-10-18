
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../locales/en/translation.json";
import translationES from "../locales/es/translation.json";
import translationDE from "../locales/de/translation.json";
import translationZH from "../locales/zh/translation.json";
import translationHI from "../locales/hi/translation.json";
import translationFR from "../locales/fr/translation.json";
import translationJA from "../locales/ja/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  de: {
    translation: translationDE,
  },
  zh: {
    translation: translationZH,
  },
  hi: {
    translation: translationHI,
  },
  fr: {
    translation: translationFR,
  },
  ja: {
    translation: translationJA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
