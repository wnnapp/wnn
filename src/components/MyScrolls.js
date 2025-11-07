import React from "react";
import "./Dashboard.css";

export default function MyScrolls({ scrolls, onBack }) {
  return (
    <div className="scrolls-container">
      <h1 className="wnn-logo">My Scrolls</h1>
      <p className="dashboard-sub">Saved Events</p>

      {scrolls.length === 0 ? (
        <p className="no-scrolls">You haven’t marked any events yet.</p>
      ) : (
        <div className="scrolls-grid">
          {scrolls.map((event) => (
            <div key={event.id} className="scroll-card">
              <img src={event.image} alt={event.title} className="scroll-img" />
              <div className="scroll-info">
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p>{event.date}</p>
              </div>
              <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.location
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
      event.location
    )}&zoom=12&size=300x120&maptype=roadmap
    &markers=color:blue%7C${encodeURIComponent(event.location)}
    &key=AIzaSyCV8DSPeyWe4TAylt3BRYKSYWVkdfhgTK4`}
    alt="Map preview"
    style={{
      width: "100%",
      height: "100px",
      borderRadius: "10px",
      marginTop: "10px",
      objectFit: "cover",
      boxShadow: "0 0 10px #00aaff",
    }}
  />
</a>

            </div>
          ))}
        </div>
      )}

      <button className="reenter-btn" onClick={onBack}>
        ⬅ Back to Dashboard
      </button>
    </div>
  );
}
