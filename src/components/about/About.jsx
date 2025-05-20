import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <p className='text-center'>Get To Know</p>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <p>
            Software Engineer with 4+ years of experience in developing scalable Java-based applications. Good in Java 8+, Spring Boot, Microservices, Hibernate, and RESTful APIs, with expertise in React for full-stack development. Skilled in Docker, Kubernetes, AWS (EC2, S3, RDS), and CI/CD pipelines to streamline deployment. Strong in MySQL, PostgreSQL, and Agile methodologies (Scrum, Kanban). Experienced in TDD (JUnit, Mockito) and API testing with Postman.
          </p>

          <div className='about__button'>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
