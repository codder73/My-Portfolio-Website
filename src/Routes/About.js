import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg_Prjct from '../components/HeroImg_Prjct';
import AboutMe from '../components/AboutMe';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg_Prjct heading="ABOUT MYSELF..." text="(A secret message-" text2="This is my first website😊)"/>
      <AboutMe />
      <Footer/>
    </div>
  )
}

export default About