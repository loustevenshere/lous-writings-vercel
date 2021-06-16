import React from 'react';
import './App.css';
import PoemList from './Components/PoemList';

function App() {
 
  return (
    <>
    <div className="welcome_container">
<h1 className="welcome">Lou's Mind</h1>
<h4>Poems</h4>
<h4>Notes</h4>
<h4>Dreams</h4>
  </div>
  <div className="poems_list">
<PoemList />
  </div>
</>
  

  );
}

export default App;
