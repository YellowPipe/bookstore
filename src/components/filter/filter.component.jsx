import React from 'react';
import './filter.styles.scss';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/filter/filter.actions'; 

const Filter = ({changeFilter}) => (
		<div className='categories'>
			<p value="All" onClick ={() => changeFilter("") }>All</p>
			<p value="Action" onClick ={() => changeFilter("Action") } >Action</p>
		    <p value="Biography" onClick ={() => changeFilter("Biography") } >Biography</p>
		    <p value="History" onClick ={() => changeFilter("History") } >History</p>
		    <p value="Horror" onClick ={() => changeFilter("Horror") } >Horror</p>
		    <p value="Kids" onClick ={() => changeFilter("Kids") } >Kids</p>
		    <p value="Learning" onClick ={() => changeFilter("Learning") } >Learning</p>
		    <p value="Sci-Fi" onClick ={() => changeFilter("Sci-Fi") } >Sci-Fi</p>
		</div>
)

const mapDispatchToProps = dispatch => ({
	changeFilter: filter => dispatch(changeFilter(filter))
})

export default connect(null, mapDispatchToProps)(Filter);