import React from 'react';

const PlayerCard = ({ position, gridArea }) => {
  return (
    <div className="player-card" style={{ gridArea }}>
      <p>{position}</p>
      <img src="https://via.placeholder.com/100x150" alt="Player" />
    </div>
  );
};

export default PlayerCard;
