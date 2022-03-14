/* eslint-disable no-nested-ternary */
import { Button, IconButton, Tooltip } from '@mui/material';
import { ServerComponent, useAction, useProps } from '@state-less/react-client';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

/**
 * The model for counter components. Injects a value prop and increase / decrease actions.
 * @param param0
 * @returns
 */
export const CounterModel = ({ View, ...rest }) => {
    const props = useProps();
    const increase = useAction('increase', 'onClick');
    const decrease = useAction('decrease', 'onClick');

    return (
        <View {...props} {...rest} increase={increase} decrease={decrease} />
    );
};

/** Renders a Heart icon that's filled when its value is > 0 */
export const LikesView = (props) => {
    const {
        children,
        value,
        voted,
        increase,
        icon = false,
        Icon = FavoriteBorderIcon,
        VotedIcon = FavoriteIcon,
        error,
        ...rest
    } = props;

    if (!icon)
        return (
            <Tooltip title={error ? error.message : value}>
                <Button
                    disabled={increase.disabled}
                    onClick={() => increase()}
                    startIcon={voted ? <VotedIcon /> : <Icon />}
                    color={error ? 'error' : voted ? 'secondary' : 'inherit'}
                    {...rest}
                >
                    {children || value}
                </Button>
            </Tooltip>
        );
    return (
        <Tooltip title={value}>
            <IconButton
                disabled={increase.disabled}
                onClick={() => increase()}
                color={voted ? 'primary' : 'default'}
            >
                {voted ? <VotedIcon /> : <Icon />}
            </IconButton>
        </Tooltip>
    );
};

/**
 * Renders a Star Icon that's filled when its value is > 0
 */
export const StarsView = (props) => {
    return <LikesView {...props} Icon={StarBorderIcon} VotedIcon={StarIcon} />;
};

/**
 * Renders a simple Up / Down vote button as view for the counter.
 */
export const Counter = ({
    name = 'counter',
    Component = StarsView,
    ...props
}) => {
    return (
        <ServerComponent name={name}>
            <CounterModel View={Component} {...props} />
        </ServerComponent>
    );
};
