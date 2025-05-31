import { alpha, type PaletteOptions } from "@mui/material";
import { brand, error, gray, info, success, warning } from "./Colors";


export const getPalette = (mode: 'light' | 'dark'): PaletteOptions => ({
    mode,
    primary: {
        light: brand[200],
        main: brand[500],
        dark: brand[700],
        contrastText: brand[50],
        ...(mode === 'dark' && {
            contrastText: brand[50],
            light: brand[300],
            main: brand[500],
            dark: brand[700],
        }),
    },
    // secondary: {
    //     main: '#9c27b0',
    // },
    info: {
        light: info[200],
        main: info[500],
        dark: info[600],
        contrastText: info[50],
        ...(mode === 'dark' && {
            contrastText: info[300],
            light: info[500],
            main: info[700],
            dark: info[900],
        }),
    },
    success: {
        light: success[300],
        main: success[500],
        dark: success[900],
        ...(mode === 'dark' && {
            light: success[400],
            main: success[500],
            dark: success[700],
        }),
    },
    warning: {
        light: warning[300],
        main: warning[500],
        dark: warning[800],
        ...(mode === 'dark' && {
            light: warning[400],
            main: warning[500],
            dark: warning[700],
        }),
    },
    error: {
        light: error[300],
        main: error[500],
        dark: error[800],
        ...(mode === 'dark' && {
            light: error[400],
            main: error[500],
            dark: error[700],
        }),
    },
    grey: {
        ...gray
    },
    divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
    background: {
        default: '#f3f1f6',
        paper: '#f5f6fa',
    },
    text: {
        primary: gray[800],
        secondary: gray[600],
        ...(mode === 'dark' && {
            primary: brand[50],
            secondary: gray[400],
        }),
    },
    action: {
        hover: alpha(gray[400], 0.2),
        selected: `${alpha(gray[400], 0.3)}`,
        ...(mode === 'dark' && {
            hover: alpha(gray[600], 0.2),
            selected: alpha(gray[600], 0.3),
        }),
    },

});