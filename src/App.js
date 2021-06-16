import React from 'react';
import './App.css';
import PoemList from './Components/PoemComponents/PoemList';
import NoteList from './Components/NoteComponents/NoteList';
import DreamList from './Components/DreamComponents/DreamList';
import { Route, useHistory } from 'react-router-dom';

function App() {

  const history = useHistory()

  const poempage = () => {
    history.push('/poems')
  }

  const notepage = () => {
    history.push('/notes')
  }

  const dreampage = () => {
    history.push('/dreams')
  }
 
  return (
    <>

  <Route exact path='/'>
 <div className="header">
 <h1 className="title">Lou's Mind</h1>
<h4 onClick={poempage}>Poems</h4>
<h4 onClick={notepage}>Notes</h4>
<h4 onClick={dreampage}>Dreams</h4>
<p>Click any of the options above to enter</p>
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
