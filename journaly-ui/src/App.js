import React from 'react';
import './App.css';
import TextEditor from './components/Editor/Editor';
import Navbar from './components/Navbar/Navbar';
import Notify from './components/Notify/Notify';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <p class="header-text">Create an entry for today</p>
      <TextEditor/>

      <Notify position="right"/>
    </div>
  );
}

export default App;
