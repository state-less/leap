import { AlertProps, IconButton } from '@mui/material';
import { Atom, atom } from 'jotai';
import { FunctionComponent } from 'react';
import { useLocalStorage } from '../../lib/hooks/jotai';
import { CloseIcon } from '../Icons';
import { TranslatedAlert } from '../translated/Alert';

const atoms: Record<string, Atom<boolean>> = {};

/**
 * Renders an alert with a dismiss button. State get's saved to localStorage.
 * @param props
 * @param props.name - A unique name for the alert.
 */
export const DismissableAlert: FunctionComponent<
    AlertProps & { name: string }
> = (props) => {
    const { name = 'dismissable-alert' } = props;
    const atm = atoms[name] || (atoms[name] = atom(false));
    const [hidden, setHidden] = useLocalStorage(
        `alert.hidden.${name}`,
        atm,
        false
    );
    return hidden ? null : (
        <TranslatedAlert
            {...props}
            action={
                <IconButton onClick={() => setHidden(true)}>
                    <CloseIcon />
                </IconButton>
            }
        />
    );
};
