import { Tooltip, Typography, TypographyProps } from '@mui/material';
import moment, { MomentBuiltinFormat } from 'moment';
import { FunctionComponent } from 'react';
import { TranslatedTooltip } from './translated/Tooltip';

export type DateProps = TypographyProps & {
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
export const Date: FunctionComponent<DateProps> = (props) => {
    const { children, format, fromNow, ...rest } = props;
    const date = moment(children);
    let str = date.format(format);

    if (fromNow) str = date.fromNow();

    const title = '';

    return (
        <TranslatedTooltip title={title}>
            <Typography variant="caption" {...rest}>
                {str}
            </Typography>
        </TranslatedTooltip>
    );
};
