import { Alert, AlertTitle } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const TranslatedAlertTitle = (props) => {
    const { children, ...rest } = props;
    const { t } = useTranslation();

    return <AlertTitle {...rest}>{t(children)}</AlertTitle>;
};
export const TranslatedAlert = (props) => {
    const { children, ...rest } = props;
    const { t } = useTranslation();

    return <Alert {...rest}>{t(children)}</Alert>;
};
