import React, { useState } from "react";
import "./CategoryPortal.css";

export default function CategoryPortal({ onSelectCategory }) {
  const [audience, setAudience] = useState(null);
  const [category, setCategory] = useState(null);

  const audienceOptions = ["Children", "Adults", "Both"];
  const categories = ["Music", "Sports", "Art", "Tech", "Food & Events"];

  const handleContinue = () => {
    if (audience && category) {
      onSelectCategory({ audience, category });
    } else {
      alert("Please select both an audience and a category.");
    }
  };

  return (
    <div className="portal-container">
      <h1 className="portal-title">⚡ Step Into Your World</h1>
      <p className="portal-sub">Choose your Audience & Category</p>

      <div className="portal-section">
        <h2>Audience</h2>
        <div className="button-group">
          {audienceOptions.map((opt) => (
            <button
              key={opt}
              className={`portal-btn ${audience === opt ? "selected" : ""}`}
              onClick={() => setAudience(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="portal-section">
        <h2>Category</h2>
        <div className="button-group">
          {categories.map((opt) => (
            <button
              key={opt}
              className={`portal-btn ${category === opt ? "selected" : ""}`}
              onClick={() => setCategory(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <button className="enter-btn" onClick={handleContinue}>
        🌍 Enter WNN World
      </button>
    </div>
  );
}
