import React, { ReactElement } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { MainTheme } from '.';

interface Props{
  children:ReactElement | ReactElement[]
}
export  const AppTheme = ({children}:Props) => {
  return (
     <ThemeProvider theme={MainTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
  )
}
