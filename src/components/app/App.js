import React from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Homepage from '../homepage/homepage';
import SignInUp from '../sign-in-up/sign-in-up';

class App extends React.Component {
  	render() {
	  	return (
	  	  <Switch>
	      	<Route exact path='/' render = {() => 
              !this.props.session ? 
              <Redirect to='/signin' /> : (
                <Homepage />
                )} /> />
	        <Route path='/signin' render = {() => 
              this.props.session ? 
              <Redirect to='/' /> : (
                <SignInUp />
                )} />
	      </Switch>
	    );
  	}
}

const mapStateToProps = ({ session: {session} }) => ({
	session
})

export default connect(mapStateToProps)(App);
