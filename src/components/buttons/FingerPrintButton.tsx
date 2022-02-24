import { Button, ButtonProps, Tooltip } from '@mui/material';
import clsx from 'clsx';
import {
    useClientContext,
    useAuth,
    fingerprintStrategy,
} from '@state-less/react-client';
import { truncateMid } from '../../util';

const LABEL_BUTTON = 'Fingerprint';
const TITLE_TOOLTIP_AUTH = 'Authenticated';
const translate = Function.prototype;

/**
 * A button that attempts fingerprint based authentication against a react-server.
 * @param t - Optional translation function from react-i18n.
 * @returns
 */
export const FingerprintButton = ({ children = null, t = null, ...rest }) => {
    const { identity } = useClientContext();
    const { authenticate } = useAuth(fingerprintStrategy);

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
            <Button
                color={color}
                variant="contained"
                onClick={() => authenticate()}
                {...rest}
            >
                {text}
            </Button>
        </Tooltip>
    );
};
