import React from 'react';
import './contact.css'
function Contact() {
  return (
    <section id="contact"  className="contact-section">
        <div  className="container">
          <div  className="row align-items-start">
            <div className="col-md-6 mb-4 contact-left">
              <h1>
                Let’s Talk About <br />
                your Project!
              </h1>
              <div  className="social-links">
                <h3>Follow Me</h3>
                <ul>
                  <br />
                  <li>
                    <i  className="fab fa-instagram"></i>
                    <span>@random_insta_id</span>
                  </li>
                  <br />
                  <li>
                    <i  className="fab fa-github"></i>
                    <span>github.com/randomuser</span>
                  </li>
                  <br />
                  <li>
                    <i  className="fab fa-linkedin"></i>
                    <span>linkedin.com/in/randomprofile</span>
                  </li>
                </ul>
              </div>
            </div>

            <div  className="col-md-6 contact-right">
              <form action="#" method="post">
                <label>Your Name <span>*</span></label>
                <input type="text" name="name" required />

                <label>Your Email <span>*</span></label>
                <input type="email" name="email" required />

                <label>Service you are looking for <span>*</span></label>
                <input type="text" name="service" required />

                <label>Your Message</label>
                <textarea name="message" rows="4"></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

  );
}

export default Contact;
