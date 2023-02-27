import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes again!</p>
      <button className="btn" type="button">
        <Link to="/tutorials">Try Now!</Link>
      </button>
    </div>
  );
}

export default Home;
