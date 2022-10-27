import React from 'react'
import './unbeatable.css'

function Unbeatable() {
  return (
    <div className='unbeatableContainer'>
        <div className='unbeatableTitle'>
            <h5 className='unbeatablemajor'>UNBEATABLE</h5>
            <div className='unbeatabelehuge'>  
                <div> <img src={require('../images/10X.png')}alt='10x'/> </div>
                <div className='unbeatableimagespan'>
                <span>RETURNS</span> 
                <span>RETURNS</span> 
                <span>RETURNS</span> 
                </div>   
            </div>
            <p className='unbeatablesubtitleTitle'>GUARANTEED  </p>
        </div>
        <div className='unbeatablesubTitleimage'>
       
        </div>
        </div>

  )
}

export default Unbeatable