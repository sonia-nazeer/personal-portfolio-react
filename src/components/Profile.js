// src/components/Profile.js
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import ProfileImage from '../assets/home.jpg';
import './profile.css';


function Profile() {
  const [text] = useTypewriter({
     words: [' Full Stack Developer!', ' MERN Stack Developer!', 'WAMP Stack Developer!'],
      loop: 0
    })
  return (
    <section>
      <div id="profile" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 left">
            <h2>Hi,👋 I am a</h2>
            <h1><span>{text}</span>
                  <Cursor cursorColor= '#ff5722' /> </h1>
            <p>
              Full Stack Web Developer | MERN & PHP/MySQL I build scalable,
              responsive websites with clean code and modern design — focused
              on performance, usability, and real-world functionality.
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/media/my-cv.pdf`}
              download="My_CV"
              className="button"
            >
              Download My CV
            </a>
          </div>

          {/* Right Column */}
          <div className="col-md-6 right mt-4 mt-md-0 text-center profile-img">
            <img src={ProfileImage} alt="Sonia Nazeer" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
