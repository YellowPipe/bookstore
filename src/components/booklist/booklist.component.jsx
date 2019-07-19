import React from 'react';
import Book from '../book/book.component';
import { connect } from 'react-redux';

const BookList = ({books}) => (
	<div>
		{ books.map(({id, title, category}) => (
			<Book key={id} id={id} title={title} category={category} />
		))
		}
	</div>
)

const mapStateToProps = ({ library: {books} }) => ({
	books
})
	


export default connect(mapStateToProps)(BookList);