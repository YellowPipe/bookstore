import React from 'react';
import { connect } from 'react-redux';
import { removeBook, changeStatus } from '../../redux/actions/library';
import './book.styles.scss';

const Book = ({id, title, category, read, removeBook, changeStatus }) => {

	const handleDelete = (id) => {
		fetch(`http://localhost:3000/api/v1/books/${id}`, {
		  method: 'DELETE'
		})
		.then(removeBook(id));
	}

	const handleStatusChange = (id) => {
		fetch(`http://localhost:3000/api/v1/books/${id}`, {
		  method: 'PUT',
		  headers: {'Content-Type':'application/json'},
		   body: JSON.stringify({
		    "read": !read,
		    "title": title,
		    "category": category
		   })
		})
		.then(changeStatus(id));
	}

	return (
		<div className='book'>
			<div className='info'>
				<p className='category'>{category}</p>
				<p className='title'>{title}</p>
				<p className='delete-book' onClick={() => handleDelete(id)} >Delete</p>
			</div>
			<div className='progress'>
				<button onClick={() => handleStatusChange(id)} className={`${read ? 'read' : 'in-progress'} button`}>
					{read ? 'Finished' : 'In progress'}
				</button>
			</div>
		</div>
)}

export default connect(null, { removeBook, changeStatus })(Book);