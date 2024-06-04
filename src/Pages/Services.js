import React from 'react'
// import Nav from '../Components/Nav';
import Content2 from '../Service/Content2';
import View from '../Service/View';
import Footer from '../Components/Footer'

export default function Service() {
  return (
    <div className='min-h-screen w-full'>
       {/* <Nav /> */}
        <Content2 />
        <View />
        <Footer />
    </div>
  )
}
