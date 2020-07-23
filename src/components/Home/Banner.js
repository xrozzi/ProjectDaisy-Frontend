import React from "react";
import {
  Paper,
  Grid,
  Icon,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import ComputerRoundedIcon from "@material-ui/icons/ComputerRounded";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0px !important",
    // overflow: "visible !important",
    border: "2px solid green",

    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0 !important",
      textAlign: "center",
      "& .list": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid pink",
      },
    },
    banner: {
      fontFamily: "Josefin Sans",
    },
  },
  title: {
    fontFamily: "Josefin Sans",
    fontSize: "6rem",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.banner}
      spacing={4}
      justify="center"
      alignItems="center"
    >
      <Grid item md={5}>
        <h1 className={clsx("text-48 mb-6 text-primary", classes.title)}>
          Project Daisy
        </h1>
        Connecting is easy with Project Daisy
        <Grid item>
          <Icon className="mr-2" color="secondary">
            <ComputerRoundedIcon />
          </Icon>
          Git Collaborations
        </Grid>
        <Grid item>
          <Icon className="mr-2" color="secondary">
            <ComputerRoundedIcon />
          </Icon>
          Unlimited forums
        </Grid>
        <Grid item>
          <Icon className="m2" color="secondary">
            <ComputerRoundedIcon />
          </Icon>
          Find Meetups
        </Grid>
        <Button className="bg-secondary rounded text-13 px-7 py-11px">
          <Icon fontSize="small">
            {" "}
            <WbSunnyIcon />
          </Icon>
          <span className="ml-2">
            <Button>Sign up today</Button>
          </span>
        </Button>
      </Grid>
      <Grid item md={7}>
        PLACE FOR IMAGE
      </Grid>
    </Grid>
  );
};

export default Banner;
