import React from 'react';
import { connect } from 'react-redux'
// import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
// import SignInUp from './components/sign-in-up/sign-in-up';
// import ProtectedRoute from './components/protected-route/protected-route';

class App extends React.Component {

  	render() {
	  	return (
        <Homepage />
	  	  // {<Switch>
                  // <ProtectedRoute exact path="/" component={Homepage} redirectPath='/signin' />
                  // <Route path='/signin'component={SignInUp}/>
                // </Switch>}
	    );
  	}
}

const mapStateToProps = ({ session: {session} }) => ({
	session
})

export default connect(mapStateToProps)(App);
