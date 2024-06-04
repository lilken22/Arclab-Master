import React from 'react';
import Geometric  from "../images/work-1.jpg";
import Twin  from "../images/work-2.jpg";
import Cultural  from "../images/work-3.jpg";
import Office  from "../images/work-4.jpg";
import Complex  from "../images/work-5.jpg";
import { Link } from 'react-router-dom';

const PortfolioItem = () => {
  return (
    <div>
      <div className="row justify-center mt-10">
        <div className="col-md-12 heading-section text-center ftco-animate mb-5">
        <div className="flex items-center justify-center">
        <div className="border-t-2 border-green-400 h-0 w-16 mr-3"></div>
        <p className=" text-green-400">PROJECTS</p>
        <div className="border-t-2 border-green-400 h-0 w-16 ml-3"></div>
        </div>
         <h2 className="mb-2 text-6xl">Our Unique Latest Projects</h2>
         </div>
        </div>



    <div className="h-full w-auto mb-8 mt-16">
      {/* first image */}
      <div className="flex flex-wrap items-center ">
        <div className="w-full md:w-5/12 h-96   overflow-hidden">
          <img src={Geometric} alt='home-building' className='w-full h-full object-cover ml-4' />
        </div>
        <div className="w-full md:w-7/12 p-8 md:pl-12  text-center">
          <div className="mb-0">
            <div className=" mb-4">
              <span className="text-2xl text-black ">Exterior 12/07/2020</span>
              <h2 className="text-5xl font-bold mb-4">
                Geometric Building
              </h2>
            </div>
            <div className="relative">
              <p className="text-gray-600 mb-4">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br/> there live the blind texts. Separated they live in Bookmarksgrove.
              </p>
              <p>
                <Link to="#" className="custom-btn text-green-500  py-2 px-4 ">
                  VIEW PORTFOLIO
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      
         {/* second image */}
        <div className="flex flex-wrap items-center mt-12">
          <div className="w-full md:w-7/12 p-8 md:pl-12 text-center">
            <div className="mb-0">
              <div className="top mb-4">
               <span className="text-2xl text-black">Furniture 12/07/2020</span>
               <h2 className="text-5xl font-bold mb-4 ">
                 <a href="work.html">Twin Office</a>
               </h2>
              </div>
              <div className="relative">
                <p className="text-gray-600 mb-4">
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts. Separated they live in Bookmarksgrove.
                </p>
                <p>
                 <Link to="#" className="custom-btn text-green-600  py-2 px-4 ">
                 VIEW PORTFOLIO
                 </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 h-96  overflow-hidden" >
           <img src={Twin} alt='home-building' className='w-full h-full object-cover mr-4' />
          </div>
        </div>
        

        {/* third image */}
        <div className="flex flex-wrap items-center mt-12">
        <div className="w-full md:w-5/12 h-96   overflow-hidden">
          <img src={Cultural} alt='home-building' className='w-full h-full object-cover ml-4' />
        </div>
        <div className="w-full md:w-7/12 p-8 md:pl-12 text-center">
          <div className="mb-0">
            <div className="top mb-4">
              <span className="text-2xl text-black">Building 12/07/2020</span>
              <h2 className="text-5xl font-bold mb-4">
                <a href="work.html">Cultural Complex Centre</a>
              </h2>
            </div>
            <div className="relative">
              <p className="text-gray-600 mb-4">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br/> there live the blind texts. Separated they live in Bookmarksgrove.
              </p>
              <p>
                <Link to="#" className="custom-btn text-green-500  py-2 px-4 ">
                  VIEW PORTFOLIO
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>


     {/* fourth image */}
     <div className="flex flex-wrap items-center mt-12">
        <div className="w-full md:w-7/12 p-8 md:pl-12 text-center">
          <div className="mb-0">
            <div className="top mb-4">
              <span className="text-2xl text-black">Furniture 12/07/2020</span>
              <h2 className="text-5xl font-bold mb-4">
                 <a href="work.html">Twin Office</a>
              </h2>
            </div>
            <div className="relative">
              <p className="text-gray-600 mb-4">
                 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,<br/> there live the blind texts. Separated they live in Bookmarksgrove.
              </p>
              <p>
                <Link to="#" className="custom-btn text-green-500  py-2 px-4 ">
                  VIEW PORTFOLIO
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 h-96  overflow-hidden" >
          <img src={Office} alt='home-building' className='w-full h-full object-cover mr-4' />
        </div>
      </div>


     {/* fifth image */}
     <div className="flex flex-wrap items-center mt-12">
        <div className="w-full md:w-5/12 h-96   overflow-hidden">
          <img src={Complex} alt='home-building' className='w-full h-full object-cover ml-4' />
        </div>
        <div className="w-full md:w-7/12 p-8 md:pl-12 text-center">
          <div className="mb-0">
            <div className="top mb-4">
              <span className="text-2xl text-black">Building 12/07/2020</span>
              <h2 className="text-5xl font-bold mb-4">
                <a href="work.html">Cultural Complex Centre</a>
              </h2>
            </div>
            <div className="relative">
              <p className="text-gray-600 mb-4">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br/> there live the blind texts. Separated they live in Bookmarksgrove.
              </p>
              <p>
                <Link to="#" className="custom-btn text-green-500  py-2 px-4 ">
                  VIEW PORTFOLIO
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};  
  
export default PortfolioItem;

