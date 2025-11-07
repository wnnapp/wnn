import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import "@fontsource/cinzel";

export default function Dashboard({
  userSelection,
  onReEnterPortal,
  onViewScrolls,
}) {
  const [angle, setAngle] = useState(0);
  const [events, setEvents] = useState([]);
  const [interestedEvents, setInterestedEvents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Nile Beats Festival",
        location: "Cairo, Egypt",
        date: "2025-12-10",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      },
      {
        id: 2,
        title: "Sands of Tech Expo",
        location: "Giza, Egypt",
        date: "2025-11-21",
        image: "https://images.unsplash.com/photo-1581091870627-3e09f86b64b6",
      },
      {
        id: 3,
        title: "Desert Jazz Nights",
        location: "Luxor, Egypt",
        date: "2025-12-01",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      },
    ];
    setEvents(mockEvents);
  }, []);

  const rotateCarousel = (direction) => {
    const newIndex =
      direction === "next"
        ? (activeIndex + 1) % events.length
        : (activeIndex - 1 + events.length) % events.length;
    setActiveIndex(newIndex);
    setAngle((prev) => prev + (direction === "next" ? -120 : 120));
  };

  const handleSMA = () => {
    const event = events[activeIndex];
    alert(`SMA invite sent for: ${event.title} 🎉`);
  };

  const handleInterested = () => {
    const event = events[activeIndex];
    setInterestedEvents((prev) =>
      prev.find((e) => e.id === event.id)
        ? prev.filter((e) => e.id !== event.id)
        : [...prev, event]
    );
  };

  const isInterested = (eventId) =>
    interestedEvents.find((e) => e.id === eventId);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="wnn-logo">WNN</h1>
        <p className="category-label">{userSelection.category}</p>
        <p className="audience-label">Audience: {userSelection.audience}</p>
      </div>

      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
              style={{
                transform: `rotateY(${index * 120}deg) translateZ(300px)`,
                backgroundImage: `url(${event.image})`,
              }}
            >
              <div className="carousel-overlay">
                <h3>{event.title}</h3>
                <p>{event.location}</p>
                <p>{event.date}</p>
                {isInterested(event.id) && (
                  <span className="interested-tag">★ Interested</span>
                )}
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
      </div>

      <div className="carousel-controls">
        <button onClick={() => rotateCarousel("prev")}>⟵</button>
        <button onClick={() => rotateCarousel("next")}>⟶</button>
      </div>

      <div className="action-buttons">
        <button className="action-btn category" onClick={onReEnterPortal}>
          🌀 Categories
        </button>
        <button className="action-btn sma" onClick={handleSMA}>
          🤝 SMA Invite
        </button>
        <button className="action-btn interest" onClick={handleInterested}>
          {isInterested(events[activeIndex]?.id)
            ? "💔 Remove"
            : "💖 Interested"}
        </button>
        <button className="action-btn scrolls" onClick={() => onViewScrolls(interestedEvents)}>
          📜 My Scrolls
        </button>
      </div>
    </div>
  );
}
