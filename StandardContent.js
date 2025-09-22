// src/components/StandardContent.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import contentData from '../data/contentData';
import './StandardContent.css';

function StandardContent() {
  const { standardId } = useParams();
  const navigate = useNavigate();

  const topics = contentData[standardId]?.topics || [];

  return (
    <div className="content-page">
      <button className="back-btn" onClick={() => navigate('/')}>⬅ Back</button>
      <h2>{standardId} Standard Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li
            key={index}
            onClick={() =>
              navigate(`/standard/${standardId}/${topic.name.toLowerCase().replace(/ /g, '-')}`)
            }
          >
            <img 
              src={topic.image} 
              alt={topic.name} 
              style={{ width: '100px', marginBottom: '10px', borderRadius: '10px' }}
            />
            <div>{topic.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StandardContent;
