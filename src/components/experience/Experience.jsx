import React from 'react'
import './experience.css'

const experiences = [
  {
    company: "Twilio",
    role: "Software Engineer",
    duration: "May 2024 – Present",
    location: "Remote, USA",
    bullets: [
      "Optimized messaging, voice, and video APIs using Java, Spring Boot, and Hibernate.",
      "Built RESTful and GraphQL APIs with Node.js, Express.js, and Spring Boot.",
      "Deployed services to AWS using Docker and Kubernetes.",
      "Enhanced UI with React, Redux, and TypeScript.",
      "Integrated Twilio Flex and Kafka for real-time communication."
    ]
  },
  {
    company: "Wipro",
    role: "Software Engineer",
    duration: "Aug 2021 – Jan 2023",
    location: "Hyderabad, India",
    bullets: [
      "Built Automated User Management System using Spring Boot & Microservices.",
      "Created UI with React and Redux.",
      "Secured APIs with Spring Security and JWT.",
      "Integrated Apache Kafka and Airflow for workflow automation.",
      "Optimized PostgreSQL DB with indexing and caching."
    ]
  },
  {
    company: "Find Facts",
    role: "Software Engineer",
    duration: "Jun 2019 – Jul 2021",
    location: "Hyderabad, India",
    bullets: [
      "Developed microservices using Java and Spring Boot.",
      "Built frontend UIs with React and Redux.",
      "Used Docker for containerization and CI/CD.",
      "Managed code with Git and GitHub in an Agile setup."
    ]
  }
];

const Experience = () => {
  return (
    <section id='experience'>
      <p>Where Have I Worked Before</p>
      <h2>My Work Experiences</h2>
      
      <div className="experience__cards">
        {experiences.map((exp, index) => (
          <div className="experience__card" key={index}>
            <h3>{exp.role} @ {exp.company}</h3>
            <small>{exp.duration} | {exp.location}</small>
            <ul>
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
