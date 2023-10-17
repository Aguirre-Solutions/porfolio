import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EDAFB8',
      contrastText: '#2F2F2F',
    },
    secondary: {
      main: '#B0C4B1',
      contrastText: '#2F2F2F',
    },
    error: {
      main: '#982649',
      contrastText: '#F7E1D7',
    },
    warning: {
      main: '#DEDBD2',
      contrastText: '#2F2F2F',
    },
    info: {
      main: '#4A5759',
      contrastText: '#F7E1D7',
    },
    success: {
      main: '#B0C4B1',
      contrastText: '#2F2F2F',
    },
  },
});

export default theme;
