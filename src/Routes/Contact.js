import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg_Prjct from '../components/HeroImg_Prjct';
import ContactMe from '../components/ContactMe';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg_Prjct heading="CONTACT ME." text="Yes! Let's have a chat..." text2=""/>
      <br />
      <br />
      <ContactMe />
      <Footer/>
    </div>
  )
}

export default Contact