import React from 'react';
import './projects.css'

function Projects() {
  return (
    <section
        id="projects"
         className="projects-section"
        aria-labelledby="projects-heading"
      >
        <div  className="container">
          <h2 id="projects-heading">My Projects</h2>
          <div  className="row justify-content-center">
            <div  className="col-md-6 col-lg-5 mb-4">
              <article  className="project-card">
                <h3>Auto Parts Website</h3>
                <video controls>
                  <source src="media/eco.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>
                  E-commerce platform for buying/selling auto parts with chat
                  and dashboard.
                </p>
              </article>
            </div>

            <div  className="col-md-6 col-lg-5 mb-4">
              <article  className="project-card">
                <h3>Portfolio Website</h3>
                <video controls>
                  <source src="../media/projects.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>
                  Responsive portfolio site with experience, projects, and
                  contact form.
                </p>
              </article>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Projects;
