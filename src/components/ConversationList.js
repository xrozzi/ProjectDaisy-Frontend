import React, { useEffect, useState } from "react";
import localApi from "../apis/localapi.js";
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

import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";

const ConversationList = ({ onSelectConversation }) => {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    localApi.get(`/conversations`).then((response) => {
      setConversations(response.data);
    });
  }, []);

  return (
    <>
      {conversations.map((conversation) => (
        <Grid item xs={12} style={{ padding: "10px" }}>
          <List>
            <ListItem
              button
              onClick={() => {
                onSelectConversation(conversation.id);
              }}
            >
              <ListItemIcon>
                <Avatar githubHandle="" size={50} round="20px" />
              </ListItemIcon>
              <ListItemText
                primary={conversation.title}
                secondary={conversation.reciever_email}
              ></ListItemText>
            </ListItem>
          </List>
        </Grid>
      ))}
    </>
  );
};

export default ConversationList;
