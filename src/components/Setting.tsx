/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-shadow */

import {
    ListItem,
    ListItemIcon,
    Switch,
    Tooltip,
    useTheme,
} from '@mui/material';
import { capitalCase } from 'change-case';
import clsx from 'clsx';
import { ColorPicker } from 'material-ui-color';
import {
    ChangeEventHandler,
    EventHandler,
    FunctionComponent,
    SyntheticEvent,
    useEffect,
    useState,
} from 'react';
import { atom } from 'jotai';
import { useLocalStorage } from '../lib/hooks/jotai';
import atoms from '../lib/static/atoms';
import { SettingsIcon, PaletteIcon } from './Icons';
import { TranslatedListItemText } from './translated/ListItemText';

export enum SettingsType {
    color = 'color',
    boolean = 'boolean',
}

type IconMap = {
    [key in SettingsType]: FunctionComponent<any>;
};

const iconMap: IconMap = {
    boolean: SettingsIcon,
    color: PaletteIcon,
};

const debounce = (fn: EventHandler<SyntheticEvent>, ms = 250) => {
    let to: NodeJS.Timeout;

    return (...args: any[]) => {
        clearTimeout(to);
        to = setTimeout(fn, ms, ...args);
    };
};

export const useSetting = (key: string, defaultValue: any) => {
    if (!atoms[key] && process.env.NODE_ENV === 'development')
        console.warn(`No atom found for key ${key}. State will not be shared.`);

    const atm = atoms[key] || atom(defaultValue);
    const state = useLocalStorage(key, defaultValue, atm);
    return state;
};

export const BooleanSetting: FunctionComponent<SettingProps> = (props) => {
    const { value, onChange = noop, disabled } = props;

    return (
        <Switch
            color="secondary"
            checked={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const ColorSetting: FunctionComponent<SettingProps> = (props) => {
    const { value, onChange = noop } = props;
    const debounced = debounce(onChange, 500);
    const [tmp, setTmp] = useState(value);
    const theme = useTheme();
    useEffect(() => {
        setTmp(value);
    }, [value]);

    return (
        <ColorPicker
            disableTextfield
            disablePlainColor
            disableAlpha
            hideTextfield
            // defaultValue="#000"
            value={tmp}
            onChange={(v) => {
                debounced(v);
                setTmp(v);
            }}
            palette={{
                primary: theme.palette.primary.main,
                secondary: theme.palette.secondary.main,
                info: theme.palette.info.main,
                success: theme.palette.success.main,
                warning: theme.palette.warning.main,
                error: theme.palette.error.main,
            }}
        />
    );
};

export type SettingProps = {
    type: SettingsType;
    name: string;
    label?: string;
    value?: any;
    option?: string;
    OptionIcon?: FunctionComponent<any>;
    tooltip?: string;
    controlTooltip?: string;
    inputOnly?: boolean;
    disabled?: boolean;
    Icon?: FunctionComponent<any>;
    onChange?: ChangeEventHandler;
};

export const SettingListItem: FunctionComponent<SettingProps> = (props) => {
    const {
        type,
        label,
        name,
        value,
        option,
        OptionIcon,
        controlTooltip,
        inputOnly,
        disabled,
        Icon = iconMap[type],
        tooltip = '',
        ...rest
    } = props;
    let { onChange } = props;
    const [stored, setSetting] = useSetting(name, value);

    const capitalizedLabel = label || capitalCase(name);

    let input;

    if (!onChange)
        onChange = (val) => {
            setSetting(val);
        };

    if (type === 'boolean')
        input = (
            <BooleanSetting value={stored} {...props} onChange={onChange} />
        );
    if (type === 'color')
        input = <ColorSetting value={stored} {...props} onChange={onChange} />;

    if (controlTooltip)
        input = (
            <Tooltip title={controlTooltip}>
                <span>{input}</span>
            </Tooltip>
        );

    if (inputOnly && input) {
        return input;
    }

    return (
        <ListItem
            sx={{
                ':hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                },
            }}
        >
            {!option && (
                <>
                    <ListItemIcon>
                        <Icon />
                    </ListItemIcon>
                    <TranslatedListItemText primary={capitalizedLabel} />
                </>
            )}

            {OptionIcon && (
                <Tooltip title={tooltip || ''}>
                    <OptionIcon className={clsx({ disabled })} />
                </Tooltip>
            )}
            <ListItemIcon>{input}</ListItemIcon>
        </ListItem>
    );
};
