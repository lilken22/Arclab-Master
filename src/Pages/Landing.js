import React from 'react' 
import Box from '../Landing/Box'
import Nav from '../Components/Nav';
import Content1 from '../Landing/Content1'
import AbtLab from '../Landing/AbtLab'
import Counter from '../Landing/Counter'
import Project from '../Landing/Project'
import Testimonials from '../Landing/Testimonials'
import Price from '../Landing/Price'
import Blog from '../Landing/Blog'
import Footer from '../Components/Footer'


export default function Landing() {
  return (
    <main className='min-h-screen w-full'>
        <Nav />
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