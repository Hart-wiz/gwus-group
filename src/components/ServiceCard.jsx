import React, { useState } from "react";

const ServiceCard = ({ title, text, image, RN, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <a
        href={link}
        className="flex flex-col  w-[350px] h-auto p-3 shadow-lg rounded-lg bg-white text-sm gap-0 max-md:w-full hover:bg-gray-300 "
      >
        <img
          src={image}
          alt="Oil Pump"
          className="w-full h-full object-cover rounded-md"
        />
        <h2 className="text-md font-bold mb-2 text-black">
          {title}
          <p className="text-blue-600 italic ">{RN}</p>
        </h2>
        <p className="text-gray-700 ">
          {isExpanded ? text : `${text.substring(0, 70)}...`}
          <b
            onClick={toggleReadMore}
            className=" text-green-500 px-4 py-2 rounded  transition font-semibold cursor-pointer"
          >
            {isExpanded ? "Less" : "More"}
          </b>
        </p>
      </a>
    </>
  );
};

export default ServiceCard;
