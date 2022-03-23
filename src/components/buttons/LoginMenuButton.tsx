import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useClientContext } from '@state-less/react-client';
import { IdentityChip } from '../IdentityChip';
import { MetaMaskButton } from '../metamask/Button';
import { FingerprintButton } from './FingerPrintButton';
import { GoogleButton } from './GoogleButton';
import { LogoutButton } from './LogoutButton';
import { WebAuthnButton } from './WebAuthnButton';

export const LoginMenuButton = (props) => {
    const { identity } = useClientContext();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Menu
                open={open}
                className="flex column"
                anchorEl={anchorEl}
                onClick={handleClose}
            >
                <MenuItem>
                    <FingerprintButton fullWidth />
                </MenuItem>
                <MenuItem>
                    <GoogleButton fullWidth />
                </MenuItem>
                <MenuItem>
                    <MetaMaskButton fullWidth />
                </MenuItem>
                <MenuItem>
                    <WebAuthnButton fullWidth />
                </MenuItem>
                <MenuItem>
                    <LogoutButton fullWidth />
                </MenuItem>
            </Menu>

            <Button
                color={identity?.address ? 'success' : 'inherit'}
                onClick={handleClick}
                {...props}
            >
                Login
            </Button>
        </>
    );
};

export const LoginOrIdenty = ({ collapse, showCompound }) => {
    const { identity } = useClientContext();

    if (identity?.address) {
        return <IdentityChip collapse={collapse} showCompound={showCompound} />;
    }
    return <LoginMenuButton />;
};
