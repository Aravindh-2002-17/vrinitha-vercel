import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // ✅ Ensure logo.png is in /assets

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar sticky-top">
      <div className="logo">
        <img className="head-logo" src={logo} alt="Vrintha Logo" />
      </div>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">MACHINE PRODUCTS</a>
        <a href="#">AGRI PRODUCTS</a>
        <a href="#">GALLERY</a>
        <a href="#">ENQUIRY</a>
      </div>

      <button className="contact-btn">CONTACT</button>

      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
