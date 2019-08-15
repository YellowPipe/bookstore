import React from 'react';
import Book from '../book/book';
import { connect } from 'react-redux';
import './booklist.styles.scss'
import { setLibrary } from '../../redux/actions/library';
// import { API_URL } from '../../constants/constants';

class BookList extends React.Component {
	render () {
		const { books } = this.props;
		return (
			<div className='booklist'>
				{ books.map(({id, title, category, read}) => (
					<Book key={id} id={id} title={title} category={category} read={read} />
				))
				}
			</div>
	)}
}

const mapStateToProps = state => ({
 	books: state.library.books.filter(book => state.filter.filter.length === 0 ? true : book.category === state.filter.filter),
  	filter:  state.filter.filter
})
	
export default connect(mapStateToProps, { setLibrary })(BookList);