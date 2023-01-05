import React from "react";
import "../components/School.css";
import sch1 from "../assets/School1.mp4";
import { GifPlayer } from "react-gif-player";


const School = () => {
  return (
    <div>
    <div className="mask2">
        <video src={sch1} autoPlay loop muted/>
    </div>
    
    </div>
  )
}

export default School
