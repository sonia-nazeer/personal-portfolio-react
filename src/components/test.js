import React from 'react';
import ProfileImage from '../assets/home-hero.jpg';
import CV from '../media/my-cv.pdf';
import './profile.css';


function Profile() {
  return (
    <section>
        <div id="profile" class="container py-5">
          <div class="row align-items-center">
            <div class="col-md-6 left">
              <h2>Hi, I am</h2>
              <h1>Sonia Nazeer</h1>
              <p>
                Full Stack Web Developer | MERN & PHP/MySQL I build scalable,
                responsive websites with clean code and modern design — focused
                on performance, usability, and real-world functionality.
              </p>
              <a href={"media/my-cv.pdf" }download="My_CV" class="button">
                Download My CV
              </a>
            </div>

            <!-- Right Column -->
            <div class="col-md-6 right mt-4 mt-md-0 text-center profile-img">
              <img src={ ProfileImage} alt="Sonia Nazeer" />
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="about-section">
        <div class="container about-wrapper">
          <div class="row">
            <div class="col-md-6 about-left">
              <h2>About Me</h2>
              <p>
                A Full Stack Web Developer with hands-on experience in building
                responsive, dynamic web applications using MERN and PHP/MySQL
                stacks. Proficient in React.js, Node.js, Express, MongoDB, PHP,
                MySQL, and tools like Git, Postman, XAMPP, and WAMP. I hold a
                Master’s degree in Computer Science from Virtual University and
                also completed an MA in English Language Teaching, which
                enhances my communication and teamwork skills.
              </p>
              <p>
                My mission is to solve real-world problems using technology
                while continuously learning and growing as a developer. Let's
                collaborate and build something amazing together!
              </p>
            </div>
            <div class="col-md-6 about-right">
              <h2>My Skillset</h2>
              <ul>
                <li>
                  <span>&#x1F4BB;</span> Frontend: HTML5, CSS3, JavaScript,
                  Bootstrap
                </li>
                <li>
                  <span>&#x1F4BB;</span> Frontend: HTML, CSS, JavaScript,
                  React.js
                </li>
                <li>
                  <span>&#x1F4C8;</span> Backend: Node.js, Express.js, PHP
                </li>
                <li><span>&#x1F4D1;</span> Database: MongoDB , MySQL</li>
                <li><span>&#x1F4DA;</span> Version Control: Git, GitHub</li>
                <li>
                  <span>&#x1F4E1;</span> API Integration: REST APIs, JWT Auth
                </li>
                <li><span>&#x1F310;</span> Responsive Design & UI/UX</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Profile;


