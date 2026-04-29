import { useState } from 'react'
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import Career from "./components/Career";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Career />
      <Achievements />
      <Highlights />
      <Gallery />
      <Quote />
      <Footer />
    </>
  );
}

export default App
