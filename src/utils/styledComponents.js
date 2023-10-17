import {styled} from "@mui/material/styles";
import { Toolbar, Divider, Button, Typography} from "@mui/material";
import { Link } from "react-router-dom";





export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: '48px !important',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '& .MuiTypography-root': {
        fontFamily: 'Cormorant',
    },
}));

export const StyledVerticalDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    marginLeft: '10px',
    marginRight: '10px',
    height: '50px',    // change as needed
    width: '2px',
}));

export const StyledHorizontalDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.warning.main,
    marginTop: '5px',
    marginBottom: '5px',
    height: '2px',
    width: '90%',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    fontFamily: 'Cormorant',
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Cormorant',
    textAlign: 'left',
    [theme.breakpoints.down("md")]: {
        textAlign: 'center',
    },
}));

export const StyledLink= styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
    '&:hover': {
        textDecoration: 'none',
        color: theme.palette.error.main,
    },
}));