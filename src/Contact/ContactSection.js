import React from 'react';
import {FaMap,FaPhone,FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="py-12 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-5">
          <div className="w-full mb-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
          </div>
          <div className="w-full"></div>
          <div className="w-full mb-4 md:mb-0">
            <p className='text-xl font-bold text-black'>
               We welcome opportunities for collaboration. Please submit invitations, business proposals, or general inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-5">
      <div className="w-full md:w-2/3 mb-5">
        <form action="#" className="bg-light p-5 shadow-md ">
          <div className="mb-4">
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your Name" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Your Email" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Subject" 
            />
          </div>
          <div className="mb-4">
            <textarea 
              name="" 
              id="" 
              cols="30" 
              rows="7" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <input 
              type="submit" 
              value="Send Message" 
              className="bg-green-500 text-white py-3 px-5 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
          </div>
        </form>
        <h2 className="text-center mt-5 text-xl font-semibold">If you got any questions please do not hesitate to send us a message</h2>
      </div>
      </div>

      <div className="flex justify-center mb-5">
      <div className="w-full md:w-2/3">
        <div className="flex flex-wrap mb-5">
          <div className="w-full md:w-1/3 text-center py-4">
            <div className="flex justify-center mb-2 mr-2  text-green-400 text-3xl">
              <span><FaMap className="" /></span>
            </div>
            <p><span className="font-semibold">Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
          <div className="w-full md:w-1/3 text-center py-4 border-l border-r border-gray-300">
            <div className="flex justify-center mb-2 mr-2  text-green-400 text-3xl">
              <span> <FaPhone /></span>
            </div>
            <p><span className="font-semibold">Phone:</span> <Link href="tel://1234567920" className="text-blue-500 hover:underline">+ 1235 2355 98</Link></p>
          </div>
          <div className="w-full md:w-1/3 text-center py-4">
            <div className=" flex justify-center mb-2 mr-2  text-green-400 text-3xl">
              <span><FaEnvelope /></span>
            </div>
            <p><span className="font-semibold">Email:</span> <Link href="mailto:info@yoursite.com" className="text-blue-500 hover:underline">info@yoursite.com</Link></p>
          </div>
        </div>
        </div>
       </div>
    </section>
  );
};

export default ContactSection;
