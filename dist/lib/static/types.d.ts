import { FunctionComponent } from 'react';
export declare type PollProps = ServerComponentProps & {};
export declare type PollViewProps = {
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
};
export declare type PropsWithName = {
    /**
     * The serverside name of the component
     */
    name?: string;
};
export declare type PropsWithComponent = {
    /** The component that  renders the server side props */
    Component: FunctionComponent<PollViewProps>;
};
export declare type ServerComponentProps = PropsWithName & PropsWithComponent;
