import React, { useState, Component } from "react";

import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import Toolbar from "@material-ui/core/Toolbar";

import localApi from "../apis/localapi.js";

import axios from "axios";

export class UserSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserData: [],
      UserIdd: "",
    };
  }

  componentDidMount() {
    localApi.get(`/users`).then((response) => {
      console.log(response.data);
      this.setState({
        UserData: response.data,
      });
    });
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <Autocomplete
          className="pding"
          onChange={this.state.UserIdd.id}
          id="combo-box-demo"
          options={this.state.UserData}
          getOptionLabel={(option) => option.email}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Auto Complete"
              variant="outlined"
              fullWidth
            />
          )}
        />
        <Button>Find User</Button>
      </div>
    );
  }
}

export default UserSearchBar;
