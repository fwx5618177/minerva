import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import zhCommon from "./locales/zh/common.json";
import jaCommon from "./locales/ja/common.json";
import frCommon from "./locales/fr/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
    },
    zh: {
      common: zhCommon,
    },
    ja: {
      common: jaCommon,
    },
    fr: {
      common: frCommon,
    },
  },
  defaultNS: "common",
  lng: navigator.language.split("-")[0],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
