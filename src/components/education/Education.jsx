import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id='education'>
      <p>My Academic Background</p>
      <h2>Education</h2>

      <div className="container education__container">
        <div className="education__card">
          <h3>Master of Science in Computer Science</h3>
          <h4>California State University, Long Beach</h4>
          <p className="education__duration">Jan 2023 – Dec 2024</p>
        </div>

        <div className="education__card">
          <h3>Bachelor of Technology in Computer Science & Engineering</h3>
          <h4>Bapatla Engineering College, India</h4>
          <p className="education__duration">Jun 2017 – Apr 2021</p>
        </div>
      </div>
    </section>
  )
}

export default Education
