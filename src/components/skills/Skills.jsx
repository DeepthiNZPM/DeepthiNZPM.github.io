import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <p>What Skills I Have</p>
      <h2>My Skills</h2>

      <div className="container experience__container">

        {/* FRONTEND */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {[
              { tech: "React", level: "Experienced" },
              { tech: "Redux", level: "Experienced" },
              { tech: "HTML", level: "Experienced" },
              { tech: "CSS", level: "Experienced" },
              { tech: "JavaScript", level: "Experienced" },
              { tech: "TypeScript", level: "Intermediate" },
              { tech: "Bootstrap", level: "Experienced" },
              { tech: "Angular", level: "Intermediate" }
            ].map(({ tech, level }, i) => (
              <article className='experience__details' key={i}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{tech}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {[
              { tech: "Java", level: "Experienced" },
              { tech: "Spring Boot", level: "Experienced" },
              { tech: "Node.js", level: "Intermediate" },
              { tech: "Express.js", level: "Intermediate" },
              { tech: "Flask", level: "Intermediate" },
              { tech: "Django", level: "Intermediate" },
              { tech: "GraphQL", level: "Basic" },
              { tech: "REST APIs", level: "Experienced" }
            ].map(({ tech, level }, i) => (
              <article className='experience__details' key={i}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{tech}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* DATABASES */}
        <div className="experience__backend">
          <h3>Databases</h3>
          <div className="experience__content">
            {[
              { tech: "MySQL", level: "Experienced" },
              { tech: "PostgreSQL", level: "Experienced" },
              { tech: "MongoDB", level: "Intermediate" },
              { tech: "Oracle", level: "Intermediate" },
              { tech: "SQL Server", level: "Intermediate" },
              { tech: "Redshift", level: "Basic" },
              { tech: "Cassandra", level: "Basic" }
            ].map(({ tech, level }, i) => (
              <article className='experience__details' key={i}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{tech}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* TOOLS & TECHNOLOGIES */}
        <div className="experience__backend">
          <h3>Tools & Technologies</h3>
          <div className="experience__content">
            {[
              { tech: "Docker", level: "Experienced" },
              { tech: "Kubernetes", level: "Intermediate" },
              { tech: "AWS (EC2, S3, Lambda)", level: "Experienced" },
              { tech: "Jenkins", level: "Intermediate" },
              { tech: "Git", level: "Experienced" },
              { tech: "Postman", level: "Experienced" },
              { tech: "Swagger", level: "Experienced" },
              { tech: "Kafka", level: "Intermediate" },
              { tech: "JWT", level: "Experienced" },
              { tech: "OAuth 2.0", level: "Experienced" }
            ].map(({ tech, level }, i) => (
              <article className='experience__details' key={i}>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>{tech}</h4>
                  <small className='text-light'>{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
