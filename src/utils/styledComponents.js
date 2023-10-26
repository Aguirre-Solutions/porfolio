import {styled} from "@mui/material/styles";
import { Toolbar, Divider, Button, Typography, AppBar, IconButton} from "@mui/material";
import { Link } from "react-router-dom";


export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.main,
    '&:hover': {
        color: theme.palette.additional.magenta,
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: '48px !important',
    '& .MuiTypography-root': {
        fontFamily: 'Cormorant',
    },
}));

export const StyledVerticalDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    marginLeft: '10px',
    marginRight: '10px',
    height: '150px',    
    width: '2px',
}));

export const StyledHorizontalDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    marginX: '5px',
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

export const StyledLink = styled(Link)(({ theme, isScrolled }) => ({
    cursor: 'pointer',
    textDecoration: 'none',
    color: isScrolled ? theme.palette.common.white : `${theme.palette.secondary.main} !important`,
    '&:hover': {
        textDecoration: 'none',
        color: theme.palette.additional.magenta,
    },
}));

