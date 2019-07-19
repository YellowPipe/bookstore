import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../../redux/library/library.actions';

const Book = ({id, title, category, removeBook}) => (
	<div>
		<p>{id}</p>
		<p>{title}</p>
		<p>{category}</p>
		<button onClick={() => removeBook(id)} >Delete Book</button>
		<hr />
	</div>
)

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(removeBook(bookId))
})

export default connect(null, mapDispatchToProps)(Book);