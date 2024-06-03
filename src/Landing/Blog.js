import React from 'react';
import 'tailwindcss/tailwind.css';
import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import image4 from '../images/image_4.jpg';
import { FaComments } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BlogCard = ({ image, date, admin, comments, title, link }) => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Link to={link} className="block h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></Link>
        <div className="p-4">
          <div className="text-gray-500 text-sm mb-2 flex items-center justify-between">
            <div className='text-2xl'><Link to="#">{date}</Link></div>
            <div className='text-2xl'><Link to="#">{admin}</Link></div>
            <div className='text-xl'>
                <Link to="#" className="flex items-center">
                  <FaComments />{comments}
                </Link>
            </div>
          </div>
          <h3 className="text-xl font-semibold"><Link to={link}>{title}</Link></h3>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      image: image1,
      date: 'June 01, 2020',
      admin: 'Admin',
      comments: '3',
      title: 'Make Peace With Your Broken Pieces',
      link: 'blog-single.html',
    },
    {
      image: image2,
      date: 'June 01, 2020',
      admin: 'Admin',
      comments: '3',
      title: 'Make Peace With Your Broken Pieces',
      link: 'blog-single.html',
    },
    {
      image: image3,
      date: 'June 01, 2020',
      admin: 'Admin',
      comments: '3',
      title: 'Make Peace With Your Broken Pieces',
      link: 'blog-single.html',
    },
    {
      image: image4,
      date: 'June 01, 2020',
      admin: 'Admin',
      comments: '3',
      title: 'Make Peace With Your Broken Pieces',
      link: 'blog-single.html',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
      <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4">
            <div className="border-t-2 border-green-400 w-16"></div>
            <p className="text-green-400 text-xl mx-3">Blogs</p>
            <div className="border-t-2 border-green-400 w-16"></div>
          </div>
          <h2 className="text-5xl font-bold">Recent Blog</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              date={blog.date}
              admin={blog.admin}
              comments={blog.comments}
              title={blog.title}
              link={blog.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

