import React from 'react';
import work1 from '../images/work-1.jpg';
import work2 from '../images/work-2.jpg';
import work3 from '../images/work-3.jpg';
import { Link } from 'react-router-dom';

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

const PricingSection = () => {
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

  return (
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
  );
};

export default PricingSection;