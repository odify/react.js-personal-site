import React from 'react';
import './App.css';


import {BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home';
import Icon from './Components/Icon';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">
    <Icon />
    <Route path='/' component={Home} exact />
    <Route path='/' component={Contact} exact/>

    </div>
  );
}

export default App;

//underconstruction..........