import React, { useEffect } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import SignInUp from './pages/sign-in-up/sign-in-up';
import Header from './components/header/header';
// import SignIn from './pages/sign-in/sign-in';

class App extends React.Component {
  
  render() {
   
    const requireSignIn = Component =>
      compose(
        withRouter,
        connect(state => ({ authUser: state.reduxTokenAuth.currentUser })),
      )(({ authUser, ...props }) => {
        useEffect(() => {
          if (!authUser.isSignedIn && !authUser.isLoading) props.history.push('./signin')
        }, [authUser])
        return authUser ? <Component {...props} /> : null
    })

    const requireSignedOut = Component =>
      compose(
        withRouter,
        connect(state => ({ authUser: state.reduxTokenAuth.currentUser })),
      )(({ authUser, ...props }) => {
        useEffect(() => {
          if (authUser.isSignedIn && !authUser.isLoading) props.history.push('./')
        }, [authUser])
        return authUser ? <Component {...props} /> : null
    })

  	return (
  	  <Switch>
      	<Route exact path='/' component={requireSignIn(Homepage)} />
        <Route path='/signin' component={requireSignedOut(SignInUp)} />
      </Switch>
    );
  }
}

export default App;
