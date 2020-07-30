import React, { useState } from "react";
import App from "./App";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    heading: {
        maxWidth: "40em",
        marginTop: "10em",
    },
    arrowContainer: {
        marginTop: "0.5em",
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
        },
    },
    itemContainer: {
        maxWidth: "40em",
    },
}));


export default function AboutGitCollab(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


    const scaleOptions = {
        loop: true,
        autoplay: false,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const documentsOptions = {
        loop: true,
        autoplay: false,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const automationOptions = {
        loop: true,
        autoplay: false,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const uxOptions = {
        loop: true,
        autoplay: false,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };



    return (
        <Grid container direction="column">
            <Grid item container direction="row"
                justify={matchesMD ? "center" : undefined}
                className={classes.rowContainer}>
            </Grid>

            <Grid item container direction="column" className={classes.heading} style={{ marginLeft: "10em" }}>
                <Grid item>
                    <Typography align={matchesMD ? "center" : undefined} variant="h2">
                        What is a Git Collaboration?
                    </Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}