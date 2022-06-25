import React from 'react';
import './HeroImg_Prjct.css';

const HeroImg_Prjct = (props) => {
  return (
    <div className='hero-img'>
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}<br/>{props.text2}</p>
        </div>
    </div>
  )
}

export default HeroImg_Prjct