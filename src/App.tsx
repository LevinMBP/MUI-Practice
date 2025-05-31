import { CssBaseline, ThemeProvider } from '@mui/material'
import SalesFormProvider from './Sales/components/SalesFormProvider'
import theme from './Themes'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SalesFormProvider />
        </ThemeProvider>
        // <SalesFormProvider />
    )
}

export default App
