import { useAuth, useClientContext } from '@state-less/react-client';
import { noop } from '../../lib/util';
import { ConfigurableTooltip } from '../Tooltip';
import { TranslatedButton } from '../translated/Button';

const noopStrat = () => ({ logout: noop });

export const LogoutButton = ({ host = null, auto = false, ...rest }) => {
    const { identity } = useClientContext();
    const { logout } = useAuth(noopStrat as any, {
        host,
        auto,
    });

    return (
        <ConfigurableTooltip title="TOOLTIP_NOT_LOGGED_IN">
            <TranslatedButton
                disabled={!identity}
                variant="contained"
                color="secondary"
                onClick={logout}
                {...rest}
            >
                LOGOUT
            </TranslatedButton>
        </ConfigurableTooltip>
    );
};
