import { ListItemText, ListItemTextProps } from '@mui/material';
import { FunctionComponent } from 'react';
import { withTranslation } from '.';

const props = ['primary', 'secondary'];
export const TranslatedListItemText: FunctionComponent<ListItemTextProps> =
    withTranslation(ListItemText, props);
