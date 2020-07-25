import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import Avatar from "react-avatar";
import MessageIcon from "@material-ui/icons/Message";
import localApi from "../apis/localapi.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
});

const Inbox = () => {
  const classes = useStyles();
  // const [conversations, setConversations] = useState([]);
  // const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   localApi.get("/conversations").then((response) => {
  //     console.log(response.data);
  //     setConversations(response.data);
  //   });
  // }, []);

  // localApi.get(/conversations/:id/messages)

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <MessageIcon />

          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <List>
              <ListItem button key="Helga">
                <ListItemIcon>
                  <Avatar githubHandle="" size={50} round="20px" />
                </ListItemIcon>
                <ListItemText primary="Helga"></ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Divider />
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar githubHandle="" size={50} round="20px" />
              </ListItemIcon>
              <ListItemText primary="Esther">Remy Sharp</ListItemText>
            </ListItem>
            <ListItem button key="Esther">
              <ListItemIcon>
                <Avatar githubHandle="" size={50} round="20px" />
              </ListItemIcon>
              <ListItemText primary="Nikki"></ListItemText>
            </ListItem>
            <ListItem button key="CindyBaker">
              <ListItemIcon>
                <Avatar githubHandle="" size={50} round="20px" />
              </ListItemIcon>
              <ListItemText primary="Rose">Rose</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            <ListItem key="1">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="right"
                    primary="Hey girl!"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="right" secondary="09:30"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="2">
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText
                    align="left"
                    primary="Wanna collab?"
                  ></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText align="left" secondary="04:21"></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key="3">
              <Grid container></Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField id="outlined-basic-email" label="type" fullWidth />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Inbox;
