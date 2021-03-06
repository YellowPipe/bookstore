import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/session';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: ''
		}
	}

	handleChange = event => {
		const {name, value } = event.target;
		this.setState({ [name]: value });
	}

	submitForm = (e) => {
	    e.preventDefault()
	    this.props.register(this.state);  
	}

	render() {
		return (
			<form className='sign-in-form' onSubmit={(e) => this.submitForm(e) } >
			  <h3>Register</h3>
			  <input required className='title-field' placeholder='Username' type="text" name="username" value={this.state.username} onChange={this.handleChange} />
			  <input required className='title-field' placeholder='Email' type="email" name="email" value={this.state.email} onChange={this.handleChange} />
			  <input required className='title-field' placeholder='Password' type="password" name="password" value={this.state.password} onChange={this.handleChange} />
			  <input required className='title-field' placeholder='Pssword confirmation' type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} />
			  <input className='submitButton' type="submit" />
			</form>
		)
	}
}

export default connect(null, {register})(SignUp); 