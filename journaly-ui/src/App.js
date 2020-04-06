import React from 'react';
import './App.css';
import TextEditor from './components/Editor';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p class="header-text">Create an entry for today</p>
      <TextEditor/>
    </div>
  );
}

export default App;
