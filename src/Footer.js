import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Skylan Tech</h2>
                    <p>Securing Networks. Protecting Digital Futures.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: contact@skylantech.com</p>
                    <p>Phone: +(60) 123456789</p>
                    <p>Address: 69, Jalan Usm, Penang , Malaysia   </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p> {new Date().getFullYear()} Skylan Tech. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
