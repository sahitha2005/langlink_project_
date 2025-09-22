import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StandardContent.css';

function StandardContent() {
  const { standardId } = useParams();
  const navigate = useNavigate();

  const contentData = {
    '1st': [
      'Learn ABC with fun pictures',
      'Counting from 1 to 20',
      'Identify colors and shapes'
    ],
    '2nd': [
      'Simple sentences',
      'Basic addition and subtraction',
      'Learn about animals'
    ],
    '3rd': [
      'Short stories reading',
      'Multiplication tables',
      'Basic science experiments'
    ],
    '4th': [
      'Paragraph writing & grammar',
      'Fractions & measurements',
      'Basic geography'
    ],
    '5th': [
      'Advanced math',
      'Story analysis',
      'Science experiments'
    ]
  };

  return (
    <div className="content-page">
      <button className="back-btn" onClick={() => navigate('/')}>⬅ Back</button>
      <h2>{standardId} Standard Content</h2>
      <ul>
        {contentData[standardId]?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StandardContent;
