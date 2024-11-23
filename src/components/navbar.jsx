import React, { useState } from "react";
import "../css/navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [navbarsection, setNavbarSection] = useState(false);

  const navbarFixed = () => {
    if (window.scrollY >= 100) {
      setNavbarSection(true);
    } else {
      setNavbarSection(false);
    }
  };

  window.addEventListener("scroll", navbarFixed);

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header-section">
        <div
          className={
            navbarsection ? "navbar-section activated" : "navbar-section"
          }
        >
          <input type="checkbox" id="check" />
          <div
            className="logo-section"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={Logo} alt="" loading="lazy" fetchPriority="high" />
            <h2>
              Apple Orchard Resort <br />{" "}
              {/* <p>Ramnagar, Jim Corbett National Park</p> */}
            </h2>
          </div>

          {/* Conditionally render menu based on isOpen */}
          <ul className={`menu-section ${isOpen ? "show-menu" : ""}`}>
            <li className="none">
              {/* <button aria-label="search-magnifying-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button> */}
              <button aria-label="list-property-button">Book Now</button>
            </li>
            <li
              className={isActive("/")}
              onClick={() => {
                navigate("/");
                setIsOpen(false);
              }}
            >
              Home
            </li>
            <li
              className={isActive("/about")}
              onClick={() => {
                navigate("/about");
                setIsOpen(false);
              }}
            >
              About
            </li>
            <li
              className={isActive("/rooms")}
              onClick={() => {
                navigate("/rooms");
                setIsOpen(false);
              }}
            >
              Rooms
            </li>
            {/* <li
              className={isActive("/packages")}
              onClick={() => {
                navigate("/packages");
                setIsOpen(false);
              }}
            >
              Packages
            </li> */}
            <li
              className={isActive("/places-to-visit")}
              onClick={() => {
                navigate("/places-to-visit");
                setIsOpen(false);
              }}
            >
              Places To Visit
            </li>

            <li
              className={isActive("/gallery")}
              onClick={() => {
                navigate("/gallery");
                setIsOpen(false);
              }}
            >
              Gallery
            </li>
            {/* <li
              className={isActive("/faq")}
              onClick={() => {
                navigate("/faq");
                setIsOpen(false);
              }}
            >
              Faq's
            </li> */}
            <li
              className={isActive("/payment")}
              onClick={() => {
                navigate("/payment");
                setIsOpen(false);
              }}
            >
              Payment
            </li>
            <li
              className={isActive("/contact")}
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
            >
              Contact
            </li>
          </ul>

          <div className="search-section">
            {/* <button
              aria-label="search-magnifying-button"
              className="search-button"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button> */}
            {/* <button
              aria-label="list-property-button"
              className="list-button"
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
            >
              Book Now
            </button> */}
            {/* Hamburger Icon */}
            <div className="menu-bars" onClick={toggleMenu}>
              {isOpen ? (
                <label htmlFor="check">
                  <i className="fa-solid fa-close"></i>
                </label>
              ) : (
                <label htmlFor="check">
                  <i className="fa-solid fa-bars"></i>
                </label>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
