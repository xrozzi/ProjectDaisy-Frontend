import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

import axios from "axios";
import background from "../assets/background.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    // backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
  },
  description: {
    border: `2px solid ${theme.palette.common.arcOrange}`,
    marginTop: "5em",
    borderRadius: 5,
    minWidth: 400,
    maxWidth: 900,
  },
  sendButton: {
    borderRadius: 50,
    height: 45,
    width: "25em",
    fontSize: "1rem",
    backgroundColor: theme.palette.common.arcOrange,
    "&:hover": {
      backgroundColor: theme.palette.secondary,
    },
  },
  confirmButton: {
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  containerBackground: {
    backgroundColor: "#fffff",
  },
}));

export default function CreateGitListing(props) {
  const classes = useStyles();
  const theme = useTheme();

  /// Rails backend title:string, description:text
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
      lg={12}
      xl={12}
    >
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Creat A
                <br />
                Git Collaboration
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
              >
                Connect with like minded coders for projects
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => props.setValue(5)}
          >
            Sign Up
          </Button> */}
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container justify="center" direction="column">
            <Grid
              item
              container
              direction="column"
              justify="center"
              style={{ width: "25em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="title"
                  direction="column"
                  id="title"
                  fullWidth
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "25em" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={description}
                className={classes.description}
                multiline
                fullWidth
                rows={10}
                id="message"
                onChange={(event) => setDescription(event.target.value)}
              />
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Button variant="contained" className={classes.sendButton}>
                Post Collaboration
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
