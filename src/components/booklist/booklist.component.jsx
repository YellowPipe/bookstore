import React from 'react';
import Book from '../book/book.component';
import { connect } from 'react-redux';

const BookList = ({books, filter}) => {
	let filteredBooks
	if (filter.length) {
		filteredBooks = books.filter( ({category}) => category === filter )
	} else {
		filteredBooks = books
	}

	return (
		<div>
			{ filteredBooks.map(({id, title, category}) => (
				<Book key={id} id={id} title={title} category={category} />
			))
			}
		</div>
)}

const mapStateToProps = ({ library: {books}, filter: {filter} }) => ({
	books,
	filter
})
	


export default connect(mapStateToProps)(BookList);