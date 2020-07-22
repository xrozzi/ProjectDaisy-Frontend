import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateGitListing from "./CreateGitListing";
import GitCollaborations from "./GitCollaborations";

import theme from "./ui/Theme";
import Header from "../components/ui/Header";
import LogIn from "./LogIn";
import SignUp from "./SignUp"
import PrivateRoute from "./PrivateRoute"

function App() {
  const [userToken, setUserToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setUserToken(token)
    }
  }, [])

  const handleAuth = (token) => {
    localStorage.setItem('token', token)
    setUserToken(token)
  }

  const handleLogout = () => {
    setUserToken(null)
    localStorage.removeItem('token')
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header handleLogout={handleLogout} loggedIn={userToken} />
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
          <Route exact path="/Login" component={() => <LogIn loggedIn={userToken}  onLogin={handleAuth}/>} />
          <Route exact path="/SignUp" component={() => <SignUp loggedIn={userToken} onLogin={handleAuth}/>} />
          <PrivateRoute
            exact
            path="/CreateGitListing"
          >
            <CreateGitListing />
          </PrivateRoute>
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
