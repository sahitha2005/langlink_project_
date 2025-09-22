import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const standards = ['1st', '2nd', '3rd', '4th', '5th'];

  return (
    <div className="home-container">
      <h1>Select Standard</h1>
      <div className="standards-row">
        {standards.map(std => (
          <button key={std} onClick={() => navigate(`/standard/${std}`)}>
            {std} Standard
          </button>
        ))}
      </div>
    </div>
  );
}

export default Home;
