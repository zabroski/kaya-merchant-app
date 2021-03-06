import React from 'react'
import authService from '../../lib/authService'
import { Route, Redirect } from 'react-router-dom'


function ProtectedRoute ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authService.isAuthenticated("Protected") ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    )
  }
  
  export default ProtectedRoute