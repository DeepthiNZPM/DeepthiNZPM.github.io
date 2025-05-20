import React from 'react';
import './academicprojects.css';

const Academicprojects = () => {
  return (
    <section id='academicprojects'>
      <p>What I Built in Academia</p>
      <h2>Academic Projects</h2>

      <div className="container academic__container">

        <div className="project__card">
          <h3>Failover Load Balancer with Health Check Prioritization</h3>
          <p className="project__date">Spring 2024</p>
          <ul>
            <li>Built a Kubernetes-based failover load balancer with Python health monitoring.</li>
            <li>Used Locust for load testing and improved system performance by 20% under high traffic.</li>
            <li>Environments: Python, Docker, Kubernetes, Node.js, Locust, RESTful APIs</li>
          </ul>
          <a 
            href="https://github.com/DeepthiNZPM/k8s-health-check-load-testing" 
            className="project__link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project__card">
          <h3>Data Masking using Cryptography and Steganography</h3>
          <p className="project__date">Jan 2021 – April 2021</p>
          <ul>
            <li>Secured sensitive data using RSA encryption and image steganography techniques.</li>
            <li>Implemented secure data embedding and extraction with OpenCV, NumPy, and PyCryptodome.</li>
            <li>Environments: Python, MATLAB, Anaconda, OpenCV, Jupyter Notebook</li>
          </ul>
          <a 
            href="https://github.com/DeepthiNZPM/cryptography" 
            className="project__link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Academicprojects;
