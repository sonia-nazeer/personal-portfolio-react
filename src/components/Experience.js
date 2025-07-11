import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <table className="experience-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Duration</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TechNova</td>
            <td>Frontend Developer</td>
            <td>2022 - Present</td>
            <td>
              Developed responsive user interfaces using HTML, CSS, JavaScript,
              and Bootstrap.
            </td>
          </tr>
          <tr>
            <td>CodeWorks</td>
            <td>Web Developer Intern</td>
            <td>2021 - 2022</td>
            <td>
              Built landing pages, fixed bugs, and collaborated on real-world
              client projects.
            </td>
          </tr>
          <tr>
            <td>PixelPeak</td>
            <td>UI/UX Designer</td>
            <td>2020 - 2021</td>
            <td>
              Designed user interfaces and improved user experience for mobile
              and web apps.
            </td>
          </tr>
          <tr>
            <td>DevNest</td>
            <td>React Developer (Freelance)</td>
            <td>2020 (6 months)</td>
            <td>
              Developed dynamic frontend components using React and integrated
              REST APIs.
            </td>
          </tr>
          <tr>
            <td>SmartApps Studio</td>
            <td>Junior Web Developer</td>
            <td>2019 - 2020</td>
            <td>
              Maintained company website and worked on client projects using
              PHP and MySQL.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Experience;
