import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../redux/actions/library';
import './book-form.styles.scss';
import { CATEGORIES } from '../../constants/constants';

class BookForm extends React.Component {
	state = {
		title: '',
		category: 'Action'
	}

	 

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addBook(this.state)
		this.setState({
			title: '',
			category: 'Action'
		})
	}

	render() {
		const { title, category } = this.state;
		return (
			<form className='form' onSubmit={this.handleSubmit} >
			  <input required className='title-field' placeholder='Book Title' type="text" name="title" value={title} onChange={this.handleChange} />
			  <select required className='category' name="category" value={category} onChange={this.handleChange} >
			    {
					CATEGORIES.map((category, i) => (
						<option key={i} value={category}>{category}</option>
					))
				}
			  </select>
			  <input className='submitButton' type="submit" />
			</form>
		)
	}
}

export default connect(null, { addBook })(BookForm);