/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import FilterByPlatform from './FilterByPlatform';
import { API_URL } from '../env';

const CharacterList = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setError(null); // Clear previous errors
        const apiURL = `${API_URL}/characters?platform=${selectedPlatform}`;
        console.log(apiURL);

        const response = await fetch(`${API_URL}/characters?platform=${selectedPlatform}`);

        console.log(response); // Log the response to see its contents

        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }

        const data = await response.json();
        console.log(data); // Log the data to see its contents
        setCharacters(data);
      } catch (error) {
        setError(error.message || 'An error occurred');
      }
    };

    fetchCharacters();
  }, [selectedPlatform]); // This effect will run whenever `selectedPlatform` changes

  return (
    <div>
      <FilterByPlatform platform={selectedPlatform} onChange={setSelectedPlatform} />

      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div>
          {/* Your character list rendering using the `characters` state */}
          {characters.map((character) => (
            <div key={character.character}>
              <p>Platform: {character.platform}</p>
              <h2>{character.character}</h2>
              <p>Show {character.show}</p>
              <p>Gender: {character.gender}</p>
              <p>Studio: {character.studio}</p>
              <p>Respresentation: {character.representation}</p>
              {/* Render character details here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
