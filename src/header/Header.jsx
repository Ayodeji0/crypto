import React from 'react'
import './header.css'

function Header() {
  return (
     <>
     <div className='headerContainer'>
            <div className='headerLogo'>
                <img src={require('../images/Logo.png')} alt='logo'/>
            </div>
            <div className='headerLinks'>
                <ul>
                    <li>overview</li>
                    <li>who we are</li>
                    <li>our vision</li>
                    <li>FAQ</li>
                    <li>learn more</li>
                    <li>join our waiting list</li>                  
                </ul>
            </div>
            <div className='navbutton'>
                <span>left</span>
                <button>visit launchpad</button>
            </div>
            <div>
            <div className='HeaderContent'>
            <div>
                <h3>the world's <br/>
                largest dual<br/>
                wealth generator
                </h3>
                </div>
                <div className='headContentImage'>
                    <h3>The image</h3>
                </div>
                </div>
        </div>
        </div>

      
       </>
  )
}

export default Header