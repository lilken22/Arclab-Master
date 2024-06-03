import React from 'react';
import { Link } from 'react-router-dom';
import { GiTeamIdea } from 'react-icons/gi';
import { FaDraftingCompass } from 'react-icons/fa';
import { SlLayers } from 'react-icons/sl';

// Image imports
import Furniture from '../images/work-7.jpg';
import work8 from '../images/work-8.jpg';
import work9 from '../images/work-9.jpg';
import work4 from '../images/work-4.jpg';
import work1 from '../images/work-1.jpg';
import work2 from '../images/work-2.jpg';
import work3 from '../images/work-3.jpg';

export default function Services() {
  const services = [
    { id: 1, icon: <GiTeamIdea />, title: 'Perfectly Design', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
    { id: 2, icon: <FaDraftingCompass />, title: 'Carefully Planned', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
    { id: 3, icon: <SlLayers />, title: 'Smartly Execute', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
  ];

  const ourServices = [
    { id: 1, icon:<SlLayers />, title: 'DESIGN', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
    { id: 2, icon:<SlLayers />, title: 'INDUSTRIAL DESIGN', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
    { id: 3, icon: <SlLayers />, title: 'ARCHITECTURE SUPPORT', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
    { id: 4, icon:<SlLayers />, title: 'RENOVATION', text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.' },
  ];

  const projects = [
    { id: 1, imgSrc: Furniture, category: 'Interior Design', title: 'Office Interior Design' },
    { id: 2, imgSrc: work8, category: 'Interior Design', title: 'Office Interior Design' },
    { id: 3, imgSrc: work9, category: 'Interior Design', title: 'Office Interior Design' },
    { id: 4, imgSrc: work4, category: 'Interior Design', title: 'Office Interior Design' },
  ];

  const plans = [
    {
      image: work1,
      price: 78,
      features: [
        'Planning Solution',
        '10 Construction Drawings',
        'Selection Materials',
        'Unlimited Revision'
      ]
    },
    {
      image: work2,
      price: 88,
      features: [
        'Planning Solution',
        '10 Construction Drawings',
        'Selection Materials',
        'Unlimited Revision'
      ]
    },
    {
      image: work3,
      price: 98,
      features: [
        'Planning Solution',
        '10 Construction Drawings',
        'Selection Materials',
        'Unlimited Revision'
      ]
    }
  ];

  const PricingCard = ({ image, price, features }) => {
    return (
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg flex flex-col justify-between h-full">
          <div>
            <div className="bg-cover bg-center h-48 rounded-t-lg" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="p-6">
              <ul className="mb-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="text-green-400 mr-2">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between bg-gray-100 py-2 px-4 rounded-b-lg">
            <span className="text-2xl font-semibold">
              <sup>$</sup>{price}<sub>/mo</sub>
            </span>
            <Link to="#" className="bg-green-400 text-white py-2 px-4 rounded-lg">Get Started</Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-start mb-5 pb-5">
            <div className="md:w-1/3">
              <h2 className="mb-4 text-2xl font-bold">Our Work Flow</h2>
            </div>
            <div className="md:w-2/3 pl-0 md:pl-5">
              <div className="border-l-4 pl-4">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            {services.map((service) => (
              <div key={service.id} className="md:w-1/3 p-4">
                <div className="shadow-md overflow-hidden h-full flex flex-col text-center">
                  <div className="flex justify-center items-center p-4 rounded-full bg-blue-400 w-16 h-16 mx-auto">
                    <span className="text-white text-4xl">{service.icon}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-start mt-5 py-5">
            <div className="md:w-1/3">
              <h2 className="mb-4 text-2xl font-bold">Our Services</h2>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
            </div>
          <div className="md:w-2/3 pl-0 md:pl-5">
            <div className="flex flex-wrap">
             {ourServices.map((service) => (
              <div key={service.id} className="w-full md:w-1/2 p-4">
             <div className=" rounded-lg shadow-md overflow-hidden h-full flex flex-col text-center">
             <div className="flex justify-center items-center p-4 rounded-full bg-blue-400 w-16 h-16 mx-auto">
            <span className="text-white text-4xl">{service.icon}</span>
            </div>
             <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.text}</p>
            </div>
            </div>
           </div>
          ))}
          </div>
          </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-start mb-5 pb-2">
            <div className="md:w-1/3">
              <span className="text-sm uppercase tracking-wider text-gray-600 mb-2 block">Projects</span>
              <h2 className="mb-4 text-2xl font-bold">Done Projects</h2>
            </div>
            <div className="md:w-2/3 pl-0 md:pl-5">
              <div className="border-l-4 pl-4">
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            {projects.map((project) => (
              <div key={project.id} className="w-full md:w-1/4 p-4">
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={project.imgSrc} className="w-full h-48 object-cover" alt={project.title} />
                  <div className="p-4">
                    <span className="text-sm uppercase tracking-wider text-gray-600 mb-2 block">{project.category}</span>
                    <h3 className="text-xl font-bold">
                      <Link to="#">{project.title}</Link>
                    </h3>
                  </div>
                  <Link to={project.imgSrc} className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-80 transition-opacity duration-300">
                    <span className="icon-expand"></span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <div className="border-t-2 border-green-400 w-16"></div>
              <p className="text-green-400 text-xl mx-3">Pricing</p>
              <div className="border-t-2 border-green-400 w-16"></div>
            </div>
            <h2 className="text-5xl font-bold">Price & Plans</h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                image={plan.image}
                price={plan.price}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </section>      
    </div>
  );
}
