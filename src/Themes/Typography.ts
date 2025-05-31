import { createTheme, type TypographyVariantsOptions } from "@mui/material"


const defaultTypography = createTheme().typography;

export const customTypography: TypographyVariantsOptions = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
        fontSize: defaultTypography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5
    },
    h2: {
        fontSize: defaultTypography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: defaultTypography.pxToRem(30),
        fontWeight: 600,
        lineHeight: 1.2,
    },
    h4: {
        fontSize: defaultTypography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
    },
    h5: {
        fontSize: defaultTypography.pxToRem(20),
        fontWeight: 600,
    },
    h6: {
        fontSize: defaultTypography.pxToRem(18),
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: defaultTypography.pxToRem(18),
    },
    subtitle2: {
        fontSize: defaultTypography.pxToRem(14),
        fontWeight: 500,
    },
    body1: {
        fontSize: defaultTypography.pxToRem(14),
    },
    body2: {
        fontSize: defaultTypography.pxToRem(14),
        fontWeight: 400,
    },
    caption: {
        fontSize: defaultTypography.pxToRem(12),
        fontWeight: 400,
    },
}