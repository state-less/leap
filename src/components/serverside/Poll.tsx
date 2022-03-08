import {
    Alert,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
} from '@mui/material';
import { ServerComponent, useAction, useProps } from '@state-less/react-client';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useTheme } from '@emotion/react';
import { Box } from '@mui/system';
import { useSpring, animated, useTransition } from 'react-spring';
import { FunctionComponent } from 'react';
import {
    PollItemProps,
    PollProps,
    PollViewProps,
} from '../../lib/static/types';

export const PollModel = ({ View, ...rest }) => {
    const props = useProps();
    const vote = useAction('vote', 'onClick', null);

    return <View {...props} vote={vote} {...rest} />;
};

export const PollView: FunctionComponent<PollViewProps> = (props) => {
    const { values, votes, error } = props;
    const sum = (votes || []).reduce((a, b) => a + ~~b, 0);

    return (
        <Box {...props}>
            {error && <Alert severity="error">{error.message}</Alert>}
            <List dense>
                {values &&
                    values.map((option, i) => {
                        const prc = (100 / sum) * (votes || [])[i];
                        return (
                            <span>
                                <PollItem
                                    key={`poll-item-${i}`}
                                    option={option}
                                    index={i}
                                    prc={prc}
                                    {...props}
                                />
                            </span>
                        );
                    })}
            </List>
        </Box>
    );
};

export const PollItem: FunctionComponent<PollItemProps> = (props) => {
    const { votes, option, prc, voted, vote, index } = props;

    const theme = useTheme() as Theme;
    const style = useSpring({
        from: { width: 'calc(0% - 16px)' },
        to: { width: `calc(${~~prc}% - 16px)` },
    });

    const buttons = useTransition(voted === index, {
        initial: { transform: 'scale(1)' },
        from: { transform: 'scale(2)' },
        enter: { transform: 'scale(1)' },
        immediate: index !== voted,
    });
    return (
        <ListItem dense>
            <ListItemIcon>
                <IconButton onClick={() => vote(index)}>
                    {buttons((props, item) => {
                        return (
                            <animated.span style={{ ...props, height: 24 }}>
                                {item ? <Favorite /> : <FavoriteBorderIcon />}
                            </animated.span>
                        );
                    })}
                </IconButton>
            </ListItemIcon>

            <div
                style={{
                    width: 'calc(100% - 16px)',
                    position: 'absolute',
                    right: 8,
                    opacity: 0.3,
                    backgroundColor: theme.palette.primary.light,
                    marginLeft: -8,
                    height: 'calc(100% - 4px)',
                    zIndex: -1,
                }}
            ></div>

            <animated.div
                style={{
                    ...style,
                    position: 'absolute',
                    backgroundColor: theme.palette.primary.main,
                    marginLeft: -8,
                    opacity: 0.8,
                    height: 'calc(100% - 4px)',
                    zIndex: -1,
                }}
            ></animated.div>

            <ListItemText primary={option} secondary={(votes || [])[index]} />
        </ListItem>
    );
};

export const Poll: FunctionComponent<PollProps> = ({
    name = 'poll',
    Component = PollView,
    ...props
}) => {
    return (
        <ServerComponent name={name}>
            <PollModel View={Component} {...props} />
        </ServerComponent>
    );
};
