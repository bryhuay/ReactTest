import React from 'react';

import logo from './logo.svg';
import Books from './components/books'
import './App.css';

function App() {
  const [books, setBooks] = React.useState([])
  return (
    <div className="App">
       <div className="Head">
         <h1 className='Title'>BEST SELLER ALL TIMES </h1>
         <input type='text' className="Search"></input>
       </div>
       <div className="Content">
         <Books></Books>
       </div>
    </div>
  );
}

export default App;
