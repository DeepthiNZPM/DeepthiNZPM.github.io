import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/siva-nnamizampat/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin/></a>
        <a href="https://github.com/DeepthiNZPM" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
