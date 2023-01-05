import React from 'react'
import './Footer.css';
import { FaHome, FaReact} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footer-container'>
            
            <div className="left">
                <div className="home">
                    <Link to="/">
                        <FaHome />
                    </Link>
                </div>
                <div className="projects">
                <Link to="/projects">
                        Projects
                    </Link>
                </div>

                <div className="about">
                <Link to="/about">
                        About
                    </Link>
                </div>

            </div>

            <div className='right'>
                <h3>About This website.</h3>
                <p>I made this website using Reactjs. Some of its components use Threejs. Reactjs and Threejs are both a part of javascript language. It has a lot of frameworks and modules, react is one of the module of javascript which is used to make single page websites, and on the other side threejs is a framework of javascript used to make 3d objects in a website. These are both a greatly used in most of the websites. 
                    <p>To know more please visit---</p> </p> 
                <a href="https://reactjs.org/" target="_blank" >
                    <p>For Reactjs-   <FaReact size={20} color="#ggg"/> </p>
                </a>
                <a href="https://threejs.org/" target="_blank" >
                    <p>For Three.js-   <FaReact size={20} color="#ggg"/> </p>
                </a>
            </div>

        </div>
        <div className="shloka">
        मुक्ताभिमानी मुक्तो हि बद्धो बद्धाभिमान्यपि <Link to="/hrt"> । </Link>
        </div>
    </div>
  )
}

export default Footer;