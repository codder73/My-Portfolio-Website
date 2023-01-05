import React from 'react';
import "./index.css";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Project from './Routes/Project';
import About from './Routes/About';
import School from './Routes/School';
import Me from './Routes/Me'
import Hrt from './Routes/Hrt';
import { Routes, Route } from 'react-router-dom';
import Coming from './Routes/Coming';
import { Spring } from 'react-spring';

function App() {
  return (
    <>
    <Routes>
      <>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/coming" element={<Coming />}/>
      <Route path="/school" element={<School />}/>
      <Route path="/me" element={<Me/>}/>
      <Route path='/hrt' element={<Hrt/>}/>
      </>
    </Routes>
    </>
  );
}

export default App;
