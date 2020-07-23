import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import localApi from "../apis/localapi";

class GitCollaborations extends React.Component {
  state = {
    listingArray: [],
  };

  requestListings = () => {
    localApi.get(`git_collaborations`).then((res) => {
      console.log(res);
      this.setState({ listingArray: res.data });
    });
  };

  componentDidMount() {
    this.requestListings();
  }

  render() {
    return (
      <div className="ui grid">
        {this.state.listingArray.map((gitCollaboration) => (
          <div className="ui card">
            <div className="ui content header">
              <b>{gitCollaboration.title}</b>
            </div>
            <div className="ui content">
              <b>description</b> {gitCollaboration.description}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default GitCollaborations;
