import {styled} from "@mui/material/styles";

import { Toolbar, Divider, Button, Typography, AppBar, IconButton, Chip, Link} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


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
    width: '100%',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    fontFamily: 'Cormorant',
    fontWeight: 'bold',
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Cormorant',
    textAlign: 'left',
    [theme.breakpoints.down("lg")]: {
        textAlign: 'center',
    },
}));

export const StyledLegend = styled(Typography)(({ theme }) => ({
    fontFamily: 'Cormorant',
    lineHeight: '.5em',
    color: theme.palette.additional.magenta, 
    fontSize:'12px', 
    fontWeight:'900'
}));

export const StyledLink = styled(Link)(({ theme }) => ({
    cursor: 'pointer',
    display: 'block', // Make the link a block-level element
    textAlign: 'left',
    wordBreak: 'break-all', // Break the link at any point if necessary
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
        color: theme.palette.additional.magenta,
    },
    [theme.breakpoints.down("lg")]: {
        textAlign: 'center',
    },
}));

export const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
    cursor: 'pointer',
    display: 'block', // Make the link a block-level element
    textAlign: 'left',
    wordBreak: 'break-all', // Break the link at any point if necessary
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'none',
        color: theme.palette.additional.magenta,
    },
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: 'Cormorant',
    fontWeight: 'bold',
    variant: "filled",
    margin: '2px',
    marginY: '5px',
    padding : '2px', 
}));

export const StyledHighlightChip = styled(Chip)(({ theme }) => ({
    backgroundColor: theme.palette.additional.lightPurple,
    color: theme.palette.primary.contrastText,
    borderRadius: '2px',
    fontFamily: 'Cormorant',
    fontWeight: 'bold',
    margin: '5px',
    marginY: '5px',
    padding : '2px',
    paddingY: '1px', 
    fontSize:'20px',
    lineHeight: '1em',
    '&:hover': {
        backgroundColor: theme.palette.additional.deepPurple,
        color: 'white',
    }
}));

export const StyledCaption = styled(Typography)(({ theme }) => ({
  fontFamily: 'Cormorant',
  textAlign: 'center',
  fontSize: '12px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
  paddingX: '5px',

  '&::-webkit-scrollbar': {
    width: '5px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#EDAFB8',
    borderRadius: '10px',
    marginLeft: '5px',
  },

//firefox
  scrollbarWidth: 'thin',
  scrollbarColor: '#EDAFB8 transparent',

}));
