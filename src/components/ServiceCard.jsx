import React, { useState } from "react";

const ServiceCard = ({ title, text, image, RN }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex  w-[400px] h-auto p-3 shadow-lg rounded-lg bg-white text-sm gap-5 max-md:w-full  ">
      <img
        src={image}
        alt="Oil Pump"
        className="w-37 h-25 object-cover rounded-md max-md:h-20 max-md:w-30"
      />

      <div className="">
        <h2 className="text-md font-bold mb-2 text-black">
          {title}
          <p className="text-blue-600 italic ">RN:{RN}</p>
        </h2>
        <p className="text-gray-700 ">
          {isExpanded ? text : `${text.substring(0, 120)}...`}
          <b
            onClick={toggleReadMore}
            className=" text-green-500 px-4 py-2 rounded  transition font-semibold cursor-pointer"
          >
            {isExpanded ? "Less" : "More"}
          </b>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
