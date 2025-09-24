// src/components/TopicPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import contentData from "../data/contentData";
import "./StandardContent.css"; // reuse same CSS

function TopicPage() {
  const { standardId } = useParams();
  const navigate = useNavigate();
  const topics = contentData[standardId]?.topics || [];

  return (
    <div className="content-page">
      <h2>{standardId} Grade Topics</h2>
      <ul>
        {topics.map((topic, index) => (
          <li
            key={index}
            onClick={() =>
              navigate(
                `/standard/${standardId}/${topic.name.toLowerCase().replace(/ /g, "-")}`
              )
            }
          >
            <img src={topic.image} alt={topic.name} />
            <div>{topic.name}</div>
          </li>
        ))}
      </ul>
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default TopicPage;
