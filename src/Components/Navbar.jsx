import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ✅ Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close menu when switching to desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu) => {
    if (!isMobile) {
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="navbar sticky-top">
      <div className="logo">
        <img className="head-logo" src={logo} alt="Vrintha Logo" />
      </div>

      {/* ✅ Nav Links */}
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-item">
          <NavLink to="/" end className="nav-link" onClick={closeMenu}  style={{ fontFamily: " sans-serif", fontWeight: "400", fontSize: "14px" }}>
            HOME
          </NavLink>
        </div>

        <div className="nav-item">
          <a href="#" onClick={closeMenu}>ABOUT</a>
        </div>

        {/* MACHINE PRODUCTS */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => handleDropdown("machine")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="#" className="dropdown-toggle">
            MACHINE PRODUCT
          </a>
          {openDropdown === "machine" && !isMobile && (
            <div className="dropdown-menu">
              <NavLink to="/products/machine1" className="dropdown-item" onClick={closeMenu}>
                Machine Type 1
              </NavLink>
              <NavLink to="/products/machine2" className="dropdown-item" onClick={closeMenu}>
                Machine Type 2
              </NavLink>
              <NavLink to="/products/machine3" className="dropdown-item" onClick={closeMenu}>
                Machine Type 3
              </NavLink>
            </div>
          )}
        </div>

        {/* AGRI PRODUCTS */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => handleDropdown("agri")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="#" className="dropdown-toggle">
            AGRI PRODUCTS
          </a>
          {openDropdown === "agri" && !isMobile && (
            <div className="dropdown-menu">
              <NavLink to="/products/agri1" className="dropdown-item" onClick={closeMenu}>
                Agri Product 1
              </NavLink>
              <NavLink to="/products/agri2" className="dropdown-item" onClick={closeMenu}>
                Agri Product 2
              </NavLink>
              <NavLink to="/products/agri3" className="dropdown-item" onClick={closeMenu}>
                Agri Product 3
              </NavLink>
            </div>
          )}
        </div>

        <div className="nav-item">
          <a href="#" onClick={closeMenu}>GALLERY</a>
        </div>

        <div className="nav-item">
          <a href="#" onClick={closeMenu}>ENQUIRY</a>
        </div>
      </div>

      {/* ✅ Contact Button */}
      <div className="nav-item">
        <NavLink
          to="/contact"
          className="contact-btn"
          style={{ backgroundColor: "#76c752" }}
          onClick={closeMenu}
        >
          CONTACT
        </NavLink>
      </div>

      {/* ✅ Hamburger Icon */}
      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
