import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../../redux/library/library.actions';
import './book.styles.scss';

const Book = ({id, title, category, removeBook}) => (
	<div className='book'>
		<div className='info'>
			<p className='category'>{category}</p>
			<p className='title'>{title}</p>
			<p className='delete-book' onClick={() => removeBook(id)} >Delete Book</p>
		</div>
		<div className='progress'>
			<div className='read'>
				<p className='progressText'>Finished</p>
			</div>
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(removeBook(bookId))
})

export default connect(null, mapDispatchToProps)(Book);