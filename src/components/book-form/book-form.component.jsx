import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../redux/library/library.actions';
import './book-form.styles.scss';

class BookForm extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			category: 'Action'
		}
	}

	handleChange = event => {
		const {name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addBook({
			title: this.state.title,
			category: this.state.category,
			id: Math.floor(Math.random() * 1000000)
		})
		this.setState({
			title: '',
			category: 'Action'
		})
	}

	render() {
		return (
			<form className='form' onSubmit={this.handleSubmit} >
			  <input className='title-field' placeholder='Book Title' type="text" name="title" value={this.state.title} onChange={this.handleChange} />
			  <select className='category' name="category" value={this.state.category} onChange={this.handleChange} >
			    <option value="Action">Action</option>
			    <option value="Biography">Biography</option>
			    <option value="History">History</option>
			    <option value="Horror">Horror</option>
			    <option value="Kids">Kids</option>
			    <option value="Learning">Learning</option>
			    <option value="Sci-Fi">Sci-Fi</option>
			  </select>
			  <input className='submitButton' type="submit" />
			</form>
		)
	}
}

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(addBook(book))
})

export default connect(null, mapDispatchToProps)(BookForm);