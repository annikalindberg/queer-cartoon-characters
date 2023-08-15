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
        console.log('Selected Platform:', selectedPlatform); // Add this line
        console.log('API Response:', response); // Add this line
        console.log('API Response:', response);

        if (!response.ok) {
          throw new Error('Failed to fetch character data');
        }

        const data = await response.json();
        console.log('Data:', data);
        setCharacters(data);
      } catch (error) {
        setError(error.message || 'An error occurred');
      }
    };
    console.log('Selected Platform:', selectedPlatform); // Log the selected platform
    fetchCharacters();
  }, [selectedPlatform]); // This effect will run whenever `selectedPlatform` changes

  console.log('Characters:', characters); // Log the characters array

  return (
    <div>
      <FilterByPlatform platform={selectedPlatform} onChange={setSelectedPlatform} />

      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div>
          {/* Your character list rendering using the `characters` state */}
          {characters.map((character) => (
            <div key={character.character || 'No data to show'}>
              <h2>Character Name: {character.character || 'No data to show'}</h2>
              <p>Platform: {character.platform || 'No data to show'}</p>
              <p>Show {character.show || 'No data to show'}</p>
              <p>Gender: {character.gender || 'No data to show'}</p>
              <p>Studio: {character.studio || 'No data to show'}</p>
              <p>Role: {character.role || 'No data to show'}</p>
              <p>Orientation: {character.orientation || 'No data to show'}</p>
              <p>Diversability: {character.disability || 'No data to show'} </p>
              <p>Studio: {character.studio || 'No data to show'} </p>
              <p>Confirmed by: {character.confirmation || 'No data to show'} </p>
              <p>Diversability: {character.disability || 'No data to show'} </p>
              {/* Render character details here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
