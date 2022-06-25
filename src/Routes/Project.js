import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg_Prjct from '../components/HeroImg_Prjct';
import PricingCard from '../components/PricingCard';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg_Prjct heading="PROJECTS." text="These are some of my projects..." text2="Please view..." />
      <Work/>
      <PricingCard />
      <Footer/>
    </div>
  )
}

export default Project