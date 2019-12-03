import React from 'react';
import { connect } from 'react-redux';
import './sign-in-up.styles.scss';
import SignIn from '../sign-in/sign-in';
import SignUp from '../sign-up/sign-up';
import { ReactComponent as Loading } from '../../assets/loading.svg';

const SignInUp = ({loading}) => (
	<div>
		{ loading ? <Loading className='loading' /> : null}
		<h1 className='welcome'> Welcome to Bookstore CMS</h1>
		<div className='sign-in-up'>
			<SignIn />
			<div className='demo-user-div'>
				<p>Demo user:</p>
				<p>email: test@mail.com</p>
				<p>password: password</p>
			</div>
			<SignUp />
		</div>
	</div>
);

const mapStateToProps = state => ({
	loading: state.session.loading,
	error: state.session.error
});

export default connect(mapStateToProps)(SignInUp); 