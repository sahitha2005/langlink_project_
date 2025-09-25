// src/components/NumbersPage.js
import React, { useState } from "react";
import contentData from "../data/contentData";
import "./NumbersPage.css"; // optional, for styling buttons/grid if you want

function NumbersPage({ onBack }) {
  const numbers = contentData["1st"].Numbers; // use 1st standard numbers
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClickNumber = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < numbers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Show grid of numbers if none selected
  if (currentIndex === null) {
    return (
      <div className="numbers-grid-container">
        <h2>Numbers</h2>
        <div className="numbers-grid">
          {numbers.map((item, index) => (
            <div
              key={item.number}
              className="number-box"
              onClick={() => handleClickNumber(index)}
            >
              {item.number}
            </div>
          ))}
        </div>
        <button className="back-btn" onClick={onBack}>
          Back to Topics
        </button>
      </div>
    );
  }

  // Show selected number with spelling
  const currentNumber = numbers[currentIndex];

  return (
    <div className="number-detail-container">
      <h2 style={{ fontSize: "120px", margin: "20px 0" }}>
        {currentNumber.number}
      </h2>
      <p style={{ fontSize: "50px", fontWeight: "bold" }}>
        {currentNumber.spelling}
      </p>

      <div className="navigation-buttons" style={{ marginTop: "30px" }}>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === numbers.length - 1}>
          Next
        </button>
      </div>

      <button
        className="back-btn"
        style={{ marginTop: "20px" }}
        onClick={() => setCurrentIndex(null)}
      >
        Back to Numbers
      </button>
    </div>
  );
}

export default NumbersPage;
