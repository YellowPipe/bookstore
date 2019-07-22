import React from 'react';
import Book from '../book/book';
import { connect } from 'react-redux';
import './booklist.styles.scss'

const BookList = ({books, filter}) => (
		<div className='booklist'>
			{ books.map(({id, title, category, read}) => (
				<Book key={id} id={id} title={title} category={category} read={read} />
			))
			}
		</div>
);

const mapStateToProps = ({ library: {books}, filter: {filter} }) => ({
	books: books.filter(book => filter.length === 0 ? true : book.category === filter),
	filter
})
	
export default connect(mapStateToProps)(BookList);