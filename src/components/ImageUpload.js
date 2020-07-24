import React, { useState } from "react";
import axios from "axios";

export default UploadImage {

    state = {
        image: {}
    }

    onChange = (e) => {
        e.persist()
        this.setState(() => {
            return {
                [e.target.name]: e.target.file[0]
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("image", this.state.image))
    }

    render() {
        return (<div className="form" >
            <h1> New Upload </h1>

            <form onSubmit={
                this.onSubmit
            }>

                <label> Image Upload </label>
                <input type="file"
                    name="image"
                    onChange={
                        this.onChange
                    } />

                <input type="submit" />
            </form>
        </div>
        )
    }
}