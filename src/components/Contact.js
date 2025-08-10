import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';

function Contact() {
  const [state, handleSubmit] = useForm("xdkdywlq"); 

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row align-items-start">
          
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
                  <a
                    href="https://github.com/sonia-nazeer"
                    className="social-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/sonia-nazeer
                  </a>
                </li>
                <li className="social-item">
                  <i className="fab fa-linkedin social-icon"></i>
                  <a
                    href="https://www.linkedin.com/in/sonia-nazeer-aba72b280"
                    className="social-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.linkedin.com/in/sonia-nazeer-aba72b280
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 contact-right">
            {state.succeeded ? (
              <p style={{ color: "green", fontWeight: "bold" }}>
                ✅ Thank you! Your message has been sent.
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <input className="form-input" type="text" name="name" required />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <label className="form-label">
                  Your Email <span className="required-star">*</span>
                </label>
                <input className="form-input" type="email" name="email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <label className="form-label">
                  Service you are looking for <span className="required-star">*</span>
                </label>
                <input className="form-input" type="text" name="service" required />
                <ValidationError prefix="Service" field="service" errors={state.errors} />

                <label className="form-label">Your Message</label>
                <textarea className="form-textarea" name="message" rows="4" maxLength="500"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button className="submit-button" type="submit" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
