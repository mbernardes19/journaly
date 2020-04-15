import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home'
import "./App.css";
import Entries from './pages/Entries'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/entries">
            <Entries/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
