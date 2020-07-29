import { createMuiTheme } from "@material-ui/core/styles";

const arcPurple = "#E6E1FB";
const arcOrange = "#9330C6";

export default createMuiTheme({
  palette: {
    common: {
      arcPurple: `${arcPurple}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcPurple}`,
    },
    secondary: {
      main: `${arcOrange}`,
      fontFamily: "Josefin Sans",
    },
  },
  typography: {
    tab: {
      fontFamily: "Josefin Sans",
      textTransform: "none",
      // fontWeight: 70,
      fontSize: "1rem",
    },
    signup: {
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: arcOrange,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcOrange,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcOrange}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcOrange}`,
        },
      },
    },
  },
  pageHeading: {
    fontFamily: "Josefin Sans",
    fontSize: "4rem",
    bottomMargin: "5em",
    color: "#4C6099",

    // border: "2px solid blue",
  },
});
