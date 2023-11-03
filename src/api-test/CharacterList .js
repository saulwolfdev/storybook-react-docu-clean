import React, { useState, useEffect } from 'react';
import './CharacterList.css';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedOption, setSelectedOption] = useState('name');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <select className="character-select" onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="name">Nombre</option>
        <option value="image">Imagen</option>
      </select>
      <ul className='character-list'>
        {characters.map((character) => (
          <li key={character.id}>
            {selectedOption === 'name' ? character.name : <img src={character.image} alt={character.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
