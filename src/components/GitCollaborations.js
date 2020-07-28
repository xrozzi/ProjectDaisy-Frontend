
import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import localapi from "../apis/localapi";

import { makeStyles, useTheme } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
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
  },
  expand: {
    marginLeft: "auto",
  },
  pageHeading: {
    fontFamily: "Josefin Sans",
    fontSize: "4rem",
    bottomMargin: "3em",
  },
}));


const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;
export default function ExpandableCards() {
//   return (
//     <>
//

//     </>
//   );
// }

// const GitCollaborations = () => {
   const [listings, setListings] = useState([]);

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
        </Grid>
      </Grid>
      {listings.map((listing) => (
        <Grid
          container
          spacing={1}
          container
          direction="column"
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
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  }
                />
                <CardContent>
                  <Typography variant="caption">
                    Date Created: {listing.created_at}
                  </Typography>
                  <Typography>{listing.description}</Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                  <IconButton>
                    <ContactMailIcon colorSecondary />
                  </IconButton>
                  <IconButton>{/* <ContactPhoneIcon /> */}</IconButton>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          {/* stop */}
        </Grid>
      ))}
    </>
  );
};

// export default GitCollaborations;
