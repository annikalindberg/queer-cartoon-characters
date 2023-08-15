/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
/* import { BASE_URL, API_URL } from 'env'; */

const FilterByPlatform = ({ selectedPlatform, onChange }) => {
  const platforms = [
    'ABC Kids',
    'Disney Afternoon',
    'Toon Disney',
    'Amazon Prime Video',
    'PBS Kids',
    'Cartoon Network',
    'DC Universe',
    'Disney+',
    'Netflix',
    'HBO Max',
    'Discovery Family',
    'The CWs Vortexx',
    'Nickelodeon',
    'Nick Jr.',
    'Nicktoons',
    'NickSplat',
    'NickRewind',
    'Disney Channel',
    'Disney Junior',
    'Disney XD',
    'Ever After High YouTube Channel',
    'Fox Family Channel',
    'HBO Family',
    'Hulu',
    'Kids WB',
    'My Little Pony Official YouTube Channel',
    'Peacock',
    'Peacock Kids YouTube Channel',
    'Rooster Teeth Animation YouTube Channel'
  ];

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="filter-by-platform">
      <label htmlFor="platform">Platform</label>
      <select id="platform" value={selectedPlatform} onChange={handleChange} aria-label="Select platform">
        <option value="">All</option>
        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    </div>
  );
}
export default FilterByPlatform;