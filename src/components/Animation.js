import React from 'react'
import AnimationApp from './AnimationApp';
import './Animation.css';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Animations = () => {
  return (
    <div className='area-container'>
        <AnimationApp/>
        <div className='area-text'>
            <h1>
              contact me-
            </h1>
            <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={20} color="#eee"/>
            </a>
            <a href="https://github.com/codder73" target="_blank" rel="noreferrer">
              <FaGithub size={20} color="#eee"/>
            </a>
            <a href="https://www.linkedin.com/in/i-am-a-coder-43ba79216/" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} color="#eee"/>
            </a>
            <a href="https://twitter.com/Iamacoder4" target="_blank" rel="noreferrer">
              <FaTwitter size={20} color="#eee" />
            </a>
            </div>
        </div>
    </div>
  )
}

export default Animations;