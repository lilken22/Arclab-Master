import React from 'react';
import { list } from '../Components/List';

export default function People() {
    const teamList = list;

    return (
        <main className='bg-[rgb(245,235,220)] p-4'>
            <div className='grid sm:grid-cols-3 gap-4'>
                {teamList.map((m) => (
                    <div
                        key={m.id}
                        className='rounded-lg shadow-md overflow-hidden flex flex-col'
                        style={{ height: '500px', width: '100%' }} // You can adjust the height and width as needed
                    >
                        <img src={m.imgUrl} alt={m.Title} className='w-full h-1/2 object-cover' />
                        <div className='p-4 bg-white flex-grow flex flex-col justify-center'>
                            <h2 className='text-center text-[rgb(43,2,0)] font-bold font-serif text-2xl'>{m.imgTitle}</h2>
                            <h3 className='text-center text-gray-700 font-medium text-xl'>{m.imgSubTitle}</h3>
                            <p className='text-center text-gray-600'>{m.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}