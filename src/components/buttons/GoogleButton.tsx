/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import { Avatar, ButtonProps } from '@mui/material';
import {
    useAuth,
    useClientContext,
    assertGetSingleHost,
} from '@state-less/react-client';
import { FunctionComponent, useState } from 'react';
import GoogleLogin, { useGoogleLogin } from 'react-google-login';
import { GOOGLE_CLIENT } from '../../config';
import { noop } from '../../lib/util';
import { ButtonStatusColor } from '../../types/button';
import { GoogleIcon } from '../Icons';
import { TranslatedButton } from '../translated/Button';
import { TranslatedTooltip } from '../translated/Tooltip';
import { FullWidthSpan } from '../Util';

export type ChallengeResponse = {
    challenge: unknown;
    response: unknown;
    strategy: string;
    success: boolean;
};

export type StrategyInstance = {
    authenticate: (
        challenge: unknown,
        token: Record<string, any>
    ) => ChallengeResponse;
};

export type Strategy = {
    (): StrategyInstance;
};

export const googleStrategy: Strategy = () => {
    return {
        authenticate: (challenge, token) => {
            return {
                challenge,
                response: token.tokenId,
                strategy: 'google',
                success: true,
            };
        },
        logout: noop,
        id: 'google',
        strategy: 'google',
    };
};

export const useGoogle = () => {
    const { authenticate } = useAuth(googleStrategy as any);

    const { signIn } = useGoogleLogin({
        clientId: GOOGLE_CLIENT || '',
        onSuccess: authenticate,
    });

    return { authenticate: signIn };
};
type GoogleButtonProps = ButtonProps & {
    clientId?: string;
    auto?: boolean;
    host?: string;
    children?: never;
};
export const GoogleButton: FunctionComponent<GoogleButtonProps> = ({
    clientId = GOOGLE_CLIENT || '',
    auto = false,
    host = null,
    ...rest
}) => {
    const rcc = useClientContext() as any;
    const { identity, hosts } = rcc;

    if (host === null) host = assertGetSingleHost(hosts, host);

    const [error, setError] = useState(null);
    const { authenticate } = useAuth(googleStrategy as any, { auto, host });

    const icon = identity?.google ? (
        <Avatar
            alt="react server profile-picture"
            sx={{ width: 24, height: 24 }}
            src={identity?.google?.picture}
        />
    ) : (
        <GoogleIcon />
    );

    const tooltip = !identity?.google
        ? 'TOOLTIP_LOGIN_GOOGLE'
        : 'TOOLTIP_LOGGEDIN_GOOGLE';

    return (
        <TranslatedTooltip title={tooltip}>
            <FullWidthSpan>
                <GoogleLogin
                    clientId={clientId}
                    render={(renderProps) => (
                        <TranslatedButton
                            color={
                                error
                                    ? ButtonStatusColor.ERROR
                                    : identity?.google
                                    ? ButtonStatusColor.AUTHENTICATED
                                    : ButtonStatusColor.OK
                            }
                            variant="contained"
                            startIcon={icon}
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            {...rest}
                            label={
                                identity?.google
                                    ? identity?.google?.given_name
                                    : 'LABEL_GOOGLE'
                            }
                        />
                    )}
                    onSuccess={authenticate}
                    onFailure={(e) => setError(e.message)}
                    cookiePolicy="single_host_origin"
                    loginHint="asd"
                />
            </FullWidthSpan>
        </TranslatedTooltip>
    );
};
