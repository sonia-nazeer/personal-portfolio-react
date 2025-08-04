import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
