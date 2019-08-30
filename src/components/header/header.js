import React from 'react';
import './header.styles.scss';
import Filter from '../filter/filter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleHidden } from '../../redux/actions/filter';
import { logOut } from '../../redux/actions/session';

const Header = ({hidden, toggleHidden, logOut}) =>{
	
	const clearUser = () => {
		sessionStorage.removeItem('jwt');
		logOut()
	}

	return (
		<div className='header'>
			<Link to='/'>
				<h1 className='logo'>Bookstore CMS</h1>
			</Link>
			<div className='options'>
				<p className='option' onClick={toggleHidden}>Categories</p>
				<p className='option' onClick={clearUser}>Sign out</p>
			</div>
			{
				hidden ? null : <Filter />
			}
		</div>
)}

const mapStateToProps = ({ filter }) => ({
  hidden: filter.hidden
})

export default connect(mapStateToProps, { toggleHidden, logOut })(Header);