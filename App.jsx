import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Welcome to Paradise Nursery</h1>

            <p>
              Discover beautiful indoor and outdoor plants carefully selected
              to bring freshness and natural beauty into your home.
            </p>

            <button
              className="get-started-button"
              onClick={() => setShowProductList(true)}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <AboutUs />
      )}
    </div>
  );
}

export default App;
