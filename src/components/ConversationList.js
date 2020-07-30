import React, { useEffect, useState } from "react";
import localApi from "../apis/localapi.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "react-avatar";

const ConversationList = ({ onSelectConversation }) => {
  const [conversations, setConversations] = useState([]);

  // Loads users messages for the inbox  and maps them out
  useEffect(() => {
    localApi.get(`/conversations`).then((response) => {
      setConversations(response.data);
    });
  }, []);

  // Returns the converation list
  return (
    <>
      {conversations.map((conversation) => (
        <List>
          <ListItem
            id="conversationId"
            button
            onClick={() => {
              onSelectConversation(conversation.id);
            }}
          >
            <ListItemIcon>
              <Avatar githubHandle="" size={20} round="20px" />
            </ListItemIcon>
            <ListItemText
              primary={conversation.title}
              secondary={conversation.reciever_email}
            ></ListItemText>
          </ListItem>
        </List>
        // </Grid>
      ))}
    </>
  );
};

export default ConversationList;
