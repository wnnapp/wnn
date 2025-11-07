import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import CategoryPortal from "./components/CategoryPortal";
import Dashboard from "./components/Dashboard";
import MyScrolls from "./components/MyScrolls";

function App() {
  const [stage, setStage] = useState("login");
  const [userSelection, setUserSelection] = useState(null);
  const [savedScrolls, setSavedScrolls] = useState([]);

  const handleLogin = () => setStage("portal");
  const handleCategorySelect = (selection) => {
    setUserSelection(selection);
    setStage("dashboard");
  };

  const handleViewScrolls = (scrolls) => {
    setSavedScrolls(scrolls);
    setStage("scrolls");
  };

  return (
    <div className="App">
      {stage === "login" && <Login onLogin={handleLogin} />}
      {stage === "portal" && (
        <CategoryPortal onSelectCategory={handleCategorySelect} />
      )}
      {stage === "dashboard" && (
        <Dashboard
          userSelection={userSelection}
          onReEnterPortal={() => setStage("portal")}
          onViewScrolls={handleViewScrolls}
        />
      )}
      {stage === "scrolls" && (
        <MyScrolls scrolls={savedScrolls} onBack={() => setStage("dashboard")} />
      )}
    </div>
  );
}

export default App;
