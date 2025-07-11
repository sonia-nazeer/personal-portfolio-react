
import React from 'react';


const Hero = () => {
  return (
    <section>
      <div id="profile" className="container">
        <div className="left">
          <h2>Hi, I am</h2>
          <h1>Sonia Nazeer</h1>
          <p>
            I’m a passionate Web Developer who loves building beautiful and functional websites.
            I create responsive designs and smooth user experiences.
          </p>
          <a href="/media/my-cv.pdf" download="My_CV" className="button">Download My CV</a>
        </div>
        <div className="right">
          <img src="/images/profile.png" alt="Sonia Nazeer" />
        </div>
      </div>
    </section>
  );
};

export default Hero;