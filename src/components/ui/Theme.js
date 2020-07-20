import { createMuiTheme } from '@material-ui/core/styles';

const arcPurple = "#FDD8D6"
const arcOrange = "#CE7685"

export default createMuiTheme({
    palette: {
        common: {
            arcPurple: `${arcPurple}`,
            arcOrange:  `${arcOrange}`
        },
        primary: {
            main: `${arcPurple}`
        },
        secondary: {
            main: `${arcOrange}`
        }

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
                color: "white"
            }
    }
})


