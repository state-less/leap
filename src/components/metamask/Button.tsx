// @ts-nocheck
import { useEffect, useState } from 'react';
import { Button, Tooltip } from '@mui/material';
import clsx from 'clsx';
import {
  useAuth,
  web3Strategy,
  useClientContext,
} from '@state-less/react-client';
import { ErrorOutlined, ErrorOutlineOutlined } from '@mui/icons-material';
import jwt from 'jsonwebtoken';
import { truncate } from '../../lib/util';
import { AccountBalanceWalletIcon, MetaMaskIcon, PowerIcon } from '../Icons';
import { FullWidthSpan } from '../Util';
import { ButtonStatusColor } from '../../types/button';

export const MetaMaskButton = ({
  children = null,
  host = 'stateless',
  ...rest
}) => {
  const rcc = useClientContext();
  const {
    open,
    verify,
    activateInjected,
    account,
    active,
    error,
    headers,
    identity,
  } = rcc;
  const [awaitVerify, setAwaitVerify] = useState(false);
  const token = headers?.Authorization?.split(' ')[1] || '';
  const decoded = jwt.decode(token);
  const { address } = decoded || {};

  const color = identity?.web3
    ? !open
      ? ButtonStatusColor.ERROR
      : ButtonStatusColor.OK
    : error
    ? ButtonStatusColor.ERROR
    : ButtonStatusColor.INFO;

  const serverState = identity?.web3 ? 'Authenticated' : 'Unauthenticated';
  const clientState = account ? 'Connected' : 'Not connected.';
  const tooltip =
    error ||
    (!open ? 'Service unavailable.' : `${serverState} / ${clientState}`);
  const icon = identity ? (
    !open ? (
      <ErrorOutlineOutlined />
    ) : !account ? (
      <PowerIcon />
    ) : (
      <AccountBalanceWalletIcon />
    )
  ) : (
    <ErrorOutlined />
  );

  const { authenticate, logout } = useAuth(web3Strategy, { host });

  const onClick = async () => {
    if (address && !account) {
      const res = await activateInjected();
    } else if (!account) {
      // await authenticate();
      const res = await activateInjected();
      setAwaitVerify(true);
    } else if (!open) {
      await verify(
        account,
        'Oh no! The backend service is unavailable. Anyway. You can still use the blockchain part of this application'
      );
    } else if (account && open) {
      await authenticate();
    } else if (account && address && open) {
      const res = await verify(account, 'Please sign this message to logout.');
      if (res) await logout();
    }
  };

  useEffect(() => {
    if (awaitVerify && account) {
      (async () => {
        await authenticate();
      })();
    }
  }, [awaitVerify]);

  if (error) {
    return (
      <Tooltip title={error.message}>
        <FullWidthSpan>
          <InstallMetaMaskButton
            title="Install"
            variant="contained"
            {...rest}
          />
        </FullWidthSpan>
      </Tooltip>
    );
  }
  const label = active ? truncate(account) : 'Metamask';

  return (
    <>
      <Tooltip title={tooltip}>
        <Button
          disabled={!open}
          variant="contained"
          onClick={onClick}
          color={color}
          {...rest}
          startIcon={<MetaMaskIcon />}
        >
          {label}
        </Button>
      </Tooltip>

      {/* <LinearProgress variant="indeterminate" style={{position: 'absolute'}}/> */}
    </>
  );
};

export const InstallMetaMaskButton = ({ title, ...rest }) => {
  return (
    <Button
      target="_blank"
      href="https://metamask.io/"
      startIcon={<MetaMaskIcon />}
      {...rest}
    >
      {title}
    </Button>
  );
};
