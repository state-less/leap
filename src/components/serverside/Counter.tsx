import { Button, IconButton } from '@mui/material';
import { ServerComponent, useAction, useProps } from '@state-less/react-client';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { Tooltip } from '@mui/material';

export const CounterModel = ({ View, ...rest }) => {
    const props = useProps();
    const increase = useAction('increase', 'onClick');
    const decrease = useAction('decrease', 'onClick');

    return (
        <View {...props} {...rest} increase={increase} decrease={decrease} />
    );
};

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
                color={voted ? 'primary' : ''}
            >
                {voted ? <VotedIcon /> : <Icon />}
            </IconButton>
        </Tooltip>
    );
};

export const StarsView = (props) => {
    return <LikesView {...props} Icon={StarBorderIcon} VotedIcon={StarIcon} />;
};

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
