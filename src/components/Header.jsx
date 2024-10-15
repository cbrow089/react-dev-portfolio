import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <header>
      <h1>Coleman Brown</h1>
      <nav>
        <NavLink
          to="/"
          end
          className={activeLink === "/" ? "clicked" : ""}
        >
          About Me
        </NavLink>
        <NavLink
          to="/portfolio"
          className={activeLink === "/portfolio" ? "clicked" : ""}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className={activeLink === "/contact" ? "clicked" : ""}
        >
          Contact
        </NavLink>
        <NavLink
          to="/resume"
          className={activeLink === "/resume" ? "clicked" : ""}
        >
          Resume
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;