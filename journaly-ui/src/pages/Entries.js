import React from 'react';
import './Home.css';
import Entry from '../components/Entry/Entry'

function Entries() {  
  return (
    <div>
      <p class="header-text">Entries</p>
      <Entry content={"Batatinha quando nasce"} date={new Date().toLocaleString()}/>
    </div>
  );
}

export default Entries;