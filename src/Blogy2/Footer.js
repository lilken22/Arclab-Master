import React from 'react';
import 'tailwindcss/tailwind.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram,FaChevronRight,FaMap,FaPhone,FaEnvelope} from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faChevronRight, faMap, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white">ArchLab.</h2>
            <p className="mt-2">Far far away, behind the word mountains, far from the countries.</p>
            <div className="flex mt-5 space-x-4">
              <Link to="#" className="text-white hover:text-green-400"><BsTwitterX /></Link>
              <Link to="#" className="text-white hover:text-green-400"><FaFacebook /></Link>
              <Link to="#" className="text-white hover:text-green-400"><FaInstagram /></Link>
            </div>
          </div>
          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-white">Community</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Projects</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Team</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Reviews</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />FAQs</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-white">About Us</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Our Story</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Meet the Team</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Careers</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-4 mb-8 md:mb-0">
            <h2 className="text-xl font-bold text-white">Company</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />About Us</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Press</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Contact</Link></li>
              <li><Link href="./" className="flex items-center hover:text-green-400"><FaChevronRight className="mr-2" />Careers</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 px-4">
            <h2 className="text-xl font-bold text-white">Have a Questions?</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><FaMap className="mr-2 text-2xl" /><span>203 Fake St. Mountain View, San Francisco, California, USA</span></li>
              <li className="flex items-center"><a href="tel:+239239210" className="flex items-center hover:text-green-400"><FaPhone className="mr-2"/> <span>+2 392 3929 210</span></a></li>
              <li className="flex items-center"><a href="mailto:info@yourdomain.com" className="flex items-center hover:text-green-400"><FaEnvelope className='mr-2'/>  <span>info@yourdomain.com</span></a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400">
          <p>&copy;{new Date().getFullYear()} All rights reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
