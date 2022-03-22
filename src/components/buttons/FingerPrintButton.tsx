import { Button, ButtonProps, Tooltip } from '@mui/material';
import clsx from 'clsx';
const {
    useClientContext,
    useAuth,
    fingerprintStrategy,
} = require('@state-less/react-client');
import { truncateMid } from '../../lib/util';
import { FunctionComponent } from 'react';
import { TranslatedButton } from '../translated/Button';
import { useTranslation } from 'react-i18next';

const LABEL_BUTTON = 'Fingerprint';
const TITLE_TOOLTIP_AUTH = 'Authenticated';
const translate = Function.prototype;

type FingerPrintButtonProps = ButtonProps & {};
/**
 * A button that attempts fingerprint based authentication against a react-server.
 * @returns
 */
export const FingerprintButton: FunctionComponent<FingerPrintButtonProps> = ({
    children = null,
    ...rest
}) => {
    const { identity } = useClientContext();
    const { authenticate } = useAuth(fingerprintStrategy);
    const { t } = useTranslation();
    
    const color = clsx({
        success: identity?.fingerprint,
        warning: !identity?.fingerprint,
    }) as ButtonProps['color'];

    const text = !identity?.fingerprint
        ? LABEL_BUTTON
        : truncateMid(identity?.fingerprint?.visitorId);

    const tooltipTitle = t ? t(TITLE_TOOLTIP_AUTH) : TITLE_TOOLTIP_AUTH;

    return (
        <Tooltip title={tooltipTitle}>
            <TranslatedButton
                color={color}
                variant="contained"
                onClick={() => authenticate()}
                {...rest}
            >
                {text}
            </TranslatedButton>
        </Tooltip>
    );
};
