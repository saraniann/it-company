import React, { useState } from "react";
import "./achievements.css";

const achievementsData = [
    {
        id: 1,
        tabTitle: "Industry Recognition",
        title: "Best Cybersecurity Firm 2024",
        description: "Skylan Tech was honored with the 'Best Cybersecurity Firm' award at the Global Tech Summit, recognizing our innovative approach to threat detection and network resilience.",
        image: "/achievement_award_1767171150265.png",
        ctaText: "Read the Press Release"
    },
    {
        id: 2,
        tabTitle: "Thought Leadership",
        title: "Leading the Future of Connectivity",
        description: "Our Team, delivered the keynote address at the FutureNet Conference, outlining our vision for AI-driven network security infrastructure.",
        image: "/achievement_conference_1767171164340.png",
        ctaText: "Watch Keynote"
    },
    {
        id: 3,
        tabTitle: "Global Expansion",
        title: "Scaling Across Borders",
        description: "We successfully expanded our operations to 5 new countries this year, bringing secure and reliable connectivity to over 500 new enterprise clients.",
        image: "/achievement_team_1767171182082.png",
        ctaText: "View Our Locations"
    }
];

const Achievements = () => {
    const [activeTab, setActiveTab] = useState(achievementsData[0]);

    return (
        <section className="achievements" id="achievements">
            <div className="achievements-container">
                <div className="achievements-content">
                    <h2>{activeTab.title}</h2>
                    <p>{activeTab.description}</p>

                </div>
                <div className="achievements-image">
                    <div className="image-backdrop"></div>
                    <img src={activeTab.image} alt={activeTab.title} key={activeTab.id} />
                </div>
            </div>

            <div className="achievements-nav">
                {achievementsData.map((item) => (
                    <div
                        key={item.id}
                        className={`nav-item ${activeTab.id === item.id ? "active" : ""}`}
                        onClick={() => setActiveTab(item)}
                    >
                        {item.tabTitle}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
