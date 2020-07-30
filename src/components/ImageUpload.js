import React, { useState } from "react";
import App from "./App";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import localApi from "../apis/localapi";

export default class NewItemForm extends React.Component {
  state = {
    image: {},
  };

  onChange = (event) => {
    event.persist();
    this.setState(() => {
      return {
        image: event.target.files[0],
      };
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.image.value);
    const formData = new FormData();
    formData.set("image", this.state.image);
    window.location = "/profile";

    localApi.post(`/images`, formData);
  };
  render() {
    return (
      <div className="form">
        <h1>Upload Profile Picture</h1>
        <form onSubmit={this.onSubmit}>
          <label>Image Upload</label>
          <input type="file" name="image" onChange={this.onChange} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
