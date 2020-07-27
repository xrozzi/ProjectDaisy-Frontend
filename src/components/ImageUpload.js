import React, { useState } from "react";
import App from "./App";
import { Redirect } from "react-router-dom";
import axios from "axios";
import localApi from "../apis/localapi";

export default class NewItemForm extends React.Component {

    state = {
        image: {}
    }

    onChange = (event) => {
        event.persist()
        this.setState(() => {
            return {
                [event.target.name]: event.target.files[0]
            }
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image)
        localApi.post(`/images`,
            { body: form }
        )
    }
    render() {
        return (
            <div className="form">
                <h1>New Upload</h1>
                <form onSubmit={this.onSubmit}>
                    <label>Image Upload</label>
                    <input type="file" name="image" onChange={this.onChange} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}