import React from 'react'
import Nav from '../Components/Nav';
import Content2 from '../Blogs/Content2';
import Blogy from '../Blogs/Blogy';
import Footer from '../Components/Footer'

export default function Blogs() {
  return (
    <div className='min-h-screen w-full'>
       <Nav />
       <Content2 />
       <Blogy />
       <Footer />
    </div>
  )
}
