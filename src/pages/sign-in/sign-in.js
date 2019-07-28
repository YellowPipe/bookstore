import React from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../redux-token-auth-config';
import './sign-in.styles.scss'

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = event => {
		const {name, value } = event.target;
		this.setState({ [name]: value });
	}

	submitForm = (e) => {
	    e.preventDefault()
	    const { signInUser } = this.props
	    const {
	      email,
	      password,
	    } = this.state
	    signInUser({ email, password })
	      .then(res => {console.log(res)})
	      .catch(err => {console.log(err)})
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

export default connect( null, { signInUser })(SignIn);