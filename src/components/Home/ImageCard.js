import React from "react";
import { withStyles } from "@material-ui/core/styles";
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

const ImageCard = withStyles(styles)(({ classes }) => (
  <Card className={classes.card}>
    <CardMedia className={classes.media} image="" title="Blogs" />
    <CardHeader
      className={classes.header}
      title="Forums"
      subheader="Check out our new forums"
    />{" "}
  </Card>
));

export default ImageCard;
