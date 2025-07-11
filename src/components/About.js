import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <div className="about-left">
          <h2>About Me</h2>
          <p>
            I'm Sonia Nazeer, a passionate web developer who brings digital
            experiences to life through clean code and creative design. I
            specialize in building responsive, accessible, and engaging
            websites that blend functionality with aesthetics.
          </p>
          <p>
            My mission is to solve real-world problems using technology while
            continuously learning and growing as a developer. Let's
            collaborate and build something amazing together!
          </p>
        </div>
        <div className="about-right">
          <h3>My Skillset</h3>
          <ul>
            <li>
              <span>&#x1F4BB;</span> Frontend: HTML5, CSS3, JavaScript,
              Bootstrap
            </li>
            <li><span>&#x1F4C8;</span> Backend: PHP, MySQL</li>
            <li><span>&#x1F4DA;</span> Version Control: Git, GitHub</li>
            <li><span>&#x1F310;</span> Responsive Design & UI/UX</li>
            <li><span>&#x2728;</span> Problem Solving & Debugging</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
