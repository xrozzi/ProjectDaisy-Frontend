import React, { useState } from "react";
import App from "./App";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import binIcon from "../assets/icons/binIcon.png";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import axios from "axios";
import localApi from "../apis/localapi";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // backgroundColor: "#FFF7F8",
    marginTop: "5em",
    borderRadius: 5,
  },
  description: {
    // border: `2px solid ${theme.palette.common.arcOrange}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    borderRadius: 50,
    height: 45,
    width: "25em",
    // fontSize: "1rem",
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
  Icons: {
    width: "70px",
  },
}));

export default function CreateGitListing(props) {
  const classes = useStyles();
  const theme = useTheme();

  /// Rails backend title:string, description:text
  const [title, setTitle] = useState("");
  const [titleHelper, settitleHelper] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionHelper, setDescriptionHelper] = useState("");

  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "title":
        setTitle(event.target.value);
        valid = /[0-9a-zA-Z]{6,}/.test(event.target.value);

        if (!valid) {
          settitleHelper("Please enter a longer title");
        } else {
          settitleHelper("");
        }
        break;
      case "description":
        setDescription(event.target.value);
        valid = /[0-9a-zA-Z]{15,}/.test(event.target.value);
        if (!valid) {
          setDescriptionHelper("");
        }
        break;
      default:
        break;
    }
  };

  function createGitPost() {
    localApi
      .post(`/git_collaborations`, {
        git_collaboration: {
          title,
          description,
        },
      })
      .then(() => setIsCreated(true))
      .catch(() => setErrorMessage("The post was not created"));
  }

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justify="center"
      style={{
        minHeight: "80vh",
        // border: "2px solid green",
        backgroundColor: "#FFF7F8",
      }}
      lg={10}
      xl={10}
    >
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        lg={6}
        xl={6}
        sm={4}
        style={{
          minHeight: "5vh",
          // border: "2px solid red",
        }}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
            // border: "2px solid pink",
          }}
        >
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Creat A <br />
              Git Collaboration{" "}
            </Typography>{" "}
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="subtitle2"
              style={{
                fontSize: "1.5rem",
              }}
            >
              Connect with like minded coders for projects{" "}
            </Typography>{" "}
            <Grid container justify={matchesMD ? "center" : undefined} item>
              <Button
                component={Link}
                to="/AboutGitCollabs"
                variant="outlined"
                className={classes.learnButton}
                // onClick={Redirect to='/AboutGitCollabs'}
              >
                <span
                  style={{
                    marginRight: 10,
                  }}
                >
                  Learn More
                </span>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "6em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "6em" : 0,
          // border: "2px solid orange",
          backgroundColor: "#EBDEF8",
        }}
        lg={6}
        xl={6}
      >
        <Grid item>
          <Grid
            container
            justify="center"
            direction="column"
            style={{
              width: "25em",
              // border: "1px solid purple",
            }}
            lg={12}
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              style={{
                width: "25em",
                marginTop: "45px",
                // border: "1px solid blue",
              }}
            >
              <Grid
                item
                style={{
                  marginBottom: "0.5em",
                }}
              >
                <TextField
                  label="Please Enter a Collaboration Name"
                  direction="column"
                  variant="outlined"
                  id="title"
                  fullWidth
                  value={title}
                  error={titleHelper.length !== 0}
                  helperText={titleHelper}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              justify="center"
              style={{
                width: "25em",
              }}
            >
              <TextField
                // InputProps={{ disableUnderline: true }}
                value={description}
                className={classes.description}
                label="Enter a Description of your project. Please include the programming languages"
                multiline
                helperText={descriptionHelper}
                error={descriptionHelper.length !== 0}
                style={{
                  width: "100%",
                }}
                rows={10}
                id="description"
                onChange={onChange}
              />{" "}
            </Grid>{" "}
            <Grid
              item
              container
              style={{
                marginTop: "2em",
                marginBottom: "2em",
              }}
            >
              <Button
                disabled={description.length === 0 || titleHelper === 0}
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
                style={{
                  marginTop: "2em",
                  marginBottom: "2em",
                }}
              >
                Post Collaboration
              </Button>
              <Grid item justify="center">
                {/* <Button
                  // borderColor="secondary"
                  
                  variant="contained"
                  className={classes.sendButton}
                >
                  Go back to viewing Collaborations
                </Button> */}
                <img
                  src={binIcon}
                  className={classes.Icons}
                  component={Link}
                  to={`/Gitcollaborations`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{
          zIndex: 1302,
        }}
        open={open}
        // fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={
          {
            // style: {
            //   paddingTop: matchesXS ? "1em" : "15em",
            //   paddingBottom: matchesXS ? "1em" : "16em",
            //   paddingLeft: matchesXS
            //     ? 0
            //     : matchesSM
            //     ? "5em"
            //     : matchesMD
            //     ? "10em"
            //     : "20em",
            //   paddingRight: matchesXS
            //     ? 0
            //     : matchesSM
            //     ? "5em"
            //     : matchesMD
            //     ? "10em"
            //     : "20em",
            //   border: "2px solid red",
            // },
          }
        }
      >
        <DialogContent>
          <Grid
            container
            direction="column"
            style={
              {
                // border: "2px solid green",
              }
            }
          >
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Git Post
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                marginBottom: "0.5em",
                // border: "2px solid orange",
              }}
            >
              <TextField
                label="title"
                direction="column"
                id="title"
                fullWidth
                value={title}
                error={titleHelper.length !== 0}
                helperText={titleHelper}
                onChange={onChange}
                style={
                  {
                    // border: "2px solid orange",
                  }
                }
              />
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              width: matchesXS ? "80%" : "20em",
              // border: "2px solid orange",
            }}
          >
            <TextField
              // InputProps={{ disableUnderline: true }}
              value={description}
              className={classes.description}
              multiline
              fullWidth
              helperText={descriptionHelper}
              error={descriptionHelper.length !== 0}
              rows={10}
              id="description"
              onChange={onChange}
            />{" "}
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
          >
            <Grid item>
              <Button
                color="primary"
                align="center"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={description.length === 0 || titleHelper === 0}
                variant="contained"
                style={{
                  marginTop: 20,
                  width: 200,
                }}
                className={classes.sendButton}
                onClick={createGitPost}
              >
                Confirm Post
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
