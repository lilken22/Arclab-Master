import React from 'react'
import Nav from '../Components/Nav';
import Content2 from '../Project/Content2';
import Proj from '../Project/Proj';
import Footer from '../Components/Footer'

export default function Project() {
  return (
    <div className='min-h-screen w-full'>
      <Nav />
       <Content2 />
       <Proj />
       <Footer />
    </div>
  )
}