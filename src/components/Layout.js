import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar />
        <div className='content'>
            {children}
        </div>
        <Footer />
{/*         <footer>
          <p>Copyright 2022 e.katsianos</p>
        </footer> */}
    </div>
  )
}
