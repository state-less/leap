import { ListItemProps, ListItemTextProps } from '@mui/material';
import { FunctionComponent } from 'react';
export declare type Description = {
    title: string;
    type?: string;
    labels?: string[];
    keywords?: string[];
    isAction?: boolean;
    children?: PageDescription[];
    data?: Record<string, any>;
    ListItemProps?: ListItemProps;
    ListItemTextProps?: ListItemTextProps;
    action?: {
        type: string;
        [index: string]: any;
    };
};
export declare type ListItemDescription = Description & {
    path: string;
};
export declare type RouteDescription = Description & {
    path: string;
};
export declare type RenderableDescription = Description & {
    Component?: FunctionComponent;
};
export declare type PageDescription = RouteDescription | RenderableDescription;
