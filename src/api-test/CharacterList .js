import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CharacterList.css';

const CharacterList = ({ selectedOption: externalSelectedOption }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedOption, setSelectedOption] = useState(externalSelectedOption );

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

  useEffect(() => {
    if (externalSelectedOption) {
      setSelectedOption(externalSelectedOption);
    }
  }, [externalSelectedOption]);

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

CharacterList.propTypes = {
  selectedOption: PropTypes.oneOf(['name', 'image']),
};

CharacterList.defaultProps = {
  selectedOption: 'name',
};



export default CharacterList;
