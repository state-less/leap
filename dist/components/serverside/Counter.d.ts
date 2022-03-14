/// <reference types="react" />
/**
 * The model for counter components. Injects a value prop and increase / decrease actions.
 * @param param0
 * @returns
 */
export declare const CounterModel: ({ View, ...rest }: {
    [x: string]: any;
    View: any;
}) => JSX.Element;
/** Renders a Heart icon that's filled when its value is > 0 */
export declare const LikesView: (props: any) => JSX.Element;
/**
 * Renders a Star Icon that's filled when its value is > 0
 */
export declare const StarsView: (props: any) => JSX.Element;
/**
 * Renders a simple Up / Down vote button as view for the counter.
 */
export declare const Counter: ({ name, Component, ...props }: {
    [x: string]: any;
    name?: string;
    Component?: (props: any) => JSX.Element;
}) => JSX.Element;
