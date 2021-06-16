import React from 'react';
import './App.css';
import PoemList from './Components/PoemComponents/PoemList';
import NoteList from './Components/NoteComponents/NoteList';
import DreamList from './Components/DreamComponents/DreamList';
import { Route } from 'react-router-dom';

function App() {
 
  return (
    <>

  <Route exact path='/'>
 <div className="header">
 <h1 className="title">Lou's Mind</h1>
<h4>Poems</h4>
<h4>Notes</h4>
<h4>Dreams</h4>
 </div>
  </Route>

<Route path='/poems'>
<PoemList />
</Route>

<Route path='/notes'>
<NoteList />
</Route>

<Route path='/dreams'>
<DreamList />
</Route>
    </>
  

  );
}

export default App;
