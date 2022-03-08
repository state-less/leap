import { FunctionComponent } from 'react';
import { PollItemProps, PollProps, PollViewProps } from '../../lib/static/types';
export declare const PollModel: ({ View, ...rest }: {
    [x: string]: any;
    View: any;
}) => JSX.Element;
export declare const PollView: FunctionComponent<PollViewProps>;
export declare const PollItem: FunctionComponent<PollItemProps>;
export declare const Poll: FunctionComponent<PollProps>;
