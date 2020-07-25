import React, { useState, useEffect, Component } from "react";
import ImageCard from "./Home/ImageCard";
import axios from "axios";
import localapi from "../apis/localapi";
import { makeStyles, useTheme } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

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
    maxWidth: 322,
  },
  expand: {
    marginLeft: "auto",
  },
  pageHeading: {
    fontFamily: "Josefin Sans",
    fontSize: "4rem",
    bottomMargin: "3em",
  },
  media: {
    width: 322,
    height: 322,
  },
  header: {
    textAlign: "center",
  },
}));

const Forum = () => {
  const [categories, setCategories] = useState([]);
  const classes = useStyles();

  console.log(categories);
  useEffect(() => {
    localapi.get(`/categories`).then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography className={classes.pageHeading}>Forums</Typography>
        </Grid>
      </Grid>

      {categories.map((category) => (
        <Card className={classes.card}>
          <CardMedia className={classes.media} image="" title="Blogs" />
          <CardHeader
            className={classes.header}
            title={category.name}
            subheader="Check out these forums>"
          />
        </Card>
      ))}
    </>
  );
};

export default Forum;
