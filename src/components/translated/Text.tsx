import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Text = (props) => {
    const { children } = props;
    const { t } = useTranslation();
    const translated = t(children);
    return <Typography>{translated}</Typography>;
};
