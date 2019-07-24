import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { generateRequireSignInWrapper } from 'redux-token-auth'
import './App.css';
import Homepage from './pages/homepage';
import SignUp from './pages/sign-up';
import Header from './components/header/header';
import SignIn from './components/sign-in/sign-in';

class App extends React.Component {
  
  render() {
   

  	return (
  	  <div>
	  	  <Header />
  	  	  <Switch>
  	      	<Route exact path='/' component={Homepage} />
  	      	<Route path='/signup' component={SignUp} />
            <Route path='/signin' component={SignIn} />
  	      </Switch>
      </div>
    );
  }
}

export default App;
