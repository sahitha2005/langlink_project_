import React, { useState } from "react";
import contentData from "../data/contentData";
import "./AlphabetPage.css";

function AlphabetPage({ onBack }) {
  const letters = contentData["1st"].Alphabets;

  const [currentIndex, setCurrentIndex] = useState(null);

  const selectedLetter = currentIndex !== null ? letters[currentIndex] : null;

  const handleNext = () => {
    if (currentIndex < letters.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="alphabet-container">
      {!selectedLetter ? (
        <>
          <h2 className="page-title">Alphabets</h2>
          <div className="alphabet-grid">
            {letters.map((item, index) => (
              <div
                key={item.letter}
                className="letter-box"
                onClick={() => setCurrentIndex(index)}
              >
                {item.letter}
              </div>
            ))}
          </div>
          <button className="back-btn" onClick={onBack}>
            Back to Topics
          </button>
        </>
      ) : (
        <div className="letter-detail">
          <h1 className="letter-large">{selectedLetter.letter}</h1>
          <img
            src={selectedLetter.image}
            alt={selectedLetter.word}
            className="letter-image"
          />
          <h2 className="word-large">{selectedLetter.word}</h2>
          {/* Previous and Next in first row */}
          <div className="letter-buttons">
            <button onClick={handlePrevious} disabled={currentIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentIndex === letters.length - 1}>
              Next
            </button>
          </div>
          {/* Back button in a new row */}
          <div className="back-grid">
            <button className="back-btn" onClick={() => setCurrentIndex(null)}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlphabetPage;