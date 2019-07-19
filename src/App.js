import React from 'react';
import './App.css';
import BookList from './components/booklist/booklist.component';
import BookForm from './components/book-form/book-form.component';
import Filter from './components/filter/filter.component';
function App() {
  return (
    <div>
      <Filter />
      <BookList />
      <BookForm />
    </div>
  );
}

export default App;
