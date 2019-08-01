import React from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../redux/actions/library';
import './book-form.styles.scss';
import { CATEGORIES } from '../../constants/constants';

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
		const { title, category } = this.state; 
		fetch('http://localhost:3000/api/v1/books', {
		   	method: 'post',
		   	headers: {
		   		'Content-Type':'application/json',
				'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`
			},
			body: JSON.stringify({
			    "title": title,
			    "category": category
		   })
		})
		.then(res => res.json())
		.then(book => {this.props.addBook(book)})
		.catch(err => {console.log(err)});

		this.setState({
			title: '',
			category: 'Action'
		})
	}

	render() {
		return (
			<form className='form' onSubmit={this.handleSubmit} >
			  <input required className='title-field' placeholder='Book Title' type="text" name="title" value={this.state.title} onChange={this.handleChange} />
			  <select required className='category' name="category" value={this.state.category} onChange={this.handleChange} >
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