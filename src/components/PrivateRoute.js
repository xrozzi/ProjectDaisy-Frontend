import React from "react"
import { Route, Redirect } from "react-router-dom"
const isAuthenticated = () => !!localStorage.getItem('token')

export default function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }