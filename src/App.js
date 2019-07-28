import React, { useEffect } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import SignUp from './pages/sign-up';
import Header from './components/header/header';
import SignIn from './components/sign-in/sign-in';

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
  	  <div>
	  	  <Header />
  	  	  <Switch>
  	      	<Route exact path='/' component={requireSignIn(Homepage)} />
  	      	<Route path='/signup' component={requireSignedOut(SignUp)} />
            <Route path='/signin' component={requireSignedOut(SignIn)} />
  	      </Switch>
      </div>
    );
  }
}

export default App;
