import React from "react";
import "./mission.css";

const Mission = () => {
  return (
    <section className="Mission & Vision" id="mission">
      <h2>Our Mission & Vision</h2>

      <div className="mission-grid">
        <div className="card">
          <div className="card-content">
            <h3>Mission</h3>
            <p>Our mission is to provide dependable cybersecurity and networking solutions that protect digital assets, prevent security breaches, and enable organisations to operate safely in a connected environment.</p>
          </div>
          <div className="card-image">
            <img src="/mission-bg.jpg" alt="Cybersecurity Shield" />
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Vision</h3>
            <p>Our vision is to become a trusted provider of cybersecurity and networking solutions that empower organisations to operate securely, confidently, and efficiently in an increasingly digital world.</p>
          </div>
          <div className="card-image">
            <img src="/vision-bg.jpg" alt="Vision" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
