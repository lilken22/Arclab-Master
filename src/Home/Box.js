import React from 'react';
import { FcBriefcase } from "react-icons/fc";
import { IoMdWifi } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa";
import { SiSecurityscorecard } from "react-icons/si";

const GridBox = ({ icon, header, content }) => {
    return (
      <div className="p-4">
        <div className="bg-green-700 rounded-lg shadow-md p-8 text-white ">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 bg-green-400 rounded-full flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h2 className="text-lg font-bold mb-2 text-center">{header}</h2>
          <p className="text-gray-100 text-center">{content}</p>
        </div>
      </div>
    );
  };  


const FourGridBoxes = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <GridBox
          icon={<IoMdWifi className="text-4xl"/> }
          header="High Speed Internet"
          content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <GridBox
          icon={<FcBriefcase  className='text-4xl '/>}
          header="Professional Services"
          content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <GridBox
          icon={<FaUserSecret className="text-4xl" /> }
          header="Expert Team"
          content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
        <GridBox
          icon={<SiSecurityscorecard className="text-4xl"/> }
          header="Secure Transactions"
          content="A small river named Duden flows by their place and supplies it with the necessary regelialia."
        />
      </div>
    </div>
  );
};

export default FourGridBoxes;