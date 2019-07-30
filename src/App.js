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

  	return (
  	  <Switch>
      	<Route exact path='/' component={Homepage} />
        <Route path='/signin' component={SignInUp} />
      </Switch>
    );
  }
}

export default App;
