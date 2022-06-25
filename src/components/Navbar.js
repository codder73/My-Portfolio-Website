import './Navbar.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    
    window.addEventListener('scroll', changeColor);

    return (
    <div className={color ? 'Header Header-bg' : "Header"}>
        <Link to="/" scroll={true} duration="1000">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to={"/"} scroll={true} duration="1000"> Home </Link>
            </li>
            <li>
                <Link to={"/projects"} scroll={true} duration="1000"> Projects </Link>
            </li>
            <li>
                <Link to={"/about"} scroll={true} duration="1000"> About</Link>
            </li>
            <li>
                <Link to={"/contact"} scroll={true} duration="1000"> Contact </Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click ? (
            <FaTimes  size={20} style={{color: "#fff"}} />
            ) : (
            <FaBars  size={20} style={{color: "#fff"}} />
              )}
            
            
        </div>

    </div>
  )
            }

export default Navbar