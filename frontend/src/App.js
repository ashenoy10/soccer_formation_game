import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SquadBuilder from './components/SquadBuilder';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const [formation, setFormation] = useState('4-3-3');
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [squad, setSquad] = useState(Array(11).fill(null));

  const playersData = [
    { id: '1', name: 'Player 1', position: 'ST', img: 'https://via.placeholder.com/100x150' },
    { id: '2', name: 'Player 2', position: 'CM', img: 'https://via.placeholder.com/100x150' },
    // Add more players as needed
  ];

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newSquad = Array.from(squad);
    newSquad[result.destination.index] = selectedPlayer;
    setSquad(newSquad);
    setSelectedPlayer(null); // Reset selected player after adding to squad
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar 
          players={playersData} 
          onPlayerSelect={handlePlayerSelect} 
          setFormation={setFormation} 
        />
        <DragDropContext onDragEnd={handleDragEnd}>
          <SquadBuilder formation={formation} squad={squad} />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
