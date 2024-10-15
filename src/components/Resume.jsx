import React from 'react';
import Layout from './Layout';
import resumePdf from '/assets/Resume.pdf'; // Import the resume PDF

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <Layout>
      <section>
        <h3>Resume</h3>

        <h3>
          Download my resume:{" "}
          <a href="#" onClick={handleDownload}>
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