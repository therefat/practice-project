import React from 'react'
import Navbar from './NavbarC'
import Footer from './Footer'
import NavbarC from './NavbarC'

function Layout({ children }) {
  return (
    <div>
        <NavbarC/>
        <div className=''>
                {children}
                </div>
    <Footer/>
    </div>
  )
}

export default Layout