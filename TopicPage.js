// src/components/TopicPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import contentData from '../data/contentData';

function TopicPage() {
  const { standardId, topicId } = useParams();
  const navigate = useNavigate();

  const topics = contentData[standardId]?.topics || [];
  const topic = topics.find(
    t => t.name.toLowerCase().replace(/ /g, '-') === topicId
  );

  if (!topic) {
    return <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Topic not found</h2>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{
          padding: '10px 15px',
          marginBottom: '20px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#3f51b5',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        ⬅ Back
      </button>
      <h2>{topic.name}</h2>
      <img 
        src={topic.image} 
        alt={topic.name} 
        style={{ marginTop: '20px', width: '200px', borderRadius: '10px' }}
      />
    </div>
  );
}

export default TopicPage;
