import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";

import AppBar from "@material-ui/core/AppBar";

import Toolbar from "@material-ui/core/Toolbar";

import localApi from "../apis/localapi.js";

import axios from "axios";

const UserSearchBar = () => {
  const [userData, setUserData] = useState([]);
  const [userEmailId, setUserEmailId] = useState([]);

  useEffect(() => {
    localApi.get(`/users`).then((response) => {
      console.log(response.data);
      setUserData(response.data);
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Autocomplete
        className="pding"
        onChange={setUserEmailId}
        id="combo-box-demo"
        options={setUserData}
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
    </div>
  );
};

export default UserSearchBar;
