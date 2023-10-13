import React, { useState, useEffect, useContext, createContext } from 'react'
import Recipe from './Recipe';
import  Navbar  from './TheNavbar';
import  TimerWrapper  from './TimerWrapper';
// import { ThemeContext } from "../App.jsx";
import '../HomePage.css'
import { TimerContext } from '../App';


const HomePage = () => {
  const fact = useContext(TimerContext)


  

  // const {isDark}=useContext(ThemeContext)
  // console.log(theme)
  
  
    return (
      <div id='body'>
        {/* put under thenav */}
        <div>
        <h1>
          Welcome to Fresh Meat!!! A app geared toword new chefs in the kitchin who want to improve thier cullanary skills                                            
        </h1>
        </div>
        <div id='top-container'>
        <nav>{fact}</nav>
        </div>
        {/* put horizontal under the facts */}
      </div>
    );
  };
  

export default HomePage