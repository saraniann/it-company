import React from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" });

  };

  return (
    <section className="contact" id="contact" style={{ "--bg-image": "url(/contact-abstract.png)" }}>
      <h2>Contact Us</h2>
      <p>Get in touch with our team to discuss your cybersecurity and networking needs</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
