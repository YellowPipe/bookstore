import React from 'react';
import './header.styles.scss';
import Filter from '../filter/filter';
import { connect } from 'react-redux';
import { toggleHidden } from '../../redux/actions/filter';

const Header = ({hidden, toggleHidden}) => (
	<div className='header'>
		<h1 className='logo'>Bookstore CMS</h1>
		<div className='options'>
			<p className='option'>Books</p>
			<p className='option' onClick={toggleHidden}>Categories</p>
			<p className='option'>Sign out</p>
		</div>
		{
			hidden ? null : <Filter />
		}
	</div>
)

const mapStateToProps = ({ filter }) => ({
  hidden: filter.hidden
})

export default connect(mapStateToProps, { toggleHidden })(Header);