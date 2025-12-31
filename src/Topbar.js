import React, { useEffect, useState } from "react";
import "./Topbar.css";

const sections = ["home", "mission", "services", "about", "achievements"];

const Topbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll on click
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
    setMenuOpen(false); // Close menu after clicking
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="topbar">
      <div className="logo" onClick={() => scrollTo("home")} style={{ cursor: 'pointer' }}>
        <img src="/logo-icon.png" alt="Skylan Tech" className="logo-icon" />
        <span>Skylan Tech</span>
      </div>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {sections.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => scrollTo(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>

      <button className="nav-btn" onClick={() => scrollTo("contact")}>
        Get Started
      </button>
    </nav>
  );
};

export default Topbar;
