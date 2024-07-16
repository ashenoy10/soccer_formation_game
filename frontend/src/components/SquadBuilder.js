import React from 'react';
import PlayerCard from './PlayerCard';

const formations = {
  '4-3-3': {
    positions: ['LW', 'ST', 'RW', 'LCM', 'CM', 'RCM', 'LB', 'CB', 'CB', 'RB', 'GK'],
    gridAreas: [
      '1 / 2 / 2 / 4', // LW
      '1 / 9 / 2 / 11', // ST
      '1 / 16 / 2 / 18', // RW
      '2 / 3 / 3 / 3', // CM
      '2 / 5 / 3 / 5', // CM
      '2 / 7 / 3 / 7', // CM
      '3 / 1 / 4 / 1', // LB
      '3 / 4 / 4 / 4', // CB
      '3 / 6 / 4 / 6', // CB
      '3 / 18 / 4 / 20', // RB
      '4 / 5 / 5 / 5', // GK
    ],
  },
  '4-4-2': {
    positions: ['LW', 'RW', 'ST', 'ST', 'CM', 'CM', 'LB', 'CB', 'CB', 'RB', 'GK'],
    gridAreas: [
      '1 / 1 / 2 / 2', // LW
      '1 / 3 / 2 / 4', // RW
      '2 / 2 / 3 / 3', // ST
      '3 / 2 / 4 / 3', // ST
      '3 / 1 / 4 / 2', // CM
      '3 / 3 / 4 / 4', // CM
      '4 / 1 / 5 / 2', // LB
      '5 / 1 / 6 / 2', // CB
      '5 / 3 / 6 / 4', // CB
      '4 / 3 / 5 / 4', // RB
      '6 / 2 / 7 / 3', // GK
    ],
  },
  // Add other formations here...
};

const SquadBuilder = ({ formation }) => {
  const { positions, gridAreas } = formations[formation] || {};

  return (
    <div className="squad">
      <div className="squad-grid">
        {positions.map((pos, index) => (
          <PlayerCard key={index} position={pos} gridArea={gridAreas[index]} />
        ))}
      </div>
    </div>
  );
};

export default SquadBuilder;
