import React, { useState, useEffect, useContext, createContext } from "react";
import Recipe from "./Recipe";
// import Navbar from "./TheNavbar";
// import TimerWrapper from "./TimerWrapper";
// // import { ThemeContext } from "../App.jsx";
import "../HomePage.css";
import { TimerContext } from "../App";
import TheNavbar from "./TheNavbar";

const HomePage = () => {
  const fact = useContext(TimerContext);

  return (
    <div id="body">
      {/* put under thenav */}

      <div id="homeContent">
        <div>
          <h2 id="homeSubtitle">Welcome to Fresh Meat!!!</h2>
          <h3 id="homeBio">
            A app geared toword new chefs in the kitchin who want to improve
            thier cullanary skills. Board while cooking? Check out our content
            to view what we have available while you wait. Explore FreshMeat
            Tools page and see if any are of use to you during your meal prep.
            Explore and discover everything FreshMeat has to offer!
          </h3>
          <h3 id="clickHere-msg">Click here to get your recipe?</h3>
        </div>
        <div id="recipe-btn-position">
          <Recipe />
        </div>
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
