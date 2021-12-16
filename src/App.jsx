import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
