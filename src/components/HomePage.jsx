import React, { useState, useEffect, useContext, createContext } from 'react'
import Recipe from './Recipe';
import  Navbar  from './TheNavbar';
import  TimerWrapper  from './TimerWrapper';
// import { ThemeContext } from "../App.jsx";
import '../HomePage.css'
import { TimerContext } from '../App';


const HomePage = () => {
  const {hours, minutes, seconds, milliseconds} = useContext(TimerContext)


  

  // const {isDark}=useContext(ThemeContext)
  // console.log(theme)
  
  
    return (
      <div id='body'>

      {/* <div className="d-flex flex-column">
        <label>hh</label>
        <input value={hours} />
      </div>{" "}
      <div className="d-flex flex-column">
        <label>mm</label>
        <input value={minutes} />
      </div>{" "}
      <div className="d-flex flex-column">
        <label>ss</label>
        <input value={seconds} />
      </div>{" "}
      <div className="d-flex flex-column">
        <label>ms</label>
        <input value={milliseconds} />
      </div> */}


        {/* <button onClick={changeColor}></button> */}
        <p>
          Welcome to Fresh Meat!!! A app geared toword new chefs in the kitchin who want to improve thier cullanary skills                                            
        </p>
        <br />

        {/* <div>
        <Recipe id='recipe' />
        </div> */}

      </div>
    );
  };
  

export default HomePage