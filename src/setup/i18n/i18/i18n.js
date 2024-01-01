import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arMessages from '../messages/ar.json';
import enMessages from '../messages/en.json';

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: enMessages,
        ar: arMessages,
    },
    react: { useSuspense: false },
    interpolation: {
        escapeValue: false // react already safes from xss
    }
});

export default i18n;