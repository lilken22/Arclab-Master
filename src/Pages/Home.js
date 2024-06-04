import React from 'react' 
import Box from '../Home/Box'
// import Nav from '../Components/Nav';
import Content1 from '../Home/Content1'
import AbtLab from '../Home/AbtLab'
import Counter from '../Home/Counter'
import Project from '../Home/Project'
import Testimonials from '../Home/Testimonials'
import Price from '../Home/Price'
import Blog from '../Home/Blog'
import Footer from '../Components/Footer'


export default function Landing() {
  return (
    <main className='min-h-screen w-full'>
        {/* <Nav /> */}
        <Content1 />
        <Box />
        <AbtLab />
        <Counter />
        <Project />
        <Testimonials  />
        <Price />
        <Blog />
        <Footer />
    </main>
  )
}