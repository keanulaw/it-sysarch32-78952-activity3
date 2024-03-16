import React, { useState } from 'react';

const Pokedex = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="pokedex-container">
      
      <div className="language-buttons">
        <button
          className="language-button"
          style={{ border: '1px solid black', backgroundColor: 'white' }}
          onClick={() => handleLanguageChange('English')}
        >
          English
        </button>
        <button
          className="language-button"
          style={{ border: '1px solid black', backgroundColor: 'white' }}
          onClick={() => handleLanguageChange('Japanese')}
        >
          Japanese
        </button>
        <button
          className="language-button"
          style={{ border: '1px solid black', backgroundColor: 'white' }}
          onClick={() => handleLanguageChange('Chinese')}
        >
          Chinese
        </button>
        <button
          className="language-button"
          style={{ border: '1px solid black', backgroundColor: 'white' }}
          onClick={() => handleLanguageChange('French')}
        >
          French
        </button>
      </div>
   

    </div>
  );
};

export default Pokedex;

