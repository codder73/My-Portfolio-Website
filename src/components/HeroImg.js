import React from 'react'
import './HeroImg.css'
import IntroVideo from '../assets/loop_vid.mp4';
import {Link} from 'react-router-dom';
import Typical from 'react-typical';

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <video src={IntroVideo} autoPlay loop muted />
        </div>
        <div className="content">
            <p> Hellow, I'M Dagar, A </p>
            <span className='primary-text'>
                        {" "} 
                        <h1 className='title'>
                            <Typical className='profile-roling'
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev😎",
                                1000,
                                "Pythonista❕",
                                1000,
                                "Open Source Contributor",
                                1000,
                                "Frontend Dev 💻",
                                1000,
                                "A Gymnast",
                                1000,
                                "VR, 3d Dev ♾️",
                                1000,
                            ]}/>
                        </h1>
                </span>
                {/* <span className="profile-tagline">
                    Knack of solving problems...
                </span> */}
        <div className='btns'>
                <Link to="/projects" className='btn'>
                   Projects
                </Link>
                <Link to="/contact" className='btn btn-light'>
                    Contact
                </Link>
        </div>
        </div>
    </div>
        
  )
}

export default HeroImg;
