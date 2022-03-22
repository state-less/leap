import { Button, ButtonProps } from '@mui/material';
import { FunctionComponent } from 'react';
import { withTranslation } from '.';

type TranslatedButtonProps = ButtonProps & {
    label?: string;
    children?: string;
};
const props = ['children', 'label'];
export const TranslatedButton: FunctionComponent<TranslatedButtonProps> =
    withTranslation(Button, props);
