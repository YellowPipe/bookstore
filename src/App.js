import React from 'react';
import './App.css';
import BookList from './components/booklist/booklist.component';
import BookForm from './components/book-form/book-form.component';

function App() {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
