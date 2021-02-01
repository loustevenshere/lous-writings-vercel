import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import PoemList from './Components/PoemList';

function App() {
 
  return (
    <>
<h1 className="title">Welcome</h1>
<p>This is a place where I can store my writings</p>
<p>My name is Louis Stevens and I hope you enjoy</p>
<PoemList />
    </>
  );
}

export default App;
