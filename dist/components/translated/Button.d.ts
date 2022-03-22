import { ButtonProps } from '@mui/material';
import { FunctionComponent } from 'react';
declare type TranslatedButtonProps = ButtonProps & {
    label?: string;
    children?: string;
};
export declare const TranslatedButton: FunctionComponent<TranslatedButtonProps>;
export {};
