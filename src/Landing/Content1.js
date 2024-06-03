import React from 'react';
import { HiOutlinePlay } from 'react-icons/hi';
import building from "../images/bg_1.jpg";


export default function Content1() {
  return (
    <div className=''>
    <div className='static'>
      <img src={building} alt='home-building' className=' object-cover  w-full h-[100vh] ' />
      <div className='absolute top-10 left-0 h-full w-full flex flex-col justify-center text-white'>
        <div className='px-10'>
          <div className='absolute top-30 left-10 h-1 w-16 bg-green-500'></div>
          <h1 className='font-semibold text-5xl mb-6 text-black'>Modern <br/> <span>Innovative</span> <br/> Architecture</h1>
          <p className='text-gray-600 font-bold mb-6'>From as low as $20 A small river named Duden flows by their place and <br/> supplies it with the necessary regelialia.</p>
          <div className="flex items-center">
            <button className="bg-green-500 text-white font-semibold py-3 px-4 rounded mr-2">
              Explore Project
            </button>
            <div className='bg-green-700 h-12 w-12 rounded-full flex items-center justify-center'>
              <HiOutlinePlay className="text-white h-6 w-6" />
            </div>
            <span className="text-gray-600 ml-1">Watch our video</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}