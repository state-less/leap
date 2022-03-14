import { Typography, IconButton, Tooltip, colors } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { DUR_ANIM } from '../lib/static/const';
import { MUIThemeColors } from '../lib/static/types/MUI';
import { noop } from '../lib/util';
import { DownIcon, UpIcon } from './Icons';

export const Votes = (props) => {
    const { value, voted, increase, decrease, onError } = props;
    const n = useRef(0);

    const [err, setErr] = useState(null);

    useEffect(() => {
        n.current = 0;
    }, [voted]);

    const style = useSpring({
        to: {
            transform: 'translateY(0px)',
        },
        from: {
            transform: 'translateY(-8px)',
        },
        config: { duration: DUR_ANIM },
        immediate: voted !== 1,
        reset: true,
        loop: () => false,
    });

    const style2 = useSpring({
        to: {
            transform: 'translateY(0px)',
        },
        from: {
            transform: 'translateY(8px)',
        },
        config: { duration: DUR_ANIM },

        immediate: voted !== -1,
        reset: true,
        loop: () => false,
    });
    useEffect(noop, [voted]);
    const tryCall = (fn) => async () => {
        try {
            await fn();
        } catch (e) {
            setErr(e);
            if (typeof onError === 'function') onError(e);
        }
    };
    return (
        <Tooltip title={err ? err.message : ''}>
            <span className="flex col">
                <animated.span style={style}>
                    <IconButton
                        disabled={increase.disabled}
                        color={
                            voted > 0
                                ? MUIThemeColors.primary
                                : MUIThemeColors.default
                        }
                        onClick={tryCall(increase)}
                    >
                        <UpIcon />
                    </IconButton>
                </animated.span>
                <Typography color="primary">{value}</Typography>
                <animated.span style={style2}>
                    <IconButton
                        disabled={increase.disabled}
                        color={
                            voted < 0
                                ? MUIThemeColors.primary
                                : MUIThemeColors.default
                        }
                        onClick={tryCall(decrease)}
                    >
                        <DownIcon />
                    </IconButton>
                </animated.span>
            </span>
        </Tooltip>
    );
};
