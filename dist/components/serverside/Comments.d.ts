import { FunctionComponent } from 'react';
import { ModelProps } from '../../lib/static/types';
/**
 * Comments model. Gather's props and renders a View with it.
 * @param param0
 * @returns
 */
export declare const CommentsModel: FunctionComponent<ModelProps>;
export declare const CommentsView: (props: any) => JSX.Element;
export declare const CommentLikes: (props: any) => JSX.Element;
export declare const CommentMarkdown: (props: any) => JSX.Element;
export declare const CommentView: (props: any) => JSX.Element;
export declare const CommentModel: ({ View, ...rest }: {
    [x: string]: any;
    View: any;
}) => JSX.Element;
export declare const Comments: ({ name, pagination, pageSize, compose, Component, }: {
    name?: string;
    pagination: any;
    pageSize?: number;
    compose?: boolean;
    Component?: (props: any) => JSX.Element;
}) => JSX.Element;
