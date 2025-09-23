import React from 'react';
import { useNavigate } from 'react-router-dom';
import alphabetsData from '../data/alphabetsData';
import './AlphabetPage.css';

function AlphabetPage() {
  const navigate = useNavigate();

  return (
    <div className="alphabet-page">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <h2>Learn Alphabets (A - Z)</h2>

      <div className="alphabet-grid">
        {alphabetsData.map((item, index) => (
          <div key={index} className="alphabet-card">
            <h3>{item.letter}</h3>
            <img src={item.image} alt={item.word} />
            <p>{item.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlphabetPage;
