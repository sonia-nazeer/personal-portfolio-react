  import React from 'react';
  import Logo from '../assets/logo1.png';
  import './navbar.css';

function Navbar() {
  return (
     <header>
      <nav className="navbar navbar-expand-lg sticky-top px-4">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#Profile">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="navbar-nav nav-links">
              <a className="nav-link" href="#profile">Profile</a>
              <a  className="nav-link" href="#about">About</a>
              <a  className="nav-link" href="#experience">Experience</a>
              <a  className="nav-link" href="#projects">Projects</a>
              <a  className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
