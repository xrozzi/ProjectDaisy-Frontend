import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistroy, Redirect } from "react-router-dom";
import searchIcon from "../assets/icons/searchIcon.png";

import localapi from "../apis/localapi";

import { makeStyles, useTheme } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Paper from "@material-ui/core/Paper";
import PersonIcon from "@material-ui/icons/Person";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

    // border: "2px solid blue",
  },
  icons: {
    width: "5em",
    height: "5em",
  },
  paper: {
    // border: "1px solid red",
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
  const [userUrlId, setUserUrlId] = useState();

  const classes = useStyles();

  console.log(listings);

  useEffect(() => {
    localapi.get(`/git_collaborations`).then((response) => {
      setListings(response.data);
    });
  }, []);

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

        {listings.map((listing) => (
          <Grid
            container
            spacing={1}
            container
            direction="row"
            alignItems="center"
            justify="center"
            // style={{ minHeight: "20vh" }}
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
                    >
                      Go To User {listing.user_id} profile
                    </Button>

                    {/* <Link to={`/users/${listing.user_id}`}>View Profile</Link> */}
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
