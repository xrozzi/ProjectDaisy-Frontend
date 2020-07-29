import React from "react";
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

import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  introWrapper: {
    padding: "5rem 0px !important",
    // overflow: "visible !important",
    border: "2px solid red",

    [theme.breakpoints.down("sm")]: {
      padding: "1rem 0 !important",
      textAlign: "center",
      "& .list": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: "2px solid pink",
      },
    },
  },
  bannerImage: {
    height: "500px",
  },
  title: {
    fontFamily: "Josefin Sans",
    fontWeight: "700",
    fontSize: "6rem",
    color: "#D3459E",
    border: "2px solid green",
  },
  gradiantButton: {
    // backgroundImage: "url(" + buttonImg + ")",
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
        Connecting with other women in tech made easy
        <Icon fontSize="small"> </Icon>
        <span className="ml-4">
          <Button className={classes.gradiantButton}>Sign up</Button>

          <Button className={classes.gradiantButton}>Login</Button>
        </span>
      </Grid>

      <Grid item md={6} align="center" justify="center">
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
          Connect with other Women
        </Grid>
        <Grid item>
          <Icon className="m2" color="secondary">
            <ComputerRoundedIcon />
          </Icon>
          All inclusive
        </Grid>
        {/* <img src={homeBanner} className={classes.bannerImage} /> */}
      </Grid>
    </Grid>
  );
};

export default Banner;
