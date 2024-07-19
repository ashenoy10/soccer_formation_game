import React, { useState } from 'react';
import Select from 'react-select';

const PlayerSelect = ({ players, onPlayerSelect }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedPlayer(selectedOption);
    onPlayerSelect(selectedOption);
  };

  const options = players.map(player => ({
    value: player.id,
    label: player.name,
    ...player
  }));

  return (
    <div className="player-select">
      <Select 
        options={options}
        onChange={handleChange}
        value={selectedPlayer}
        placeholder="Select a player"
      />
      {selectedPlayer && (
        <div className="selected-player">
          <img src={selectedPlayer.img} alt={selectedPlayer.name} />
          <p>{selectedPlayer.name}</p>
        </div>
      )}
    </div>
  );
};

export default PlayerSelect;
