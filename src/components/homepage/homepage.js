import React from 'react';
import BookList from '../../components/booklist/booklist';
import BookForm from '../../components/book-form/book-form';
import Header from '../../components/header/header';

class Homepage extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<div className='Homepage'>
			        <BookList />
			        <BookForm />
		        </div>
	        </div>
		)
	}
}

export default Homepage;