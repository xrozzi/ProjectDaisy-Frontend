import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import localApi from "../apis/localapi";
import { Divider } from "@material-ui/core";

const MemberProfile = (props) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        localApi.get(`/users/${props.userId}`)
            .then((response) => {
                setUser(response.data)
            })
    }, [])

    return (

        <div> this dynamic route works yay!</div>
    )


}

export default MemberProfile;