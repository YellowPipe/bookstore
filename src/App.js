import React from 'react';
import './App.css';
import BookList from './components/booklist/booklist';
import BookForm from './components/book-form/book-form';
import Header from './components/header/header';

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
