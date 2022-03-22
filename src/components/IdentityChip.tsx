import {
    Avatar,
    Box,
    CardContent,
    CardHeader,
    Chip,
    ChipProps,
    Popover,
    Tooltip,
} from '@mui/material';
import clsx from 'clsx';
import { useClientContext } from '@state-less/react-client';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useSpring, animated } from 'react-spring';
import {
    ClockIcon,
    ErrorIcon,
    FingerprintIcon,
    GoogleIcon,
    MetaMaskIcon,
    YubiKeyIcon,
} from './Icons';
import { Date } from './Date';
import { getWebAuthnId, truncateMid } from '../lib/util';

const MARGIN_IDENTITY_CHIP = 0.5;

export const IdentityPopover = ({ anchorEl, children, onClose }) => {
    const { identity } = useClientContext();
    const open = Boolean(anchorEl);
    const text = (
        <Chip
            avatar={
                <Avatar>
                    <ClockIcon />
                </Avatar>
            }
            label={
                <Date variant="h6" fromNow>
                    {(identity?.exp || 0) * 1000}
                </Date>
            }
        />
    );
    return (
        <Popover
            id="asd"
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        alt="react server profile-picture"
                        src={identity?.address?.picture}
                    />
                }
                title={identity?.address?.name}
                subheader={
                    <div>
                        {identity?.address?.email}
                        <div>{identity.compound.id}</div>
                    </div>
                }
            />
            <CardContent>
                <Tooltip title="Expires">{text}</Tooltip>
                <Box sx={{ marginTop: 1 }}>{children}</Box>
            </CardContent>
        </Popover>
    );
};

const IconAvatar = ({ Icon, ...rest }) => (
    <Avatar {...rest} sx={{ width: 24, height: 24, ...rest.sx }}>
        <Icon />
    </Avatar>
);
const GoogleAvatar = (props) => <IconAvatar Icon={GoogleIcon} {...props} />;
const WebAuthnAvatar = (props) => <IconAvatar Icon={YubiKeyIcon} {...props} />;
const Web3Avatar = (props) => <IconAvatar Icon={MetaMaskIcon} {...props} />;
const FingerprintAvatar = (props) => (
    <IconAvatar Icon={FingerprintIcon} {...props} />
);

const AvatarOrChip = (props) => {
    const { collapse, avatar, ...rest } = props;

    return !collapse ? <Chip avatar={avatar} {...rest} /> : avatar;
};

export const GoogleIdentityChip = ({ collapse }) => {
    const strat = 'google';
    const { identity } = useClientContext();
    const active = identity?.address?.strat === strat;

    const title = collapse
        ? identity?.google?.name
        : `Google: ${
              identity?.compound?.identities?.google ? 'linked' : 'not linked'
          } | ${active ? 'active' : ' authenticated'}`;

    const color =
        clsx({
            success: active && identity?.compound?.identities?.google,
            info: !active && identity?.compound?.identities?.google,
            warning: active && identity?.compound?.identities?.google,
            primary: active && !identity?.compound?.identities?.google,
        }) || 'default';
    return (
        <Tooltip title={title}>
            <Box sx={{ margin: MARGIN_IDENTITY_CHIP }}>
                <AvatarOrChip
                    collapse={collapse}
                    avatar={
                        <GoogleAvatar
                            sx={{
                                bgcolor: active ? 'success.main' : 'info.main',
                            }}
                        />
                    }
                    color={color}
                    label={identity.google?.name}
                />
            </Box>
        </Tooltip>
    );
};

export const FingerPrintIdentityChip = ({ collapse }) => {
    const strat = 'fingerprint';
    const { identity } = useClientContext();
    const active = identity?.address?.strat === strat;

    const title = collapse
        ? truncateMid(identity.fingerprint.visitorId || '')
        : `Fingerprint: ${
              identity?.compound?.identities?.fingerprint
                  ? 'linked'
                  : 'not linked'
          } | ${active ? 'active' : ' authenticated'}`;

    return (
        <Tooltip title={title}>
            <Box sx={{ margin: MARGIN_IDENTITY_CHIP }}>
                <AvatarOrChip
                    collapse={collapse}
                    color={active ? 'success' : 'default'}
                    avatar={
                        <FingerprintAvatar
                            sx={{
                                bgcolor: active ? 'success.main' : 'info.main',
                            }}
                        />
                    }
                    label={truncateMid(identity.fingerprint?.visitorId)}
                />
            </Box>
        </Tooltip>
    );
};

export const WebAuthnIdentityChip = ({ collapse }) => {
    const strat = 'webauthn';
    const { identity } = useClientContext();
    const active = identity?.address?.strat === strat;
    const label = truncateMid(getWebAuthnId(identity.webauthn));
    const title = collapse
        ? label
        : `WebAuthn: ${
              identity?.compound?.identities?.webauthn ? 'linked' : 'not linked'
          } | ${active ? 'active' : ' authenticated'}`;
    const required = identity?.factors?.includes(strat);
    const color =
        clsx({
            success:
                !required && active && identity?.compound?.identities?.webauthn,
            info:
                !required &&
                !active &&
                identity?.compound?.identities?.webauthn,
            warning:
                !required && active && identity?.compound?.identities?.webauthn,
            primary:
                !required &&
                active &&
                !identity?.compound?.identities?.webauthn,
            error: required,
        }) || 'default';
    return (
        <Tooltip title={title}>
            <Box sx={{ margin: MARGIN_IDENTITY_CHIP }}>
                <AvatarOrChip
                    collapse={collapse}
                    color={color}
                    avatar={
                        <WebAuthnAvatar
                            sx={{
                                bgcolor: active ? 'success.main' : 'info.main',
                            }}
                        />
                    }
                    label={label}
                />
            </Box>
        </Tooltip>
    );
};

export const Web3IdentityChip = ({ collapse }) => {
    const strat = 'web3';
    const { identity } = useClientContext();
    const active = identity?.address?.strat === strat;
    const web3Identity = identity?.compound?.identities?.web3;
    const label = truncateMid(identity.web3);
    const title = collapse
        ? label
        : `Web3: ${web3Identity ? 'linked' : 'not linked'} | ${
              active ? 'active' : ' authenticated'
          }`;
    const required = identity?.factors?.includes(strat);
    const color =
        (clsx({
            success: !required && !active && web3Identity,
            warning: !required && active && web3Identity,
            primary: !required && active && !web3Identity,
            error: required,
        }) as ChipProps['color']) || undefined;

    return (
        <Tooltip title={title}>
            <Box sx={{ margin: MARGIN_IDENTITY_CHIP }}>
                <AvatarOrChip
                    collapse={collapse}
                    color={color}
                    avatar={
                        <Web3Avatar
                            sx={{
                                bgcolor: active
                                    ? 'success.main'
                                    : 'warning.main',
                            }}
                        />
                    }
                    label={label}
                />
            </Box>
        </Tooltip>
    );
};
const stratIdentityChips = {
    google: GoogleIdentityChip,
    fingerprint: FingerPrintIdentityChip,
    webauthn: WebAuthnIdentityChip,
    web3: Web3IdentityChip,
};
export const IdentityChip = (props) => {
    const { collapse: _collapse = false, showCompound = false } = props;
    const { identity } = useClientContext();
    const [anchor, setAnchor] = useState(null);
    const theme = useTheme();
    const style = useSpring({
        from: {
            transform: 'scale(0)',
        },
        to: {
            transform: 'scale(1)',
        },
    });
    const collapse = anchor ? false : _collapse;

    if (!identity) return null;
    const chips = (
        <span className="flex">
            {['fingerprint', 'google', 'webauthn', 'web3']
                .map((strat) => {
                    const active = identity?.address?.strat === strat;
                    if (!identity || !identity[strat]) return null;
                    if (stratIdentityChips[strat]) {
                        const IDChip = stratIdentityChips[strat];
                        return (
                            <animated.span style={style}>
                                <IDChip collapse={collapse} />
                            </animated.span>
                        );
                    }
                    return null;
                })
                .filter(Boolean)}
            {(identity?.factors || []).map((factor) => {
                return (
                    <Tooltip title="Missing 2FA step.">
                        <Box sx={{ margin: MARGIN_IDENTITY_CHIP }}>
                            <Chip
                                color="error"
                                avatar={
                                    <Avatar>
                                        <ErrorIcon />
                                    </Avatar>
                                }
                                label={factor}
                            />
                        </Box>
                    </Tooltip>
                );
            })}
        </span>
    );

    const compound = (
        <>
            <Tooltip title="Registered Account">
                <Box sx={{ margin: MARGIN_IDENTITY_CHIP }}>
                    <AvatarOrChip
                        collapse={_collapse}
                        onClick={(e) => setAnchor(e.target)}
                        avatar={
                            <Avatar
                                alt="react server profile-picture"
                                onClick={(e) => setAnchor(e.target)}
                                sx={{
                                    width: 24,
                                    height: 24,
                                    cursor: 'pointer',
                                }}
                                src={identity?.compound?.picture}
                            />
                        }
                        label={identity?.compound?.name}
                    />
                </Box>
            </Tooltip>
            <IdentityPopover anchorEl={anchor} onClose={() => setAnchor(null)}>
                {chips}
            </IdentityPopover>
        </>
    );
    if (identity?.compound && showCompound) return compound;

    if (!showCompound && identity?.compound)
        return (
            <span className="flex">
                {compound}
                {!anchor && chips}
            </span>
        );
    return chips;
};
