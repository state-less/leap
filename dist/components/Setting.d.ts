import { ChangeEventHandler, FunctionComponent } from 'react';
export declare enum SettingsType {
    color = "color",
    boolean = "boolean"
}
export declare const useSetting: (key: string, defaultValue: any) => any;
export declare const BooleanSetting: FunctionComponent<SettingProps>;
export declare const ColorSetting: FunctionComponent<SettingProps>;
export declare type SettingProps = {
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
export declare const SettingListItem: FunctionComponent<SettingProps>;
