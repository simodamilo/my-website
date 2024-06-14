import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './en.json'
import itJSON from './it.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...enJSON },
      it: { ...itJSON },
    },
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;