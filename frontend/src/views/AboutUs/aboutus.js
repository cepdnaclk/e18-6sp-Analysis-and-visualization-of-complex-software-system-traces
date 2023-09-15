import React from 'react';
import './AboutUsPage.css'; // Import your custom CSS for styling

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="header">
        <h1>About Us</h1>
        <div className="underline"></div>
      </div>
      <div className="content">
        <div className="section">
          <h2>Our Project</h2>
          <p>
            We are dedicated to revolutionizing quality assurance in the world of Fintech applications using cutting-edge machine learning techniques. Our primary focus lies in the analysis and visualization of intricate software system traces.
          </p>
        </div>
        <div className="section">
          <h2>Team Members</h2>
          <ul>
            <li>Ishan Fernando - <a href="mailto:e18098@eng.pdn.ac.lk">e18098@eng.pdn.ac.lk</a></li>
            <li>Adeela Fernando - <a href="mailto:e18100@eng.pdn.ac.lk">e18100@eng.pdn.ac.lk</a></li>
            <li>Ridma Jayasundara - <a href="mailto:e18155@eng.pdn.ac.lk">e18155@eng.pdn.ac.lk</a></li>
          </ul>
        </div>
        <div className="section">
          <h2>Product Owners</h2>
          <p>
            Our esteemed project is led by Dr. Asitha Bandaranayake, Senior Lecturer at the Department of Computer Engineering, Faculty of Engineering, University of Peradeniya, and Prof. Rostislav Yavorskiy, Head of Research at Exactpro Systems.
          </p>
        </div>
        <div className="section">
          <h2>Understanding the Problem</h2>
          <p>
            Approximately 15 years ago, log files were straightforward and easily readable. In the present day, log files can extend to gigabytes, with error-containing selections reaching 200-300 megabytes. This complexity renders manual analysis impractical and error-prone, creating a formidable challenge for QA engineers.
          </p>
        </div>
        <div className="section">
          <h2>Solution</h2>
          <p>
            Our innovative solution involves the development of state-of-the-art machine learning models for anomaly detection and issue identification within system traces, such as log files. Additionally, we offer interactive dashboards for visualizing system traces, facilitating human comprehension of intricate systems. We rigorously evaluate our approach using real-world FinTech applications.
          </p>
        </div>
        <div className="section">
          <h2>System Traces</h2>
          <p>
            System traces encompass log files, data streams, and databases. Log files are textual records of system events, while data streams continuously store traces in binary format. Databases provide structured storage for trace data, simplifying analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
