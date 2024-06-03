import React from 'react';
import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import image4 from '../images/image_4.jpg';
import image5 from '../images/image_5.jpg';
import image6 from '../images/image_6.jpg';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { MdChat } from "react-icons/md";

const Blogy = () => {
  const blogs = [
    { id: 1, date: "Jan. 20, 2019", admin: "Admin", comments: 3, img: image1, title: "Even the all-powerful Pointing has no control about the blind texts" },
    { id: 2, date: "Jan. 20, 2019", admin: "Admin", comments: 3, img: image2, title: "Even the all-powerful Pointing has no control about the blind texts" },
    { id: 3, date: "Jan. 20, 2019", admin: "Admin", comments: 3, img: image3, title: "Even the all-powerful Pointing has no control about the blind texts" },
    { id: 4, date: "Jan. 20, 2019", admin: "Admin", comments: 3, img: image4, title: "Even the all-powerful Pointing has no control about the blind texts" },
    { id: 5, date: "Jan. 20, 2019", admin: "Admin", comments: 3, img: image5, title: "Even the all-powerful Pointing has no control about the blind texts" },
    { id: 6, date: "Jan. 20, 2019", admin: "Admin", comments: 3, img: image6, title: "Even the all-powerful Pointing has no control about the blind texts" },
  ];

  const categories = [
    { name: "Interior Design", count: 6 },
    { name: "Exterior Design", count: 8 },
    { name: "Industrial Design", count: 2 },
    { name: "Landscape Design", count: 2 },
  ];

  const popularArticles = [
    { img: image1, title: "Even the all-powerful Pointing has no control about the blind texts", date: "Oct. 04, 2018", author: "Dave Lewis", comments: 19 },
    { img: image2, title: "Even the all-powerful Pointing has no control about the blind texts", date: "Oct. 04, 2018", author: "Dave Lewis", comments: 19 },
    { img: image3, title: "Even the all-powerful Pointing has no control about the blind texts", date: "Oct. 04, 2018", author: "Dave Lewis", comments: 19 },
  ];

  const archives = [
    { month: "December 2018", count: 30 },
    { month: "November 2018", count: 20 },
    { month: "September 2018", count: 6 },
    { month: "August 2018", count: 8 },
  ];

  const tags = ["House", "Office", "Land", "Building", "Table", "Interior", "Exterior"];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-wrap -mx-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="md:w-1/2 w-full px-4 mb-6">
                  <div className="overflow-hidden shadow-lg">
                    <Link to={`/blogy2/${blog.id}`} className="block bg-cover bg-center h-48" style={{ backgroundImage: `url(${blog.img})` }}>
                    </Link>
                    <div className="p-4 flex">
                      <div className="flex-shrink-0">
                        <div className="text-gray-600 mb-2">
                          <div><Link href="#">{blog.date}</Link></div>
                          <div className='ml-10'><Link href="#">{blog.admin}</Link></div>
                          <div className='ml-14'><Link href="#" className="flex items-center"><MdChat className='mr-1' /> {blog.comments}</Link></div>
                        </div>
                      </div>
                      <div className="pl-3">
                        <h3 className="text-lg font-bold"><Link href="#">{blog.title}</Link></h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* pagination */}
            <div className="flex justify-center mt-8">
              <ul className="flex items-center space-x-2">
                <li><Link href="#" className="text-gray-500">&lt;</Link></li>
                <li><Link href="#" className="px-3 py-1 bg-green-400 text-white rounded-lg">1</Link></li>
                <li><Link href="#" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">2</Link></li>
                <li><Link href="#" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">3</Link></li>
                <li><Link href="#" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">4</Link></li>
                <li><Link href="#" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">5</Link></li>
                <li><Link href="#" className="text-gray-500">&gt;</Link></li>
              </ul>
            </div>
          </div>
          {/* category */}
          <div className="lg:w-1/3 w-full lg:pl-6 mt-8 lg:mt-0">
            <div className="p-6 shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Category</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className="mb-2 flex justify-between">
                    <Link href="#" className="text-gray-700">{category.name}</Link>
                    <span className="text-gray-500">({category.count})</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* popular article */}
            <div className="p-6 shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Popular Articles</h3>
              {popularArticles.map((article, index) => (
                <div key={index} className="mb-4 flex">
                  <Link href="#" className="block w-24 h-16 bg-cover bg-center mr-4" style={{ backgroundImage: `url(${article.img})` }}></Link>
                  <div>
                    <h3 className="text-sm font-bold"><Link href="#">{article.title}</Link></h3>
                    <div className="text-gray-600 text-xs flex space-x-4">
                      <div className="flex items-center">
                        <Link href="#" className='flex items-center'>
                          <FaCalendarAlt className='mr-1' />{article.date}
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <Link href="#" className='flex items-center'>
                          <IoIosPerson className='mr-1' /> {article.author}
                        </Link>
                      </div>
                      <div className="flex items-center">
                        <Link href="#" className='flex items-center'>
                          <MdChat className='mr-1' /> {article.comments}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Tag Cloud</h3>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <Link key={index} href="#" className="text-gray-700 bg-gray-200 px-3 py-1 rounded-lg mr-2 mb-2">{tag}</Link>
                ))}
              </div>
            </div>

            <div className="p-6 shadow-lg mb-6">
              <h3 className="text-lg font-bold mb-4">Archives</h3>
              <ul>
                {archives.map((archive, index) => (
                  <li key={index} className="mb-2 flex justify-between">
                    <Link href="#" className="text-gray-700">{archive.month}</Link>
                    <span className="text-gray-500">({archive.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Paragraph</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogy;

