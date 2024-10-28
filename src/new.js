import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "Handicrafts Manufacturer": "Handicrafts Manufacturer",
                "buffalo bone": "buffalo bone",
                "welcome to": "Welcome to"
            }
        },
        fr: {
            translation: {
                "Handicrafts Manufacturer": "Fabricant d'artisanat",
                "buffalo bone": "os de buffle",
                "welcome to": "Bienvenue à",
            }
        },
        es: {
            translation: {
                "Handicrafts Manufacturer": "Fabricante de artesanías",
                "buffalo bone": "hueso de búfalo",
                "welcome to": "Bienvenido a",
            }
        },
        jn: {
            translation: {
                "Handicrafts Manufacturer": "手工艺品制造商",
                "buffalo bone": "水牛骨",
                "welcome to": "ようこそ",
            }
        },
        il: {
            translation: {
                "Handicrafts Manufacturer": "Produttore di artigianato",
                "buffalo bone": "osso di bufalo",
                "welcome to": "benvenuto a"
            }

        }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
