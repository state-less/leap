import { ListItemProps, ListItemTextProps } from '@mui/material';
import { FunctionComponent } from 'react';

export type Description = {
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

export type ListItemDescription = Description & {
    path: string;
};

export type RouteDescription = Description & {
    path: string;
};

export type RenderableDescription = Description & {
    Component?: FunctionComponent;
};

export type PageDescription = RouteDescription | RenderableDescription;
