import { createTheme } from '@mui/material/styles';
import { customTypography } from './Typography'
import { getPalette } from './ColorScheme.ts';

const mode: 'light' | 'dark' = 'light'; // You can make this dynamic later

const theme = createTheme({
    palette: getPalette(mode),
    typography: customTypography,
    spacing: 8, // Default: 8px spacing unit
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
                containedPrimary: {
                    backgroundColor: '#1976d2',
                    '&:hover': {
                        backgroundColor: '#115293',
                    },
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 3,
            },
        },
    },
});

export default theme;
