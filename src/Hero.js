import React from "react";
import "./hero.css";
import { Security, Router } from '@mui/icons-material';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h1>Securing Networks. Protecting Digital Futures.</h1>
      <p>
        Skylan Tech delivers reliable cybersecurity and networking solutions that help organisations protect their data, infrastructure, and digital operations in an increasingly connected world.
      </p>
      <div className="hero-buttons">

      </div>

      <div className="service-grid">
        <div className="card">
          <div className="icon-box">
            <Security sx={{ fontSize: 40 }} />
          </div>
          <h3>Secure by Design</h3>
          <p>Security is integrated into every system from the start, reducing vulnerabilities and strengthening network foundations.</p>
        </div>
        <div className="card">
          <div className="icon-box">
            <Router sx={{ fontSize: 40 }} />
          </div>
          <h3>Reliable Connectivity</h3>
          <p>Stable and secure networks ensure seamless communication, data transfer, and uninterrupted digital operations.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
