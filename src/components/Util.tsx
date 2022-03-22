import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import React, { forwardRef, FunctionComponent } from 'react';

export const FullWidthSpan: FunctionComponent = forwardRef<
    typeof Box,
    BoxProps
>((props, ref) => {
    return <Box ref={ref} sx={{ width: '100%' }} {...props} />;
});
