import React from "react";
import { Link, useHistroy, Redirect } from "react-router-dom";

import {
  Paper,
  Grid,
  Icon,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";

import ComputerRoundedIcon from "@material-ui/icons/ComputerRounded";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { withStyles } from "@material-ui/core/styles";

import buttonImg from "../../assets/img/buttonImg.png";
import homeBanner from "../../assets/img/homeBanner.jpg";
import FlagIcon from "../../assets/icons/flagIcon.png";

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0px !important",
    // overflow: "visible !important",

    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0 !important",
      textAlign: "center",
      "& .list": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
  bannerImage: {
    height: "400px",
  },
  title: {
    fontFamily: "Josefin Sans",
    fontWeight: "700",
    fontSize: "6rem",
    color: "#47558C",
  },
  gradiantButton: {
    // backgroundImage: "url(" + buttonImg + ")",
  },
  icons: {
    height: "40px",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      container
      className={classes.banner}
      // spacing={4}
      justify="center"
      alignItems="center"
    >
      <Grid item md={6} justify="center" alignItems="center">
        <h1 className={clsx("text-48 mb-6 text-primary", classes.title)}>
          <Box letterSpacing={20} m={1}>
            Project Daisy
          </Box>
        </h1>
        <Grid item justify="center" alignItems="center">
          <Grid item>
            <img src={FlagIcon} className={classes.icons} />
            Git Collaborations
          </Grid>
          <Grid item>
            <img src={FlagIcon} className={classes.icons} />
            Connect with other Women
          </Grid>
          <Grid item>
            <img src={FlagIcon} className={classes.icons} />
            All inclusive
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item lg={3} justify="center" alignItems="center">
            <Button
              component={Link}
              to={`/signup`}
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
          </Grid>
          <Grid item lg={3}>
            <Button
              component={Link}
              to={`/login`}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item md={5} align="center" justify="center">
        {/* <img src={homeBanner} className={classes.bannerImage} /> */}
      </Grid>
    </Grid>
  );
};

export default Banner;
