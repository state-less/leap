import { ButtonProps } from '@mui/material';
import { FunctionComponent } from 'react';
export declare type ChallengeResponse = {
    challenge: unknown;
    response: unknown;
    strategy: string;
    success: boolean;
};
export declare type StrategyInstance = {
    authenticate: (challenge: unknown, token: Record<string, any>) => ChallengeResponse;
};
export declare type Strategy = {
    (): StrategyInstance;
};
export declare const googleStrategy: Strategy;
export declare const useGoogle: () => {
    authenticate: () => void;
};
declare type GoogleButtonProps = ButtonProps & {
    clientId?: string;
    auto?: boolean;
    host?: string;
    children?: never;
};
export declare const GoogleButton: FunctionComponent<GoogleButtonProps>;
export {};
