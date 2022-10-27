import React from 'react'
import './fifthsection.css'

function FifthSection() {
  return (
    <div className="fifthContainer">
      <div className="fifthContentConatiner">
        <p className='fifthexperience'>EXPERIENCE THE EASE OF</p>
        <h3 className="fifthContainerTitle">WEALTH CREATION,</h3>
        <p>.</p>
        <div>
          <p className="fifthContainerSubtitle">
          UNLIKE ANY OTHER IN THE WORLD
          </p>
        </div>
      </div>
      <div className='imageContainer'>
        <img src={require('../images/drone-like.png')}alt="Awesome" className='droneImage'/>
      </div>
    </div>
  );
}

export default FifthSection