/// <reference types="react" />
export declare const renderImage: (src: any) => JSX.Element;
export declare const FeedView: (props: any) => JSX.Element;
export declare const FeedModel: (props: any) => JSX.Element;
export declare const Feed: ({ name, Component, ...props }: {
    [x: string]: any;
    name?: string;
    Component?: (props: any) => JSX.Element;
}) => JSX.Element;
