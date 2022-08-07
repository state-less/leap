import { AlertProps } from '@mui/material';
import { FunctionComponent } from 'react';
/**
 * Renders an alert with a dismiss button. State get's saved to localStorage.
 * @param props
 * @param props.name - A unique name for the alert.
 */
export declare const DismissableAlert: FunctionComponent<AlertProps & {
    name: string;
}>;
