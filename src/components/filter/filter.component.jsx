import React from 'react';
import './filter.styles.scss';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/filter/filter.actions';
import { toggleHidden } from '../../redux/filter/filter.actions';
import { CATEGORIES } from '../../constants/constants';

const Filter = ({changeFilter, toggleHidden}) => (
	<div className='filter-box' onClick={toggleHidden}>
		<div className='categories'>
			<p className='category' value="All" onClick ={() => changeFilter("") }>All</p>
			{
				CATEGORIES.map((category, i) => (
					<p key={i} className='category' onClick ={() => changeFilter(category) }>{category}</p>
				))
			}
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
	changeFilter: filter => dispatch(changeFilter(filter)),
	toggleHidden: () => dispatch(toggleHidden())
})

export default connect(null, mapDispatchToProps)(Filter);