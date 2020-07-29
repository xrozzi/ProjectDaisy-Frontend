import React from "react";
import Banner from "./Banner";
import Features from "./Features";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Background from "../../assets/img/backgroundImage.jpg";

const useStyles = makeStyles((theme) => ({
  homepageBanner: {
    border: "2px solid green",

    backgroundColor: "#FDFDFD",
  },
}));

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
