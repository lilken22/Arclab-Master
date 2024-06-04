import React from 'react'
// import Nav from '../Components/Nav';
import Content2 from '../About/Content2';
import AbtLab2 from '../About/AbtLab2';
import Counter2 from '../About/Counter2';
import Testimonials2 from '../About/Testimonials2';
import Price2 from '../About/Price2';
import Footer from '../Components/Footer'

export default function About() {
  return (
    <div className='min-h-screen w-full'>
      {/* <Nav /> */}
     <Content2 />
     <AbtLab2 />
     <Counter2 />
     <Testimonials2/>
     <Price2/>
     <Footer />
    </div>
  )
}
