import React from 'react';
import './header.styles.scss';
import Filter from '../filter/filter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleHidden } from '../../redux/actions/filter';
import { logOutUser } from '../../redux/actions/session';

const Header = ({hidden, toggleHidden, logOutUser}) =>{
	
	const logout = () => {
		sessionStorage.removeItem('jwt');
		logOutUser()
	}

	return (
		<div className='header'>
			<Link to='/'>
				<h1 className='logo'>Bookstore CMS</h1>
			</Link>
			<div className='options'>
				<p className='option' onClick={toggleHidden}>Categories</p>
				<p className='option' onClick={logout}>Sign out</p>
			</div>
			{
				hidden ? null : <Filter />
			}
		</div>
)}

const mapStateToProps = ({ filter, session }) => ({
  hidden: filter.hidden,
  logged_in: session
})

export default connect(mapStateToProps, { toggleHidden, logOutUser })(Header);