import React, { useState } from "react";
import oilpump from "../assets/oilpump.jpg";

const ServiceCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `
    COBEL Oil and Gas Limited specializes in energy exploration, production, and distribution.
  `;

  return (
    <div className="flex  w-[400px] h-auto p-4 shadow-lg rounded-lg bg-white text-sm gap-5 max-md:p-0 ">
      <img
        src={oilpump}
        alt="Oil Pump"
        className="w-40 h-25 object-cover rounded-md max-md:h-20 max-md:w-30"
      />
      <div className="">
        <h2 className="text-md font-bold mb-2">
          COBEL Oil & Gas Services Limited
        </h2>
        <p className="text-gray-700 mb-4 ">
          {isExpanded ? text : `${text.substring(0, 130)}...`}
          <button
            onClick={toggleReadMore}
            className=" text-green-500 px-4 py-2 rounded  transition font-semibold cursor-pointer"
          >
            {isExpanded ? "Less" : "More"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
