import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "./NavbarHook.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
      <ul className={listClassName}>
        <li key="home">
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li key="/hubble">
          <NavLink
            to="/hubble"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
           Hubble
          </NavLink>
        </li>
        <li key="missions">
          <NavLink
            to="/missions"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Missions
          </NavLink>
        </li>
        <li key="videos">
          <NavLink
            to="/videos"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Videos
          </NavLink>
        </li>
        <li key="explore">
          <NavLink
            to="/explore"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Explore
          </NavLink>
        </li>
       
      </ul>
    );
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          ASTROX
        </NavLink>

        {isMobile && (
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            <IoMenu />
          </div>
        )}

        {isMobile ? (
          <div
            className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            <div
              className="nav__close"
              id="nav-close"
              onClick={toggleMenu}
            >
              <IoClose />
            </div>
          </div>
        ) : (
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default NavbarHook;
