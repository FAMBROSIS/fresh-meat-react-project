import React, { createContext, useState } from "react";
import HomePage from "./HomePage";
import Content from "./Content";
import Tools from "./Tools";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import "../Navbar.css";

const TheNavbar = () => {
  const logo = "../611949faf8fe340004e0d2cb.png";

  return (
    <div>
      <Navbar id="Navbar" bg="dark" data-bs-theme="dark">
        <Container>
          <img src={logo} id="image" />
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link to="/homePage">Home</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/content">While you wait</Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link to="/tools">Tools</Link>
            </Nav.Link>
            {/* <Nav.Link href="#"><Link to="/recipes">Recipes</Link></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TheNavbar;
