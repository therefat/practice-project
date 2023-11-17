import React, { useState } from 'react'
import Navbar from './NavbarC'
import Footer from './Footer'
import NavbarC from './NavbarC'
import axios from 'axios';

function Layout({ children }) {
  const [settings, setSettings]= useState();

  useState(()=>{
      axios.get('https://uol-v-2.hostprohub.com/api/settings?platform=web')
      .then(response=>{
          setSettings(response.data);
      })
  },[])
  console.log(settings)
  return (
   
    <div>
        <NavbarC/>
        <div className=''>
                {children}
                </div>
    <Footer footerData={settings?.footerManagement}/>
    </div>
  )
}

export default Layout