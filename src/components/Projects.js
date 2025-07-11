
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Auto Parts Website",
      description: "E-commerce platform for buying/selling auto parts with chat and dashboard.",
      video: "/media/eco.mp4"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Responsive portfolio site with experience, projects, and contact form.",
      video: "/media/projects.mp4"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <video controls>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
