import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EDAFB8",
      contrastText: "#2F2F2F",
    },
    secondary: {
      main: "#B0C4B1",
      contrastText: "#2F2F2F",
    },
    error: {
      main: "#982649",
      contrastText: "#F7E1D7",
    },
    warning: {
      main: "#AA4465",
      contrastText: "#F7E1D7",
    },
    info: {
      main: "#3185fc",
      contrastText: "#F7E1D7",
    },
    success: {
      main: "#DEDBD2",
      contrastText: "#2F2F2F",
    },
    additional: {
      magenta: "#d30c7b",
      lightPurple: "#D388BF",
      deepPurple: "#7D2E68",
      darkGrey: "#4A5759",
      lightPastelPink: "#FCF2EE",
      aquamarine: "#a5ffd6",
      brown: "#DBD1D5",
      gold: "#C8A200", // Added gold color
      lightGold: "#FAD02E", // Optional lighter gold color
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default theme;
