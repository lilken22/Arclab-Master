import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ImQuotesLeft } from 'react-icons/im';
import person1 from '../images/person_1.jpg';
import person2 from '../images/person_2.jpg';
import person3 from '../images/person_3.jpg';
import person4 from '../images/person_4.jpg';

const TestimonialItem = ({ text, image }) => {
  return (
    <div className="relative p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <span className="absolute top-0 left-0 text-green-400 text-4xl mt-0 ml-8">
          <ImQuotesLeft />
        </span>
        <p className="text-gray-700 mb-4">{text}</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-cover bg-center rounded-full overflow-hidden mr-3">
            <img src={image} alt="person" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-gray-800">Roger Scott</p>
            <p className="text-gray-600 text-sm">Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const testimonialData = [
    { text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: person1 },
    { text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: person2 },
    { text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: person3 },
    { text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: person4 },
    { text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.', image: person2 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-200 py-12 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="border-t-2 border-green-400 h-0 w-16 mr-3"></div>
          <p className="text-green-400 text-xl">Testimonial</p>
          <div className="border-t-2 border-green-400 h-0 w-16 ml-3"></div>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bolder mb-10">Happy Clients</h2>
        </div>
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <TestimonialItem key={index} text={testimonial.text} image={testimonial.image} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;