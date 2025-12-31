import React from "react";
import "./services.css";

import {
  CloudQueue,
  Storage,
  Layers,
  Visibility,
  Security,
  VerifiedUser
} from '@mui/icons-material';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-content">
          <h2>Skylan Tech — Cybersecurity & Networking Solutions</h2>
          <div className="subtitle">
            One Company. Comprehensive Security Coverage<br />

          </div>
          <p>
            Cybersecurity is not a single tool or a one-time implementation. It is a continuous, layered approach that must evolve alongside changing technologies, emerging threats, and growing network environments.

            At Skylan Tech, we deliver integrated cybersecurity and networking solutions designed to help organisations secure their digital infrastructure, protect sensitive data, and maintain reliable network operations. Our services support both operational security needs and compliance expectations, providing practical protection in an increasingly connected world.
          </p>

        </div>

        <div className="services-grid-wrapper">
          <div className="service-card">
            <div className="icon-box">
              <CloudQueue sx={{ fontSize: 32 }} />
            </div>
            <h3>Endpoint Security</h3>
            <p>Protecting Devices at the Edge</p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Storage sx={{ fontSize: 32 }} />
            </div>
            <h3>Server Security</h3>
            <p>Hardened, Compliant & Monitored</p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Layers sx={{ fontSize: 32 }} />
            </div>
            <h3>Network & Gateway Security</h3>
            <p>Multi-Layered Defense</p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Visibility sx={{ fontSize: 32 }} />
            </div>
            <h3>Security Operations</h3>
            <p>Real-Time Threat Response</p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Security sx={{ fontSize: 32 }} />
            </div>
            <h3>Cybersecurity Testing</h3>
            <p>Assessment, Pentest & Red Teaming</p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <VerifiedUser sx={{ fontSize: 32 }} />
            </div>
            <h3>Compliance & Certification</h3>
            <p>Standards & framework adherence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
