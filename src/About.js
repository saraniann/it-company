import React, { useState, useEffect } from "react";
import "./about.css";

const teamMembers = [
  {
    name: "Ilanthtaamil",
    role: "Chief Technology Officer",
    image: "/ilanthtaamil.jpg",
    bio: "Leading our technical strategy with 15+ years of cybersecurity experience.",
    quote: "\"Innovation isn't just about new tools; it's about staying ahead of the threat landscape.\""
  },
  {
    name: "Kishann Kumar",
    role: "Head of Security",
    image: "/kishann.jpg",
    bio: "Expert in threat detection and security architecture with a proven track record.",
    quote: "\"Security is a process, not a product. We build resilience into every layer.\""
  },
  {
    name: "Saranian",
    role: "Network Infrastructure Lead",
    image: "/saranian.jpg",
    bio: "Specializes in designing and implementing scalable network solutions.",
    quote: "\"A robust network is the backbone of modern business continuity.\""
  }
];

const About = () => {
  const [isStacked, setIsStacked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Initial delay before stacking
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStacked(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Carousel cycle
  useEffect(() => {
    let interval;
    if (isStacked) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % teamMembers.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isStacked]);

  return (
    <section className="about" id="about">
      <h2>About Us</h2>
      <p>
        Skylan Tech is a technology company specialising in cybersecurity solutions and network infrastructure services. We focus on protecting organisations from digital threats while ensuring secure, stable, and efficient network connectivity.
      </p>
      <p>
        Our approach combines industry best practices, modern security tools, and practical implementation to help businesses safeguard sensitive information and maintain operational continuity.
      </p>

      <h3 className="team-heading">Behind Skylan Tech</h3>
      <div
        className={`team-grid ${isStacked ? 'stacked' : 'expanded'}`}
        onMouseEnter={() => setIsStacked(false)}
        onMouseLeave={() => setIsStacked(true)}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-card ${isStacked && index === activeIndex ? 'active' : ''} ${isStacked && index !== activeIndex ? 'hidden' : ''}`}
          >
            <img src={member.image} alt={member.name} className="team-photo" />
            <h4>{member.name}</h4>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
            <div className="team-quote">
              {member.quote}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
