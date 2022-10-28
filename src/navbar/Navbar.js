import React from 'react'
import { FaMoon} from 'react-icons/fa'
import './navbar.css'

function Navbar() {
  return (
    <div className='navContainer'>
            <div className='navLogo'>
                <img src={require('../images/Logo.png')} alt='logo'/>
            </div>
            <div className='navLinks'>
                <ul>
                <li><a href="#who">Who We Are</a></li>
                <li><a href="#our-vision">Our Vision</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#learn">Learn More</a></li>
                <li><a href="#join">Join our waiting list</a></li>                
                </ul>
            </div>
            <div className='navbutton'>
                <FaMoon className='navIcon'/> 
                <button className='visitButtonContainer'>visit launchpad</button>
                
            </div>
            </div>   
              
             
            
       
  )
}

export default Navbar;