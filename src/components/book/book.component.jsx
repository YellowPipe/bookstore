import React from 'react';
import { connect } from 'react-redux';
import { removeBook, changeStatus } from '../../redux/library/library.actions';
import './book.styles.scss';

const Book = ({id, title, category, read, removeBook, changeStatus }) => (
	<div className='book'>
		<div className='info'>
			<p className='category'>{category}</p>
			<p className='title'>{title}</p>
			<p className='delete-book' onClick={() => removeBook(id)} >Delete</p>
		</div>
		<div className='progress'>
			<button onClick={() => changeStatus(id)} className={`${read ? 'read' : 'in-progress'} button`}>
				{read ? 'Finished' : 'In progress'}
			</button>
		</div>
	</div>
)

const mapDispatchToProps = dispatch => ({
  removeBook: bookId => dispatch(removeBook(bookId)),
  changeStatus: bookId => dispatch(changeStatus(bookId))
})

export default connect(null, mapDispatchToProps)(Book);