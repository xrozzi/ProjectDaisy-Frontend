import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/styles";

import localApi from "../apis/localapi";

// styles for the user profile page
const useStyles = makeStyles((theme) => ({
  containers: {
    borderRadius: "3em",
  },

  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "#F0F0F3",
    boxShadow:
      "10px 10px 30px rgba(174, 174, 192, 0.4), -10px -10px 30px #FFFFFF",
    borderRadius: "10px",
  },
}));

// labels for the star system
const labels = {
  1: "Complete Beginner",
  2: "Beginner",
  3: "Intermediate",
  4: "Good",
  5: "Excellent",
};

const UserProfile = () => {
  const theme = useTheme();

  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [currentUser, setCurrentUser] = useState({});
  const [userCollabs, setUserCollabs] = useState([]);

  const [open, setOpen] = useState(false);

  //sends a get reauest for the current users data
  useEffect(() => {
    localApi.get("/myprofile").then((response) => {
      setCurrentUser(response.data);
    });
  }, []);

  // renders the users current collabs
  useEffect(() => {
    localApi.get("/usercollabs").then((response) => {
      setUserCollabs(response.data);
      console.log(response.data);
    });
  }, []);
  // maps out their git collabs on the screen
  const renderGitCollabs = userCollabs.map((collab, index) => {
    return (
      <div key={index}>
        <div>{collab.title}</div>
        <div>{collab.description}</div>
      </div>
    );
  });

  const Container = (props) => <Grid container {...props} />;
  const Item = (props) => <Grid item {...props} />;

  return (
    <>
      <div className={classes.root}>
        <Container spacing={4}>
          <Item xs={12} sm={6} md={3} className={classes.learnButton}>
            <Paper className={classes.paper}>
              <br />
              <Grid item>
                <Avatar
                  alt="User profile image"
                  src={"/static/images/avatar/1.jpg" && currentUser.image}
                />
                <br />
                <div>
                  {currentUser.firstname} {currentUser.lastname}
                </div>
                <br />
                {currentUser && <div> {currentUser.email} </div>}
                <br />
                <Button
                  component={Link}
                  to="/Images"
                  variant="outlined"
                  className={classes.learnButton}
                >
                  <span id="uploadImageButton"> Upload Image </span>
                </Button>
                <br />
                <Button
                  component={Link}
                  to={`/inbox`}
                  variant="contained"
                  color="primary"
                >
                  Check inbox
                </Button>
              </Grid>
              <br />
              <div>Short description</div>
            </Paper>
          </Item>
          <Item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Grid item xs={12} className={theme.palette.subHeading}>
                <Typography className={theme.typography.subHeading}>
                  Skills
                </Typography>

                <br />
                <div>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />

                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
                <div>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
                <div>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
                <div>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
                <div>
                  <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  {value !== null && (
                    <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                  )}
                </div>
              </Grid>
            </Paper>
          </Item>
          <Item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Grid item xs={12} className={classes.gitCollab}>
                <div>
                  <h1 style={{ color: "#162521", fontFamily: "Josefin Sans" }}>
                    Git Collaborations
                  </h1>
                </div>
                <div>
                  <Button
                    component={Link}
                    to={`/CreateGitListing`}
                    variant="contained"
                    color="primary"
                  >
                    Create New Listing
                  </Button>
                </div>
                <br />
                <div>{renderGitCollabs}</div>
              </Grid>
            </Paper>
          </Item>

          {/* <Item xs={12} sm={6} md={3}>
            <Paper className={classes.paper}>extra coloum</Paper>
          </Item> */}
        </Container>
      </div>
    </>
  );
};

export default UserProfile;
