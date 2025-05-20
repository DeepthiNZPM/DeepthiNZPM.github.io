import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { useState, useEffect } from 'react'

const sections = ['about', 'experience', 'skills', 'education', 'academicprojects', 'contact']

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.3;
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top <= offset && sectionRect.bottom >= offset) {
            setActiveNav('#' + sectionId);
          }
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  

  return (
    <nav>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} aria-label="about"><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} aria-label="experience"><MdWorkOutline /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} aria-label="skills"><BiBook /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''} aria-label="education"><FaGraduationCap /></a>
      <a href="#academicprojects" onClick={() => setActiveNav('#academicprojects')} className={activeNav === '#academicprojects' ? 'active' : ''} aria-label="projects"><GoProjectSymlink /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} aria-label="contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
