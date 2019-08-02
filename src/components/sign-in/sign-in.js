import React from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../../redux/actions/session';
import './sign-in.styles.scss';
import { API_URL } from '../../constants/constants';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	submitForm = (event) => {
	    event.preventDefault();
  		fetch(`${API_URL}/user_token`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'}, 
        body: JSON.stringify({auth: this.state})
      })
      .then(response => response.json())
      .then(response => {
          sessionStorage.setItem('jwt', response.jwt)
        })
      .then((response) => this.props.loginSuccess())
      .catch(error => {
         console.log(error);
      });
	}

	render() {
		return (
			<form className='sign-in-form' onSubmit={(e) => this.submitForm(e) } >
			  <h3>Sign In</h3>
			  <input required className='title-field' placeholder='Email' type="email" name="email" value={this.state.email} onChange={this.handleChange} />
			  <input required className='title-field' placeholder='Password' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
			  <input className='submitButton' type="submit" />
			</form>
		)
	}
}

export default connect(null, { loginSuccess })(SignIn);