// src/components/StandardsPage.js
import React from "react";
import { useNavigate } from "react-router-dom";

const standards = ["1st", "2nd", "3rd", "4th", "5th"];

function StandardsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select Standard</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {standards.map((std) => (
          <button
            key={std}
            onClick={() => navigate(`/standard/${std}`)}
            style={{
              padding: "20px 30px",
              margin: "10px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#3f51b5",
              color: "white",
              fontSize: "18px"
            }}
          >
            {std} Standard
          </button>
        ))}
      </div>
    </div>
  );
}

export default StandardsPage;