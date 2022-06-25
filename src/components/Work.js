import './WorkCard.css';
import React from 'react';
// import pro1 from '../assets/Youtubelogo.jpg'
// import pro2 from '../assets/reactjs.png';
// import pro3 from '../assets/class.png';
import ProjectCardData from './WorkCardData';
import WorkCard from './WorkCard';

const Work = () => {
    return (
      <div className="work-container">
              <h1 className="project-heading">
                  My Projects.</h1>
              <div className='project-container'>
                {ProjectCardData.map((val, ind) => {
                    return(
                        <WorkCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        />
                    )})}
              </div>
    </div>
    );
}

export default Work;
