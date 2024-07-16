import React, { useState } from 'react';

const Sidebar = ({ setFormation }) => {
  const [squadName, setSquadName] = useState('');
  const [formation, setFormationState] = useState('4-3-3');

  const handleFormationChange = (e) => {
    const newFormation = e.target.value;
    setFormationState(newFormation);
    setFormation(newFormation); // Pass the selected formation to parent
  };

  return (
    <div className="sidebar">
      <h2>Create Squad</h2>
      <p>1. Minimum one player per squad.</p>
      <p>2. Squad name cannot be empty.</p>
      <p>3. Squad cannot have duplicate players.</p>
      <h3>Squad Name</h3>
      <input 
        type="text" 
        value={squadName}
        onChange={(e) => setSquadName(e.target.value)} 
      />
      <h3>Formation</h3>
      <select value={formation} onChange={handleFormationChange}>
        <option value="4-3-3">4-3-3</option>
        <option value="4-4-2">4-4-2</option>
        <option value="3-5-2">3-5-2</option>
        <option value="4-2-3-1">4-2-3-1</option>
        <option value="5-3-2">5-3-2</option>
      </select>
      <button>Save</button>
      <h3>Player Name</h3>
      <input type="text" />
      <button>Search</button>
    </div>
  );
};

export default Sidebar;