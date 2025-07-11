import React from 'react';


const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo1.png" alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="#profile" style={{ fontWeight: 'bold' }}>Profile</a>
          <a href="#about" style={{ fontWeight: 'bold' }}>About</a>
          <a href="#experience" style={{ fontWeight: 'bold' }}>Experience</a>
          <a href="#projects" style={{ fontWeight: 'bold' }}>Projects</a>
          <a href="#contact" style={{ fontWeight: 'bold' }}>Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;