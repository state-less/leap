import { FunctionComponent } from 'react';
/**
 * @param {string} title - The title of the tooltip. Will be they key of a translation.
 */
declare type ConfigurableTooltipProps = {
    KEY_SETTING?: string;
    title: string;
};
/**
 * A tooltip component that can be configured using a leap setting.
 * @param {ConfigurableTooltipProps} props
 * @returns
 */
export declare const ConfigurableTooltip: FunctionComponent<ConfigurableTooltipProps>;
export {};
