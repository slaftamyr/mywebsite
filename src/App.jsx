import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
