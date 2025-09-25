import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import AlphabetPage from "./AlphabetPage";
import "./StandardContent.css";
import NumbersPage from "./NumbersPage";
import ColorsPage from "./ColorsPage";


function StandardContent() {
  const { topicId } = useParams(); // only topicId is needed
  const navigate = useNavigate();

  if (!topicId) return null;

  const topicName = topicId
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  if (topicName === "Alphabets") {
    return <AlphabetPage onBack={() => navigate(-1)} />;
  }
  if (topicName === "Numbers") {
  return <NumbersPage onBack={() => navigate(-1)} />;
  }
  if (topicName === "Colors") {
    return <ColorsPage onBack={() => navigate(-1)} />;  // ✅ Add this
  }

  return (
    <div className="content-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
      <h2>{topicName}</h2>
      <p>Content for {topicName} will go here.</p>
    </div>
  );
}

export default StandardContent;