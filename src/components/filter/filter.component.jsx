import React from 'react';
import './filter.styles.scss';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/filter/filter.actions'; 

const Filter = ({changeFilter}) => (
	<div className='filter-box'>
		<div className='categories'>
			<p className='category' value="All" onClick ={() => changeFilter("") }>All</p>
			<p className='category' value="Action" onClick ={() => changeFilter("Action") } >Action</p>
		    <p className='category' value="Biography" onClick ={() => changeFilter("Biography") } >Biography</p>
		    <p className='category' value="History" onClick ={() => changeFilter("History") } >History</p>
		    <p className='category' value="Horror" onClick ={() => changeFilter("Horror") } >Horror</p>
		    <p className='category' value="Kids" onClick ={() => changeFilter("Kids") } >Kids</p>
		    <p className='category' value="Learning" onClick ={() => changeFilter("Learning") } >Learning</p>
		    <p className='category' value="Sci-Fi" onClick ={() => changeFilter("Sci-Fi") } >Sci-Fi</p>
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
	changeFilter: filter => dispatch(changeFilter(filter))
})

export default connect(null, mapDispatchToProps)(Filter);