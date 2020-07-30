import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import axios from "axios";

// styles for the page
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// validates the email for the user
const emailValidator = (email) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
const passwordValidator = (password) => password.length >= 8;
const nonEmptyValidator = (field) => !!field.length;

const validationMethods = {
  email: emailValidator,
  password: passwordValidator,
  firstname: nonEmptyValidator,
  lastname: nonEmptyValidator,
};

const fields = ["email", "password", "firstname", "lastname"];

export default function SignUp({ loggedIn, onLogin }) {
  const classes = useStyles();
  //const [isFormValid, setFormValid] = useState(false)
  // sets the form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });
  // sets the validation data
  const [validationData, setValidationData] = useState({
    email: true,
    password: true,
    firstname: true,
    lastname: true,
  });

  // function to validate the form data
  const validateFields = () => {
    const validationResult = fields.reduce(
      (acc, val) => ({ ...acc, [val]: validationMethods[val](formData[val]) }),
      {}
    );
    setValidationData(validationResult);
    return Object.values(validationResult).every((res) => res);
  };
  // sets value target for handling input change
  const handleFormInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (!validationData[e.target.name]) {
      setValidationData({
        ...validationData,
        [e.target.name]: true,
      });
    }
  };

  // method to send post request when user signs up, takes thier firstname, lastname, email and password
  async function handleSignUp(e) {
    e.preventDefault();

    if (!validateFields()) {
      return;
    }

    const response = await axios.post(
      `https://projectdaisy.herokuapp.com/users`,
      {
        user: {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
        },
      }
    );

    const response = await axios.post(`https://projectdaisy.herokuapp.com/users`, {
      user: {
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
      },
    });
    const res = await axios.post(`https://projectdaisy.herokuapp.com/user_token`, {
      auth: {
        email: formData.email,
        password: formData.password,
      },
    });

    console.log("response", res);
    onLogin(res.data.jwt);
  }

  if (loggedIn) {
    return <Redirect to="/CreateGitListing" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstname"
                variant="outlined"
                required
                fullWidth
                id="firstname"
                type="firstName"
                label="First Name"
                onChange={handleFormInputChange}
                value={formData.firstName}
                autoFocus
                error={!validationData.firstname}
                helperText={!validationData.firstname && "Must not be empty"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                type="lastName"
                autoComplete="lname"
                onChange={handleFormInputChange}
                value={formData.lastname}
                error={!validationData.lastname}
                helperText={!validationData.lastname && "Must not be empty"}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                error={!validationData.email}
                helperText={!validationData.email && "Invalid email format"}
                autoComplete="email"
                onChange={handleFormInputChange}
                value={formData.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                error={!validationData.password}
                helperText={
                  !validationData.password &&
                  "Password must be at least 8 characters"
                }
                autoComplete="current-password"
                onChange={handleFormInputChange}
                value={formData.password}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="../login" color="#4F7CAC">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
