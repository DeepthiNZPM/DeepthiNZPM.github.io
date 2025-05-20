import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import NotFoundPage from './components/notFoundPage/NotFoundPage'
import Experience from './components/experience/Experience'
import Education from './components/education/Education' 
import Academicprojects from './components/academicprojects/Academicprojects'
const App = () => {
  const [isValidPage, setIsValidPage] = useState(true);

  // function to check if the current path is valid
  const checkValidPath = () => {
    const validPaths = ['/', '/about', '/skills', '/experience', '/education','/academicprojects','/contact'];
    if (!validPaths.includes(window.location.pathname)) {
      setIsValidPage(false);
    }
  }

  // check for valid path on mount
  React.useEffect(() => {
    checkValidPath();
  }, []);

  return (
    <>
        {isValidPage ? (
          <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Skills />
            <Education /> 
            <Academicprojects/>
            <Contact />
            
          </>
        ) : (
          <NotFoundPage />
        )}
    </>
  )
}

export default App
