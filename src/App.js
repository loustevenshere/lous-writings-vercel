import React from 'react';
import './App.css';
import PoemList from './Components/PoemList';

function App() {
 
  return (
    <>
    <div className="welcome_container">
<h1 className="welcome">Welcome</h1>
<p className="welcome_writings">This is a place where I can store my writings</p>
{/* <p>My name is Louis Stevens and I hope you enjoy</p> */}
  </div>
  <div className="poems_list">
<PoemList />
  </div>
</>
  

  );
}

export default App;
