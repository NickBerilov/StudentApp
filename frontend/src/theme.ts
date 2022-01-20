import { createTheme } from '@mui/material';
import { deepOrange, grey, lightBlue } from '@mui/material/colors';


export default createTheme({
    palette: {
        primary: deepOrange,
        secondary: lightBlue,
        background: {
            default: grey[200],
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                size: 'small',
                fullWidth: true,
            },
        },
    },
});