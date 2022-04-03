//@ts-nocheck
import {
    Alert,
    IconButton,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
    useTheme,
} from '@mui/material';
import { ServerComponent, useAction, useProps } from '@state-less/react-client';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import { useSpring, animated as spring, useTransition } from 'react-spring';
import { FunctionComponent } from 'react';
import {
    PollItemProps,
    PollProps,
    PollViewProps,
} from '../../lib/static/types';

export const PollModel = ({ View, ...rest }) => {
    const props = useProps();
    const vote = useAction('vote', 'onClick');

    return <View {...props} vote={vote} {...rest} />;
};

export const PollView: FunctionComponent<PollViewProps> = (props) => {
    const { values, votes, error, loading = !values } = props;
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
                                    key={`poll-item-${option}`}
                                    option={option}
                                    index={i}
                                    prc={prc}
                                    {...props}
                                />
                            </span>
                        );
                    })}
            </List>
            {loading && <LinearProgress />}
        </Box>
    );
};

export const PollItem: FunctionComponent<PollItemProps> = (props) => {
    const { votes, option, prc, voted, vote, index, animated = true } = props;

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
        enabled: animated,
    });

    return (
        <ListItem dense>
            <div
                style={{
                    width: 'calc(100% - 16px)',
                    position: 'absolute',
                    right: 8,
                    opacity: 0.3,
                    backgroundColor: theme.palette.primary.light,
                    marginLeft: -8,
                    height: 'calc(100% - 4px)',
                    // zIndex: -1,
                }}
            />

            <spring.div
                style={{
                    ...style,
                    position: 'absolute',
                    backgroundColor: theme.palette.primary.main,
                    marginLeft: -8,
                    opacity: 0.8,
                    height: 'calc(100% - 4px)',
                    // zIndex: -1,
                }}
            />
            <ListItemIcon>
                <IconButton
                    disabled={vote.disabled}
                    onClick={() => vote(index)}
                >
                    {buttons((props, item) => {
                        return (
                            <spring.span style={{ ...props, height: 24 }}>
                                {item ? <Favorite /> : <FavoriteBorderIcon />}
                            </spring.span>
                        );
                    })}
                </IconButton>
            </ListItemIcon>
            <ListItemText
                sx={{ zIndex: 0 }}
                primary={option}
                secondary={(votes || [])[index]}
            />
        </ListItem>
    );
};

/**
 * A component that let's users vote on a set of options.
 * @param name - The name of the Poll component as defined on the server.
 * @param Component - The component that renders the poll.
 */
export const Poll: FunctionComponent<PollProps> = ({
    name = 'poll',
    host = null,
    Component = PollView,
    ...props
}) => {
    return (
        <ServerComponent name={name} host={host}>
            <PollModel View={Component} {...props} />
        </ServerComponent>
    );
};
