import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/icons/searchIcon.png";

import localapi from "../apis/localapi";

import { makeStyles, useTheme } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";

import Paper from "@material-ui/core/Paper";
import PersonIcon from "@material-ui/icons/Person";

// Styles for Page
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 920,
    minWidth: 800,
    border: "2px solid green",
    backgroundColor: "#f2f2f2",
  },
  expand: {
    marginLeft: "auto",
  },
  pageHeading: {
    fontFamily: "Josefin Sans",
    fontSize: "4rem",
    bottomMargin: "5em",
    color: "#4C6099",
  },
  icons: {
    width: "5em",
    height: "5em",
  },
  paper: {
    maxWidth: "100em",
    maxHeight: "30em",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    marginBottom: "100px",
  },
  cardContent: {
    marginLeft: "20em",
  },
  topHeading: {
    bottomMargin: "4em",
  },
  BannerIcon: {
    width: "10em",
  },
}));

export default function GitCollaborations() {
  const [listings, setListings] = useState([]);

  const classes = useStyles();

  // API REQUEST TO GET THE GIT COLLABORATIONS
  useEffect(() => {
    localapi.get(`/git_collaborations`).then((response) => {
      setListings(response.data);
    });
  }, []);

  // Returns the git collabs in a list
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.topHeading}
      >
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <Typography className={classes.pageHeading}>
              Github Collaboration Listings
            </Typography>
          </Grid>

          <Grid item>
            <img src={searchIcon} className={classes.BannerIcon} />
          </Grid>

          <Grid item>
            <Button
              component={Link}
              to={`/CreateGitListing`}
              variant="contained"
              color="primary"
            >
              Create A Listing To Connect
            </Button>
          </Grid>
        </Grid>

        {/* MAPPING OF THE LISTINGS */}
        {listings.map((listing) => (
          <Grid
            container
            spacing={1}
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid alignItems="center" item xs={12} sm={9} md={10} lg={10}>
              <Paper className={classes.paper}>
                <CardHeader
                  title={listing.title}
                  subheader={listing.user_id}
                  avatar={
                    <Avatar className={classes.icons}>
                      <PersonIcon className={classes.icons} />
                    </Avatar>
                  }
                />
                <CardContent direction="column" className={classes.cardContent}>
                  <Typography>
                    Description of project:
                    {listing.description}
                  </Typography>
                  <Typography variant="caption">
                    Date Created: {listing.created_at}
                  </Typography>
                  {/* card content */}
                </CardContent>
                <CardActions disableActionSpacing>
                  <IconButton setUserUrlId={listing.user_id}>
                    <Button
                      borderColor="secondary"
                      component={Link}
                      to={`/users/${listing.user_id}`}
                      variant="contained"
                      color="primary"
                      id="userProfileButton"
                    >
                      Go To User {listing.user_id} profile
                    </Button>
                  </IconButton>
                </CardActions>
              </Paper>
            </Grid>
            {/* stop */}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
