import React from 'react';
import Book from '../book/book.component';
import { connect } from 'react-redux';
import './booklist.styles.scss'

const BookList = ({books, filter}) => {
	let filteredBooks
	if (filter.length) {
		filteredBooks = books.filter( ({category}) => category === filter )
	} else {
		filteredBooks = books
	}

	return (
		<div className='booklist'>
			{ filteredBooks.map(({id, title, category, read}) => (
				<Book key={id} id={id} title={title} category={category} read={read} />
			))
			}
		</div>
)}

const mapStateToProps = ({ library: {books}, filter: {filter} }) => ({
	books,
	filter
})
	


export default connect(mapStateToProps)(BookList);