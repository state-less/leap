import { Alert, AlertTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

export const TranslatedAlertTitle = (props) => {
    const { children, ...rest } = props;
    const { t } = useTranslation();

    return <AlertTitle {...rest}>{t(children)}</AlertTitle>;
};

export const TranslatedAlert = (props) => {
    const { children, markdown, ...rest } = props;
    const { t } = useTranslation();
    const translated = t(children);
    return (
        <Alert square {...rest}>
            {markdown ? (
                <ReactMarkdown>{translated}</ReactMarkdown>
            ) : (
                translated
            )}
        </Alert>
    );
};
