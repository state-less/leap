import { FunctionComponent } from 'react';
import { PollItemProps, PollProps, PollViewProps } from '../../lib/static/types';
export declare const PollModel: ({ View, ...rest }: {
    [x: string]: any;
    View: any;
}) => JSX.Element;
export declare const PollView: FunctionComponent<PollViewProps>;
export declare const PollItem: FunctionComponent<PollItemProps>;
/**
 * A component that let's users vote on a set of options.
 * @param name - The name of the Poll component as defined on the server.
 * @param Component - The component that renders the poll.
 */
export declare const Poll: FunctionComponent<PollProps>;
