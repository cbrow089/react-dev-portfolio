import React from 'react';
import Layout from './Layout';

const Resume = () => {
  return (
    <Layout>
        <section>
          <h3>Resume</h3>

          <h3>
            Download my resume:{" "}
            <a href="resume.pdf" download>
              Resume
            </a>
          </h3>

          <h3>Skills</h3>
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Typescript</li>
              <li>PostgresSQL</li>
              <li>Git</li>
              <li>Prompt Engineering</li>
              <li>Debugging code</li>
              <li>Reverse Engineering Code</li>
          </ul>
        </section>
    </Layout>
  );
};

export default Resume;