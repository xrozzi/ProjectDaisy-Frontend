import React from "react";
import { withStyles } from "@material-ui/core/styles";
import lightBulbIcon from "../../assets/icons/lightBulbIcon.png";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  card: {
    maxWidth: 322,
  },
  media: {
    width: 322,
    height: 322,
  },
  header: {
    textAlign: "center",
  },
});

const cardImages = [
  {
    img: "",
    desc: "Campsite",
  },
  {
    img:
      "https://images.unsplash.com/photo-1564198879220-63f2734f7cec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2072&q=80",
    desc: "Space",
  },
];

const ImageCard = withStyles(styles)(({ classes }, props) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image={lightBulbIcon} title="Blogs" />
    <CardHeader
      className={classes.header}
      title="Feature"
      subheader="Check out our this feature >"
    />
  </Card>
));

export default ImageCard;
