import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImageCard from "./ImageCard";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;
const Features = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Container spacing={4}>
      <Item xs={12} sm={12} md={4}>
        <Paper className={classes.paper}>
          {" "}
          <ImageCard />
        </Paper>
      </Item>
      <Item xs={12} sm={12} md={4}>
        <Paper className={classes.paper}>
          {" "}
          <ImageCard />
        </Paper>
      </Item>
      <Item xs={12} sm={12} md={4}>
        <Paper textAlign="center" justify="center" className={classes.paper}>
          <ImageCard />
        </Paper>
      </Item>
    </Container>
  </div>
));
export default Features;
