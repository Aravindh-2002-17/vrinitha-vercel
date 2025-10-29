import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar sticky-top">
      <div className="logo">
        <img className="head-logo" src={logo} alt="Vrintha Logo" />
      </div>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <div className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Home
          </NavLink>
        </div>

        <div className="nav-item">
          <a href="#">ABOUT</a>
        </div>

        {/* ✅ MACHINE PRODUCTS Dropdown */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => handleDropdown("machine")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="#" className="dropdown-toggle">
            MACHINE PRODUCT
          </a>
          {openDropdown === "machine" && (
            <div className="dropdown-menu">
              <NavLink to="/products/machine1" className="dropdown-item">
                Machine Type 1
              </NavLink>
              <NavLink to="/products/machine2" className="dropdown-item">
                Machine Type 2
              </NavLink>
              <NavLink to="/products/machine3" className="dropdown-item">
                Machine Type 3
              </NavLink>
            </div>
          )}
        </div>

        {/* ✅ AGRI PRODUCTS Dropdown */}
        <div
          className="nav-item dropdown"
          onMouseEnter={() => handleDropdown("agri")}
          onMouseLeave={() => handleDropdown(null)}
        >
          <a href="#" className="dropdown-toggle">
            AGRI PRODUCTS
          </a>
          {openDropdown === "agri" && (
            <div className="dropdown-menu">
              <NavLink to="/products/agri1" className="dropdown-item">
                Agri Product 1
              </NavLink>
              <NavLink to="/products/agri2" className="dropdown-item">
                Agri Product 2
              </NavLink>
              <NavLink to="/products/agri3" className="dropdown-item">
                Agri Product 3
              </NavLink>
            </div>
          )}
        </div>

        <div className="nav-item">
          <a href="#">GALLERY</a>
        </div>

        <div className="nav-item">
          <a href="#">ENQUIRY</a>
        </div>
      </div>

      {/* ✅ Contact button */}
      <div className="nav-item">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "contact-btn active-link" : "contact-btn"
          }
          style={{ backgroundColor: "#76c752" }}
        >
          CONTACT
        </NavLink>
      </div>

      <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
