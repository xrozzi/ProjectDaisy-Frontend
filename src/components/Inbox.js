import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ConversationList from "./ConversationList";
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
import CreateIcon from "@material-ui/icons/Create";
import Avatar from "react-avatar";
import MessageIcon from "@material-ui/icons/Message";
import localApi from "../apis/localapi.js";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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
  userSidePanel: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  textBubble: {
    color: "black",
    backgroundColor: "#F4F4F8",
    borderRadius: "15px",
    width: "20em",
  },
});

const Inbox = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [title, setTitle] = useState("");
  const [reciever_email, setRecieverEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [currentConversation, setCurrentConversation] = useState("");
  const [currentMessages, setCurrentMessages] = useState([]);
  const [text, setMessage] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (currentMessages) {
      const tempConversationId = currentConversation;
      setTimeout(() => {
        localApi
          .get(`/messages?conversation_id=${currentConversation}`, {})
          .then((res) => {
            if (tempConversationId === currentConversation) {
              setCurrentMessages(res.data);
              console.log(res.data);
            }
          });
      }, 3000);
    }
  }, [currentMessages]);

  const getMessages = () => {
    localApi
      .get(`/messages?conversation_id=${currentConversation}`, {})
      .then((res) => {
        setCurrentMessages(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    if (currentConversation) {
      getMessages();
    }
  }, [currentConversation]);

  function createConversation() {
    localApi
      .post(`/conversations`, {
        conversation: {
          title,
          reciever_email,
        },
      })
      .then((res) => {
        setIsCreated(true);
        setCurrentConversation(res.data.id);
      })
      .catch(() => setErrorMessage("The convo was not created"));
  }

  function createMessage() {
    localApi
      .post(`/messages`, {
        message: {
          conversation_id: currentConversation,
          text,
        },
      })
      .then((res) => {
        setCurrentMessages([...currentMessages, res.data]);

        setIsCreated(true);
      })
      .catch(() => setErrorMessage(""));
  }

  console.log(currentConversation);
  return (
    <div>
      <Grid container>
        <Grid item>
          <Button
            color="secondary"
            onClick={() => {}}
            variant="outlined"
            component={Link}
            to={{ pathname: `/Profile` }}
          >
            <ArrowBackIosIcon />
          </Button>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.userSidePanel}>
          <Typography variant="h5" className="header-message">
            <Button color="secondary" align="center" onClick={handleClickOpen}>
              Write a message <CreateIcon />
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Create a Message</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Find a user to message and then write in a title
                </DialogContentText>

                <TextField
                  autoFocus
                  margin="dense"
                  id="reciever_id"
                  label="email"
                  onChange={(e) => setRecieverEmail(e.target.value)}
                  type="text"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Title of Message"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button onClick={createConversation} color="secondary">
                  Send Message
                </Button>
              </DialogActions>
            </Dialog>
          </Typography>
          <Divider />
          <ConversationList
            onSelectConversation={(id) => {
              setCurrentMessages([]);
              setCurrentConversation(id);
            }}
          />
        </Grid>
        {/* MESSAGE AREA */}
        {currentConversation && (
          <Grid item xs={9}>
            <List className={classes.messageArea}>
              <ListItem button key="1">
                <Grid container>
                  <Grid
                    container
                    component={Paper}
                    className={classes.chatSection}
                  >
                    {currentMessages.map((message) => {
                      return (
                        <Grid item xs={12}>
                          <ListItemText
                            className={classes.textBubble}
                            align="center"
                            primary={message.text}
                            secondary={message.created_at}
                          ></ListItemText>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <Divider />
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  id="text"
                  label="type"
                  fullWidth
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid xs={1} align="right">
                <Fab color="primary" aria-label="add">
                  <Button
                    color="secondary"
                    align="center"
                    onClick={createMessage}
                  >
                    <SendIcon />
                  </Button>
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        )}

        {/* MESSAGE AREA */}
      </Grid>
    </div>
  );
};

export default Inbox;

