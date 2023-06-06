import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();
export const useStyles = makeStyles(() => ({
    Heading: {
        fontWeight: "700 !important",
        letterSpacing: '.3rem !important',
        textDecoration: 'none !important',
    },
    Tabs: {
        color: 'black',
        display: 'block',
        margin: "15px 0 !important",
        color: "#FFFF !important",
        '&:hover': {
            color: '#555 !important', // Apply hover color
            background: "#FFFF !important",
            textDecoration: "underline !important",
        },
    },
    Login: {
        background: "#35bf2e !important",
        borderRadius: "10px !important",
        color: "#ffff !important",
        padding:"6px 20px",
        '&:hover': {
            color: '#555 !important', // Apply hover color
            background: "#FFFF !important",
            textDecoration: "underline !important",
        },
    },
    loginresp: {

        [theme.breakpoints.down('xs')]: {
            gap: "0 !important",
        },
    }
}));