import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
import Paper from "@material-ui/core/Paper";
import PersonIcon from "@material-ui/icons/Person";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 920,
    minWidth: 800,
    border: "2px solid green",
  },
  expand: {
    marginLeft: "auto",
  },
  pageHeading: {
    fontFamily: "Josefin Sans",
    fontSize: "4rem",
    bottomMargin: "3em",
  },
  icons: {
    width: "5em",
    height: "5em",
  },
  paper: {
    border: "1px solid red",
  },
  cardContent: {
    marginLeft: "20em",
  },
}));

export default function GitCollaborations() {
  const [listings, setListings] = useState([]);
  const [userRoute, setUserRoute] = useState();

  const classes = useStyles();

  //this.setState({listing: listing.description});
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
            <Button>Create a Listing</Button>
          </Typography>
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
          style={{ minHeight: "20vh" }}
        >
          <Grid item xs={12} sm={9} md={10} lg={10}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
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
                  <Typography>{listing.description}</Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                  <Grid item>
                    <IconButton label={listing.user_id} value={listing.used_id}>
                      <ContactMailIcon className={classes.icons} />
                    </IconButton>
                  </Grid>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          {/* stop */}
        </Grid>
      ))}
    </>
  );
}
