import React from "react";
import Banner from "./Banner";
import Features from "./Features";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// styles used
const useStyles = makeStyles((theme) => ({
  homepageBanner: {
    backgroundColor: "#FDFDFD",
  },
}));

// renders out home page
function Homepage() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <Grid container className={classes.homepageBanner}>
        <Grid item>
          <Banner />
        </Grid>

        <Features />
      </Grid>
    </>
  );
}

export default Homepage;
