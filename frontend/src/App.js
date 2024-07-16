import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SquadBuilder from './components/SquadBuilder';

function App() {
  const [formation, setFormation] = useState('4-3-3');

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar setFormation={setFormation} />
        <SquadBuilder formation={formation} />
      </div>
    </div>
  );
}

export default App;
