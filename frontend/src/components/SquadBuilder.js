import React from 'react';
import PlayerCard from './PlayerCard';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const formations = {
  '4-3-3': {
    positions: ['LW', 'ST', 'RW', 'CM', 'CM', 'CM', 'LB', 'CB', 'CB', 'RB', 'GK'],
    gridAreas: [
      '1 / 2 / 2 / 3', // LW
      '1 / 5 / 2 / 5', // ST
      '1 / 8 / 2 / 8', // RW
      '2 / 3 / 3 / 3', // CM
      '2 / 5 / 3 / 5', // CM
      '2 / 7 / 3 / 7', // CM
      '3 / 1 / 4 / 1', // LB
      '3 / 4 / 4 / 4', // CB
      '3 / 6 / 4 / 6', // CB
      '3 / 9 / 4 / 9', // RB
      '4 / 5 / 5 / 5', // GK
    ],
  },
  '4-4-2': {
    positions: ['LM', 'RM', 'ST', 'ST', 'CM', 'CM', 'LB', 'CB', 'CB', 'RB', 'GK'],
    gridAreas: [
      '2 / 1 / 3 / 2', // LM
      '2 / 9 / 3 / 10', // RM
      '1 / 4 / 2 / 5', // ST
      '1 / 6 / 2 / 7', // ST
      '2 / 4 / 3 / 5', // CM
      '2 / 6 / 3 / 7', // CM
      '3 / 1 / 4 / 2', // LB
      '3 / 4 / 4 / 5', // CB
      '3 / 6 / 4 / 7', // CB
      '3 / 9 / 4 / 10', // RB
      '4 / 5 / 5 / 5', // GK
    ],
  },
  '3-5-2': {
    positions: ['LM', 'RM', 'ST', 'ST', 'CDM', 'CDM', 'CAM', 'CB', 'CB', 'CB', 'GK'],
    gridAreas: [
      '2 / 1 / 3 / 2', // LM
      '2 / 9 / 3 / 10', // RM
      '1 / 4 / 2 / 5', // ST
      '1 / 6 / 2 / 7', // ST
      '3 / 4 / 4 / 5', // CDM
      '3 / 6 / 4 / 7', // CDM
      '2 / 5 / 3 / 5', // CAM
      '4 / 3 / 5 / 4', // CB
      '4 / 5 / 5 / 5', // CB
      '4 / 7 / 5 / 8', // CB
      '5 / 5 / 6 / 5', // GK
    ],
  },
};

const SquadBuilder = ({ formation, squad }) => {
  const { positions, gridAreas } = formations[formation] || {};

  return (
    <div className="squad">
      <div className="squad-grid">
        {positions.map((pos, index) => (
          <Droppable droppableId={`droppable-${index}`} key={index}>
            {(provided) => (
              <div
                className="player-card-slot"
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ gridArea: gridAreas[index] }}
              >
                {squad[index] ? (
                  <Draggable draggableId={squad[index].id} index={index} key={squad[index].id}>
                    {(provided) => (
                      <div
                        className="player-card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>{squad[index].position}</p>
                        <img src={squad[index].img} alt={squad[index].name} />
                      </div>
                    )}
                  </Draggable>
                ) : (
                  <div className="empty-slot">Drop Player Here</div>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </div>
  );
};

export default SquadBuilder;
