import './WorkCard.css'
import React from 'react'
import tubeimg from '../assets/Youtubelogo.jpg';
import { Link, NavLink } from 'react-router-dom';


const WorkCard = (props) => {
  const Icon =() => {

  }
  return (
            <div className='project-card'>
                <img src={props.imgsrc} alt="image" />
                <h2 className='project-title'>{props.title}</h2>
                <div className="pro-details">
                  <p>{props.text}</p>
                <div className="pro-btns">
                    <a href={props.view} className="btn" target="_blank">
                    View
                    </a>
                    <a href="https://github.com/codder73" className="btn" >
                      Source
                    </a>
                </div>
                </div>
            </div>
  )
}

export default WorkCard;