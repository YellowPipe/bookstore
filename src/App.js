import React from 'react';
import './App.css';
import BookList from './components/booklist/booklist.component';
import BookForm from './components/book-form/book-form.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className='app'>
      <Header />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
