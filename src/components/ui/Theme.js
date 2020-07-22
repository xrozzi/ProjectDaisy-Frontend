import { createMuiTheme } from "@material-ui/core/styles";

const arcPurple = "#ECEDED";
const arcOrange = "#CE7685";

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
      fontWeight: 700,
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
});
