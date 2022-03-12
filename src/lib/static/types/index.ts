import { FunctionComponent } from 'react';

export type ModelProps = {
    View: FunctionComponent;
};
import { FunctionComponent } from 'react';

export type PollProps = ServerComponentProps & {};

export type PollViewProps = {
    values: number[];
    votes: number[];
    vote: (n: number) => void;
    voted: number;
    error: Error;
};

export type PollItemProps = {
    votes: number[];
    option: number;
    prc: number;
    index: number;
    vote: (n: number) => void;
    voted: number;
    error: Error;
    animated?: boolean;
};

export type PropsWithName = {
    /**
     * The serverside name of the component
     */
    name?: string;
};
export type PropsWithComponent = {
    /** The component that  renders the server side props */
    Component: FunctionComponent<PollViewProps>;
};

export type ServerComponentProps = PropsWithName & PropsWithComponent;