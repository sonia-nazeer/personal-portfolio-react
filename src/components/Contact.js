import React from 'react';
import './contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row align-items-start">
          {/* Left Column - Contact Info */}
          <div className="col-md-6 mb-4 mb-md-0 contact-left">
            <h1 className="contact-heading">
              Let's Talk About <br />
              your Project!
            </h1>
            
            <div className="social-links">
              <h3 className="social-heading">Follow Me</h3>
              <ul className="social-list">
                <li className="social-item">
                  <i className="fab fa-instagram social-icon"></i>
                  <span className="social-text">@random_insta_id</span>
                </li>
                <li className="social-item">
                  <i className="fab fa-github social-icon"></i>
                  <span className="social-text">github.com/randomuser</span>
                </li>
                <li className="social-item">
                  <i className="fab fa-linkedin social-icon"></i>
                  <span className="social-text">linkedin.com/in/randomprofile</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-md-6 contact-right">
            <form className="contact-form" action="#" method="post">
              <label className="form-label">
                Your Name <span className="required-star">*</span>
              </label>
              <input className="form-input" type="text" name="name" required />

              <label className="form-label">
                Your Email <span className="required-star">*</span>
              </label>
              <input className="form-input" type="email" name="email" required />

              <label className="form-label">
                Service you are looking for <span className="required-star">*</span>
              </label>
              <input className="form-input" type="text" name="service" required />

              <label className="form-label">Your Message</label>
              <textarea className="form-textarea" name="message" rows="4" maxLength="500"></textarea>

              <button className="submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;