import React, { createContext, useState, useContext } from "react";
// import Content from "./Content";
// import Tools from "./Tools";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import "../TheNavbar.css";

const TheNavbar = () => {
  const logo = "../611949faf8fe340004e0d2cb.png";

  return (
    <div id="body">
            <div id="titleAndLogo"><img src={logo} alt="" /><h1 id="title">FreshMeat</h1></div>
            <div id="routes">
            <button><Link to="/homePage" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></button> 
            <button><Link to="/content" style={{ textDecoration: 'none', color: 'black' }}>While you wait</Link> </button>
            <button><Link id="Link" style={{ textDecoration: 'none', color: 'black' }} to="/tools">Tools</Link> </button>
            </div>
    </div>
  );
};

export default TheNavbar;
