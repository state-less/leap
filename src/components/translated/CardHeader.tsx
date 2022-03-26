import { CardHeader } from '@mui/material';
import { withTranslation } from '.';

export const TranslatedCardHeader = withTranslation(CardHeader, [
    'title',
    'subheader',
]);
