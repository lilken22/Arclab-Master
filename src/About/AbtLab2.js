import React from 'react';
import about from "../images/about.jpg";
import same from "../images/same.jpg";

export default function AbtLab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-2/3 w-auto p-4">
      <div className="p-6 rounded-lg shadow-lg">
        <h2 className="mt-3 text-black text-5xl">ArchLab</h2>
        <p className="mt-4 text-xl text-gray-500">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
        <p className="mt-2 text-xl text-gray-500">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
      </div>

      <div className="relative p-6 rounded-lg shadow-lg">
        <img src={about} alt="home-building" className="object-cover h-full w-full" />
      </div>
      
      <div className="relative p-6 rounded-lg shadow-lg">
       <img src={same} alt="home-building" className="object-cover h-full w-full" />
       <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-green-400 bg-opacity-50 p-4">
        <div className="mb-6 w-full max-w-md">
      <span className="text-xl md:block hidden">Be Part of our Business</span>
      <h3 className="text-3xl mt-2">Request A Quote</h3>
        </div>

    <form className="w-full max-w-md">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="First Name" 
          className="bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-green-500 w-full md:w-2/3 py-2 px-3" 
        />
      </div>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Last Name" 
          className="bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-green-500 w-full md:w-2/3 py-2 px-3" 
        />
      </div>
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Service" 
          className="bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-green-500 w-full md:w-2/3 py-2 px-3" 
        />
      </div>
      <div className="mb-4">
        <input 
          type="tel" 
          placeholder="Phone Number" 
          className="bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-green-500 w-full md:w-2/3 py-2 px-3" 
        />
      </div>
      <div className="mb-4">
        <textarea 
          placeholder="Message" 
          className="bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none focus:border-green-500 w-full md:w-2/3 py-2 px-3 h-24 resize-none" 
        ></textarea>
      </div>
      <button 
        type="submit" 
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto">
        Request A Quote
      </button>
    </form>
     </div>
    </div>

    </div>
  );
}