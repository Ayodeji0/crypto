import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navContainer'>
            <div className='navLogo'>
                <img src={require('../images/Logo.png')} alt='logo'/>
            </div>
            <div className='navLinks'>
                <ul>
                <li><a href="#who">who we are</a></li>
                <li><a href="#our-vision">our vision</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#learn">learn more</a></li>
                <li><a href="#join">join our waiting list</a></li>                
                </ul>
            </div>
            <div className='navbutton'>
                <span>left</span>
                <button className='visitbutton'>visit launchpad</button>
            </div>
            </div>   
              
             
            
       
  )
}

export default Navbar;