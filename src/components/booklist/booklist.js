import React from 'react';
import Book from '../book/book';
import { connect } from 'react-redux';
import './booklist.styles.scss'
import { setLibrary } from '../../redux/actions/library';

class BookList extends React.Component {
	
	componentDidMount() {
		this.props.setLibrary()
	}

	render () {
		return (
			<div className='booklist'>
				{ this.props.books.map(({id, title, category, read}) => (
					<Book key={id} id={id} title={title} category={category} read={read} />
				))
				}
			</div>
		)
	}
}

const mapStateToProps = state => ({
 	books: state.library.books.filter(book => state.filter.filter.length === 0 ? true : book.category === state.filter.filter),
  	filter:  state.filter.filter
})
	
export default connect(mapStateToProps, { setLibrary })(BookList);