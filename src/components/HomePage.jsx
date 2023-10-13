import React, { useState, useEffect, useContext, createContext } from "react";
import Recipe from "./Recipe";
import Navbar from "./TheNavbar";
import TimerWrapper from "./TimerWrapper";
// import { ThemeContext } from "../App.jsx";
import "../HomePage.css";
import { TimerContext } from "../App";

const HomePage = () => {
  const fact = useContext(TimerContext);

  return (
    <div id="body">
      {/* put under thenav */}
      <div>
        <h1>
          Welcome to Fresh Meat!!! A app geared toword new chefs in the kitchin
          who want to improve thier cullanary skills
        </h1>
        <h3>Click here to get your recipe?</h3>
        <Recipe />
      </div>
      <div id="top-container">
        <nav>{fact}</nav>
      </div>
      {/* put horizontal under the facts */}

      <script
        type="text/javascript"
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        data-name="bmc-button"
        data-slug="fambrosis"
        data-color="#ece4d0"
        data-emoji="🙏"
        data-font="Arial"
        data-text="Support me?"
        data-outline-color="#000000"
        data-font-color="#000000"
        data-coffee-color="#FFDD00"
      ></script>
    </div>
  );
};

export default HomePage;
