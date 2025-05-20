import React from 'react'
import './header.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineDocumentDownload } from 'react-icons/hi'

const Header = () => {
  return (
    <header>
      <div className="container header__container text-center">
        <p>Hello, I'm</p>
        <h1>Siva Nizampatnam</h1>
        <p>Java Full Stack Developer</p>

        <div className="header__icons">
          <a href="https://www.linkedin.com/in/siva-nnamizampat/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/DeepthiNZPM" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://drive.google.com/file/d/165px2YVPCrufZI8bQYgbry2qp9DwJez1/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="CV">
            <HiOutlineDocumentDownload />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
