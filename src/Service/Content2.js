import React from 'react'
import buildingtwo from "../images/bg_2.jpg";
import { Link } from 'react-router-dom';
import {FaChevronRight} from "react-icons/fa";

export default function Content2() {
  return (
    <div>
        <div className="static" >
          <img src={buildingtwo} alt='home-building' className=' object-cover  w-full h-[100vh] '/>
          <div className="absolute top-10 left-0 h-full w-full flex flex-col justify-center text-black">
          <div className="px-10">
          <div className="">
          <p className='flex justify-start items-center'>
            <span className=''>
            <Link className='text-black hover:text-green-400 text-2xl' href="./Landing">Home <FaChevronRight className="ml-0 inline-flex items-center text-green-300" /></Link>
            </span>
            <span className=' ml-4 text-black hover:text-green-400 text-2xl'>
            Service <FaChevronRight className="ml-0 text-green-300 inline-flex items-center" />
            </span>
          </p>
            <h1 className="mt-6 text-5xl">Service</h1>
          </div>
          </div>
          </div>
        </div>
    </div>    
  )
}