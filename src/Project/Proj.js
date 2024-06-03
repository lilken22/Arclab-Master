import React from 'react';
import { Job } from '../Components/List';

export default function Proj() {
    const teamProj = Job;

    return (
        <main className='bg-white p-4'>
            <div className='grid sm:grid-cols-3 gap-4'>
                {teamProj.map((m) => (
                    <div
                        key={m.id}
                        className='relative rounded-lg shadow-md overflow-hidden'
                        style={{ height: '350px', width: '90%' }} // You can adjust the height and width as needed
                    >
                        <img src={m.imgUrl} alt={m.Title} className='w-full h-full object-cover  group-hover:opacity-50 transition-opacity duration-300' />
                        <div className='absolute bottom-0 left-0 p-4  text-white'>
                            <h2 className='text-left font-bold font-serif text-2xl'>{m.imgTitle}</h2>
                            <h3 className='text-left font-medium text-xl'>{m.imgSubTitle}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
