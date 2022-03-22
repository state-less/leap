import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';
import {
    useAuth,
    useClientContext,
    webAuthnStrategy,
} from '@state-less/react-client';
import clsx from 'clsx';
import { getWebAuthnId, truncateMid } from '../../lib/util';
import { YubiKeyIcon } from '../Icons';
import { TranslatedTooltip } from '../translated/Tooltip';

export const WebAuthnButton = ({
    children = null,
    auto = false,
    host = 'stateless',
    ...rest
}) => {
    const { identity } = useClientContext() as any;
    const { authenticate } = useAuth(webAuthnStrategy as any, { auto, host });

    const color = clsx({
        success: identity?.webauthn,
        primary: !identity?.webauthn,
    }) as ButtonProps['color'];

    const text = !identity?.webauthn
        ? 'WebAuthn'
        : truncateMid(getWebAuthnId(identity.webauthn));

    return (
        <TranslatedTooltip
            title={identity?.webauthn ? 'Switch (activate)' : 'Login'}
        >
            <Button
                startIcon={<YubiKeyIcon />}
                color={color}
                variant="contained"
                onClick={() => authenticate()}
                {...rest}
            >
                {text}
            </Button>
        </TranslatedTooltip>
    );
};
