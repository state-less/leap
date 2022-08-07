declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxs: true;
        xs: true; // removes the `xs` breakpoint
        sm: true;
        md: true;
        lg: true;
        xl: true;
    }
}

export {};
