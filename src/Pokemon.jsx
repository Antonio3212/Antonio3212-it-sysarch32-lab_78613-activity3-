// Pokemon.jsx
import React from 'react';
import './Pokemon.css';

const Pokemon = ({ pokemon, language }) => {
  const { id, name, type, base, image } = pokemon;

  const displayName = name[language] || name.english;

  return (
    <div className="pokemon-card">
      <img className="pokemon-image" src={image} alt={displayName} />
      <div className="pokemon-info">
        <p>ID: {id}</p>
        <p>Name: {displayName}</p>
        <p>Type: {type.join(', ')}</p>
        <p>HP: {base.HP}</p>
        <p>Attack: {base.Attack}</p>
        <p>Defense: {base.Defense}</p>
        <p>Sp. Attack: {base['Sp. Attack']}</p>
        <p>Sp. Defense: {base['Sp. Defense']}</p>
        <p>Speed: {base.Speed}</p>
      </div>
    </div>
  );
};

export default Pokemon;
