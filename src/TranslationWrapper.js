// withTranslation.js
import { useI18n } from './i18nContext';
import TranslationWrapper from './TranslationWrapper';

const withTranslation = (WrappedComponent) => {
    const WithTranslation = () => {
        const { t, i18n } = useI18n();

        return (
            <TranslationWrapper>
                <WrappedComponent />
            </TranslationWrapper>
        );
    };

    return WithTranslation;
};

export default withTranslation;