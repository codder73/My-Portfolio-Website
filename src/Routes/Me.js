import React from 'react'
import ForMe from "../assets/ForMe.mp4"
const Me = () => {
  return (<div>
    <div className='mask2' >
        <video src={ForMe} loop muted autoPlay />
    </div>
    <div color='white'>
        Connections from computers is not there, coding is not regular nor sufficient here for me
    </div>
  </div>
  )
}

export default Me