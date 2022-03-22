import { FunctionComponent } from 'react';

export type ModelProps = {
    View: FunctionComponent;
};

export type PollProps = ServerComponentProps & {};

export type ServerProps = {
    loading: boolean;
    error?: Error;
};

export type PollViewProps = ServerProps & {
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
    Component?: FunctionComponent<PollViewProps>;
};

export type PropsWithHost = {
    /** The component that  renders the server side props */
    host?: string;
};
export type ServerComponentProps = PropsWithName &
    PropsWithComponent &
    PropsWithHost;
