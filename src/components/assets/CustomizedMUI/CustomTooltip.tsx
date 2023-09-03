'use client';

import { ThemeProvider, Tooltip, createTheme } from "@mui/material";
import { ReactElement } from "react";


interface IProps {
    children: ReactElement,
    title: string
}

const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#2a2828',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 'bold',
            color: '#FAFAFA'
          },
        },
      },
    },
})

export default function CustomTooltip({ children, title }:IProps){
    return(
        <ThemeProvider theme={theme}>
            <Tooltip title={title}>
                {children}
            </Tooltip>
        </ThemeProvider>
    )
}