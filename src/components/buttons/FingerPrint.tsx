import { Button, ButtonProps, Tooltip } from '@mui/material';
import {
    fingerprintStrategy,
    useAuth,
    useClientContext,
} from '@state-less/react-client';
import clsx from 'clsx';
import { truncateMid } from '../../util';
import { FingerprintIcon } from '../Icons';

export const FingerprintButton = ({
    auto = false,
    host = 'stateless',
    ...rest
}) => {
    /** TODO: fix return type in react-client */
    const { identity } = useClientContext() as any;
    const { authenticate } = useAuth(fingerprintStrategy as any, {
        auto,
        host,
    });

    const color = clsx({
        success: identity?.fingerprint,
        primary: !identity?.fingerprint,
    }) as ButtonProps['color'];

    const text = !identity?.fingerprint
        ? 'Fingerprint'
        : truncateMid(identity?.fingerprint?.visitorId);

    return (
        <Tooltip title="Authenticated">
            <Button
                startIcon={<FingerprintIcon />}
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
