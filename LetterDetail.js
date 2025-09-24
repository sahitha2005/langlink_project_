import React from "react";
import { useParams } from "react-router-dom";
import "./LetterDetail.css";

const letterWords = {
  A: { word: "Apple", image: "https://i.imgur.com/K3KJ3w4.png" },
  B: { word: "Ball", image: "https://i.imgur.com/2nCt3Sbl.png" },
  C: { word: "Cat", image: "https://i.imgur.com/6oKQF3C.png" },
  // 👉 Add remaining letters D–Z
};

function LetterDetail() {
  const { letter } = useParams();
  const details = letterWords[letter];

  if (!details) return <h2>No word found for {letter}</h2>;

  return (
    <div className="letter-detail">
      <h2>{letter} - {details.word}</h2>
      <img src={details.image} alt={details.word} />
    </div>
  );
}

export default LetterDetail;
