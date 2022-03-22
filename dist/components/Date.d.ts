import { TypographyProps } from '@mui/material';
import { FunctionComponent } from 'react';
export declare type DateProps = TypographyProps & {
    children: string | number;
    format?: string;
    /** Renders the date relative to now e.g. "2 hours ago" */
    fromNow?: boolean;
    /**
     * Deprecated in favor of 'children'
     * @deprecated */
    value?: never;
};
/**
 *
 * @param props
 * @returns
 */
export declare const Date: FunctionComponent<DateProps>;
