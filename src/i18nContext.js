import { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const I18nContext = createContext();

const I18nProvider = ({ children }) => {
    const { t, i18n } = useTranslation();

    return (
        <I18nContext.Provider value={{ t, i18n }}>
            {children}
        </I18nContext.Provider>
    );
};

const useI18n = () => useContext(I18nContext);

export { I18nProvider, useI18n };