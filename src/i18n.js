import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importera översättningsfiler för varje sektion
import projectsDataSv from './translations/sv/projectsDataSv';
import generalDataSv from './translations/sv/generalSv.json';
import aboutDataSv from './translations/sv/aboutDataSv.json';

import projectsDataEn from './translations/en/projectsDataEn';
import generalDataEn from './translations/en/generalEn.json';
import aboutDataEn from './translations/en/aboutDataEn.json';



const resources = {
    sv: {
        projectsData: projectsDataSv,
        generalData: generalDataSv,
        aboutData: aboutDataSv,

    },
    en: {
        projectsData: projectsDataEn,
        generalData: generalDataEn,
        aboutData: aboutDataEn,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "sv",
        fallbackLng: "sv",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
