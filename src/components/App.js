import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateGitListing from "./CreateGitListing";
import GitCollaborations from "./GitCollaborations";

import theme from "./ui/Theme";
import Header from "../components/ui/Header";
import LogIn from "../components/ui/LogIn";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <LogIn />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route
            exact
            path="/GitCollaborations"
            component={() => (
              <div>
                <GitCollaborations />
              </div>
            )}
          />
          <Route exact path="/Forums" component={() => <div>Forums</div>} />
          <Route exact path="/Meetups" component={() => <div>Meetups</div>} />
          <Route exact path="/Login" component={() => <div>Meetups</div>} />
          <Route exact path="/SignUp" component={() => <div>Login</div>} />
          <Route
            exact
            path="/CreateGitListing"
            component={() => (
              <div>
                <CreateGitListing />
              </div>
            )}
          />
          <Route
            exact
            path="/AboutGitCollabs"
            component={() => <div>What is a Git Collab?</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
