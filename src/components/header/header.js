import React from 'react';
import './header.styles.scss';
import Filter from '../filter/filter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleHidden } from '../../redux/actions/filter';

const Header = ({hidden, toggleHidden}) =>{

	return (
		<div className='header'>
			<Link to='/'>
				<h1 className='logo'>Bookstore CMS</h1>
			</Link>
			<div className='options'>
				<p className='option' onClick={toggleHidden}>Categories</p>
				<p className='option'>Sign out</p>
			</div>
			{
				hidden ? null : <Filter />
			}
		</div>
)}

const mapStateToProps = ({ filter, session }) => ({
  hidden: filter.hidden
})

export default connect(mapStateToProps, { toggleHidden })(Header);