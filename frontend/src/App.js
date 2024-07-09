// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
