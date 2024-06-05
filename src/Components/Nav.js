import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Nav() {
  const Links = [
    { name: "Home", Link: "/Home" },
    { name: "About", Link: "/about" },
    { name: "Team", Link: "/team" },
    { name: "Service", Link: "/service" },
    { name: "Project", Link: "/project" },
    { name: "Blogs", Link: "/blogs" },
    { name: "Contact", Link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className='fixed w-full top-0 left-0 cursor-pointer z-50 md:bg-gray-900 md:z-20'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center  md:text-white text-green-500 text-center'>
          ArcLab.
        </div>

        <div onClick={toggleMenu} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden' aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <IoMdClose /> : <IoMdMenu />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 bg-gray-600 text-green-500' : 'top-[-490px] opacity-0'} md:opacity-100 md:bg-transparent md:text-black`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.Link} className='md:text-white md:hover:text-green-700 duration-500 font-bold'>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
