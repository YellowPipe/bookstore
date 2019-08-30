import React from 'react';  
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest}
      render={() =>
        isAuthenticated ? (
          <Component />
        ) : (
          <Redirect to='signin'/>
        )
      }
    />
);

const mapStateToProps = state => ({
  isAuthenticated: state.session.session
})

export default connect(mapStateToProps)(ProtectedRoute); 