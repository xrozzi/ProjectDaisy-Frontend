import React, { useState, useEffect } from "react";

import Homepage from "./Home/Homepage";
import Inbox from "./Inbox";
import theme from "./ui/Theme";
import Header from "../components/ui/Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ImageUpload from "./ImageUpload";
import UserProfile from "./UserProfile";
import MemberProfile from "./MemberProfile";
import PrivateRoute from "./PrivateRoute";
import Footer from "../components/ui/Footer";
import Autocomplete from "@material-ui/lab/Autocomplete";
import localApi from "../apis/localapi";

import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateGitListing from "./CreateGitListing";
import GitCollaborations from "./GitCollaborations";
import UserSearchBar from "./UserSearchBar";

function App() {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUserToken(token);
    }
  }, []);

  const handleAuth = (token) => {
    localStorage.setItem("token", token);
    console.log("Auth runs", token);
    setUserToken(token);
  };

  const handleLogout = () => {
    setUserToken(null);
    localStorage.removeItem("token");
  };

  // TEST

 

  // TEST


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header handleLogout={handleLogout} loggedIn={userToken} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <Homepage />
              </div>
            )}
          />
          <Route
            exact
            path="/GitCollaborations"
            component={() => (
              <div>
                <GitCollaborations />
              </div>
            )}
          />
          <Route
            exact
            path="/Forum"
            component={() => <div>{/* <ViewForums /> */}</div>}
          />

          <Route
            exact
            path="/Inbox"
            component={() => (
              <div>
                <Inbox />
              </div>
            )}
          />

          <Route exact path="/Meetups" component={() => <div>Meetups</div>} />
          <Route
            exact
            path="/searchbar"
            component={() => (
              <div>
                <UserSearchBar />
              </div>
            )}
          />
          <Route exact path="/Inbox" component={() => <div>Inbox</div>} />
          <Route
            exact
            path="/Login"
            component={() => (
              <LogIn loggedIn={userToken} onLogin={handleAuth} />
            )}
          />
          <Route
            exact
            path="/SignUp"
            component={(props) => (
              <SignUp {...props} loggedIn={userToken} onLogin={handleAuth} />
            )}
          />
          <Route
            exact
            path="/Images"
            component={() => (
              <div>
                <ImageUpload />
              </div>
            )}
          />
          <PrivateRoute exact path="/CreateGitListing">
            <CreateGitListing />
          </PrivateRoute>
          <Route
            exact
            path="/AboutGitCollabs"
            component={() => <div>What is a Git Collab?</div>}
          />
          <Route exact path="/userProfile" component={UserProfile} />
          <Route
            exact
            path="/users/:id"
            render={(props) => <MemberProfile userId={props.match.params.id} />}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
