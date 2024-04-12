import { createTheme } from "@mui/material/styles";

/* const theme = createTheme({
  palette: {
    primary: {
      main: "#f7b500", // yellow
    },
    secondary: {
      main: "#ff7900", // orange
    },
    error: {
      main: "#ff3c3c", // red
    },
    warning: {
      main: "#ffad00", // amber
    },
    info: {
      main: "#00c8ff", // blue
    },
    success: {
      main: "#00e18c", // green
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      letterSpacing: "0.0075em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.01071em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
}); */

const theme = createTheme({
  palette: {
    primary: {
      /* main: "#212121", // black */
      main: "#FF0000", // Mint green
    },
    secondary: {
      main: "#FF0000", // Mustard yellow
    },
    tertiaryDark: {
      main: "#263238", // dark gray
    },
    tertiaryLight: {
      main: "#FFFFFF", // light gray
    },
    error: {
      main: "#ff3c3c", // red
    },
    warning: {
      main: "#ffb900", // yellow
    },
    info: {
      main: "#00c8ff", // blue
    },
    success: {
      main: "#00e18c", // green
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 500,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      letterSpacing: "0em",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      letterSpacing: "0.0075em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.01071em",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;
