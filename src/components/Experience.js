import React from 'react';
import './experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-wrapper">
          {/* Regular table for larger screens */}
          <div className="d-none d-lg-block">
            <table className="experience-table">
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

          {/* Cards for mobile view */}
          <div className="d-lg-none">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="experience-card">
                  <h4>Front-End Developer</h4>
                  <p className="company">ABC Tech</p>
                  <p className="duration">Jan 2023 – Present</p>
                  <p className="description">Built responsive UIs using React and Bootstrap.</p>
                </div>
              </div>
              
              <div className="col-12 mb-4">
                <div className="experience-card">
                  <h4>Intern Developer</h4>
                  <p className="company">XYZ Solutions</p>
                  <p className="duration">Jul 2022 – Dec 2022</p>
                  <p className="description">Worked on bug fixes and UI improvements.</p>
                </div>
              </div>
              
              <div className="col-12 mb-4">
                <div className="experience-card">
                  <h4>Intern Developer</h4>
                  <p className="company">XYZ Solutions</p>
                  <p className="duration">Jul 2022 – Dec 2022</p>
                  <p className="description">Worked on bug fixes and UI improvements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;