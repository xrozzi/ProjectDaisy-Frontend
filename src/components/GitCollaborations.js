import React, { useState } from "react";
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
    fontSize: "5rem",
  },
}));
const ExpandIcon = ({ expanded }) =>
  expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />;
export default function ExpandableCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography className={classes.pageHeading}>Git Listings</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={9} md={10} lg={10}>
          <Paper className={classes.paper}>
            <Card className={classes.card}>
              <CardHeader
                title="Git Project"
                subheader="username"
                avatar={
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                }
              />
              <CardContent>
                <Typography variant="caption">
                  Date Created: ...days ago
                </Typography>
                <Typography>My project is about the lorem thingy</Typography>
              </CardContent>
              <CardActions disableActionSpacing>
                <IconButton>
                  <ContactMailIcon />
                </IconButton>
                <IconButton>
                  <ContactPhoneIcon />
                </IconButton>
                <IconButton className={classes.expand} onClick={toggleExpanded}>
                  <ExpandIcon expanded={expanded} />
                </IconButton>
              </CardActions>
              <Collapse in={expanded}>
                <CardContent>
                  <Typography>lorem loem</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Paper>
        </Grid>
        {/* stop */}
      </Grid>
    </>
  );
}
