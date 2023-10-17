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
      main: '#AA4465',
      contrastText: '#F7E1D7',
    },
    info: {
      main: '#3185fc',
      contrastText: '#F7E1D7',
    },
    success: {
      main: '#DEDBD2',
      contrastText: '#2F2F2F',
    },
    additional: {
      deepPurple: '#7D2E68',
      darkGrey: '#4A5759',
      lightPastelPink: '#F7E1D7',
    }
  },
});

export default theme;
