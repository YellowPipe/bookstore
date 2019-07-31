import React from 'react';
import Book from '../book/book';
import { connect } from 'react-redux';
import './booklist.styles.scss'
import { setLibrary } from '../../redux/actions/library';

class BookList extends React.Component {

	componentWillMount() {
		fetch('http://localhost:3000/api/v1/books', {
	      method: 'GET',
	      headers: {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
	    })
		.then(res => res.json())
		.then(data => this.props.setLibrary(data))
		.catch(err => {console.log(err)});
	}

	render () {
		const {books} = this.props;
		return (
			<div className='booklist'>
				{ books.map(({id, title, category, read}) => (
					<Book key={id} id={id} title={title} category={category} read={read} />
				))
				}
			</div>
	)}
}

const mapStateToProps = ({ library: {books}, filter: {filter} }) => ({
	books: books.filter(book => filter.length === 0 ? true : book.category === filter),
	filter
})
	
export default connect(mapStateToProps, { setLibrary })(BookList);