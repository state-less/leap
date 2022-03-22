import { FunctionComponent } from 'react';
export declare type ModelProps = {
    View: FunctionComponent;
};
export declare type PollProps = ServerComponentProps & {};
export declare type ServerProps = {
    loading: boolean;
    error?: Error;
};
export declare type PollViewProps = ServerProps & {
    values: number[];
    votes: number[];
    vote: (n: number) => void;
    voted: number;
    error: Error;
};
export declare type PollItemProps = {
    votes: number[];
    option: number;
    prc: number;
    index: number;
    vote: (n: number) => void;
    voted: number;
    error: Error;
    animated?: boolean;
};
export declare type PropsWithName = {
    /**
     * The serverside name of the component
     */
    name?: string;
};
export declare type PropsWithComponent = {
    /** The component that  renders the server side props */
    Component?: FunctionComponent<PollViewProps>;
};
export declare type PropsWithHost = {
    /** The component that  renders the server side props */
    host?: string;
};
export declare type ServerComponentProps = PropsWithName & PropsWithComponent & PropsWithHost;
