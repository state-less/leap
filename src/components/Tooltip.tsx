import { FunctionComponent } from 'react';
import { useSetting } from './Setting';
import { TranslatedTooltip } from './translated/Tooltip';

const DEF_KEY_SETTINGS = 'ui.tooltip.show';

/**
 * @param {string} title - The title of the tooltip. Will be they key of a translation.
 */
type ConfigurableTooltipProps = {
    KEY_SETTING?: string;
    title: string;
};

/**
 * A tooltip component that can be configured using a leap setting.
 * @param {ConfigurableTooltipProps} props
 * @returns
 */
export const ConfigurableTooltip: FunctionComponent<
    ConfigurableTooltipProps
> = (props) => {
    const { KEY_SETTING = DEF_KEY_SETTINGS, title, ...rest } = props;
    const [show] = useSetting(KEY_SETTING, false);
    return <TranslatedTooltip {...rest} title={show ? title : ''} />;
};
