import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import background from "../assets/background.jpg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
}));

export default function CreateGitListing() {
  const classes = useStyles();
  const theme = useTheme();

  /// Rails backend title:string, description:text
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Grid container direction="row">
      <Grid item container direction="column" justify="center" lg={4}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Create a Git Collaboration
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.arcOrange }}
          >
            Do it!
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <Typography variant="body1">Enter the Listing Name</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="Title"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="description"
            label="A decription of your project"
            placeholder="Placeholder"
            multiline
            rows={10}
            variant="outlined"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={8}></Grid>
    </Grid>
  );
}
