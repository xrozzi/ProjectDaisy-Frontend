import React from "react";
import { withStyles } from "@material-ui/core/styles";
import lightBulbIcon from "../../assets/icons/lightBulbIcon.png";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

// styles for cards
const styles = (theme) => ({
  card: {
    maxWidth: 322,

    backgroundColor: "#FCF8FC",
  },
  media: {
    width: 322,
    height: 322,
  },
  header: {
    textAlign: "center",
  },
});

// render out the image card
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
