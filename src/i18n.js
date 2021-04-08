import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translationEN.json';
import translationCZ from './locales/cz/translationCZ.json';

const resources = {
    en: {
        translation: translationEN
    },
    cz: {
        translation: translationCZ
    }
};
let lang;
const storedLang = localStorage.getItem('lang');
if (!storedLang) {
    localStorage.setItem('lang', 'en');
    lang = 'en';
} else {
    lang = storedLang;
}

i18n.use(initReactI18next)  
    .init({
        resources,
        lng: lang,

        keyseparator: false,

        interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
        }
  });


export default i18n;