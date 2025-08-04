import React from 'react';
import './experience.css'; 

function Experience() {
  return (
  <section id="experience" className="experience-section">
        <div className="container">
          <h2  className="section-title">Experience</h2>

          <div  className="experience-wrapper">
            <table  className="experience-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Company</th>
                  <th>Duration</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Front-End Developer</td>
                  <td>ABC Tech</td>
                  <td>Jan 2023 – Present</td>
                  <td>Built responsive UIs using React and Bootstrap.</td>
                </tr>
                <tr>
                  <td>Intern Developer</td>
                  <td>XYZ Solutions</td>
                  <td>Jul 2022 – Dec 2022</td>
                  <td>Worked on bug fixes and UI improvements.</td>
                </tr>
                <tr>
                  <td>Intern Developer</td>
                  <td>XYZ Solutions</td>
                  <td>Jul 2022 – Dec 2022</td>
                  <td>Worked on bug fixes and UI improvements.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
  );
}

export default Experience;
