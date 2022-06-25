import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Animations from '../components/Animation';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <br />
      <br />
      <Animations/>
      <Footer/>
    </div>
  )
}

export default Home;