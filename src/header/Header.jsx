import React from 'react'
import HeaderContent from '../headerContent/HeaderContent'
import Navbar from '../navbar/Navbar'
import './header.css'

function Header() {
  return (
     <>
     <div className='headerContainer'>
     <Navbar/>
     <HeaderContent/>
     </div>
       </>
  )
}

export default Header