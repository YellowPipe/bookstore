import React from 'react';
import BookList from '../components/booklist/booklist';
import BookForm from '../components/book-form/book-form';

class Homepage extends React.Component {
	render() {
		return(
			<div className='Homepage'>
		        <BookList />
		        <BookForm />
	        </div>
		)
	}
}

export default Homepage;