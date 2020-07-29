import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistroy, Redirect } from "react-router-dom";

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
    border: "2px solid blue",
  },
  icons: {
    width: "5em",
    height: "5em",
  },
  paper: {
    border: "1px solid red",
    maxWidth: "50em",
    // backgroundColor: "blue",
  },
  cardContent: {
    marginLeft: "20em",
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
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography className={classes.pageHeading}>
            Github Collaboration Listings
          </Typography>
          <Typography>
            <Link to={`/CreateGitListing`}>Create A Listing</Link>
          </Typography>
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
            <Grid alignItems="center" item xs={12} sm={9} md={10} lg={5}>
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
                  <Typography variant="caption">
                    Date Created: {listing.created_at}
                  </Typography>
                  <Typography>
                    Description of project:
                    {listing.description}
                  </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                  <Grid item>
                    <IconButton setUserUrlId={listing.user_id}>
                      <ContactMailIcon setUserUrlId={listing.user_id} />
                      <Divider />
                      <Link to={`/users/${listing.user_id}`}>View Profile</Link>
                    </IconButton>
                  </Grid>
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
