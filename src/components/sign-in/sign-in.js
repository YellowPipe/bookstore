import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/session';
import './sign-in.styles.scss';

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
  		this.props.dispatch(login(this.state));
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

const mapStateToProps = state => ({
  loading: state.session.loading,
  error: state.session.error
});

export default connect(mapStateToProps)(SignIn); 