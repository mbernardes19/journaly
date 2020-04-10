import React, { useRef, useState } from 'react';
import './App.css';
import TextEditor from './components/Editor';
import Navbar from './components/Navbar';
import Notify from './components/Notify';
import EventEmitter from './EventEmitter';

function App() {
  const notify = useRef(null);
  const [data, setData] = useState({})

  EventEmitter.subscribe('notification', (notification) => {
    setData(notification)
  })

  return (
    <div className="App">
      <Navbar/>
      <p class="header-text">Create an entry for today</p>
      <TextEditor/>
      <Notify ref={notify} data={data}/>
    </div>
  );
}

export default App;
