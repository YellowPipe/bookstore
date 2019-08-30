import React from 'react';
import { connect } from 'react-redux';
// import { removeBook, changeStatus } from '../../redux/actions/library';
// import { API_URL } from '../../constants/constants';
import './book.styles.scss';

const Book = ({id, title, category, read}) => (
		<div className='book'>
			<div className='info'>
				<p className='category'>{category}</p>
				<p className='title'>{title}</p>
				<p className='delete-book'  >Delete</p>
			</div>
			<div className='progress'>
				<button className={`${read ? 'read' : 'in-progress'} button`}>
					{read ? 'Finished' : 'In progress'}
				</button>
			</div>
		</div>
)

// export default connect(null, { removeBook, changeStatus })(Book);
export default Book