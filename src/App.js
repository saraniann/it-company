import React from "react";

import Topbar from "./Topbar";

import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Mission from "./Mission";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <Mission />
      <Services />
      <About />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
