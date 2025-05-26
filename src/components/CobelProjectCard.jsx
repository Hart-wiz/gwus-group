import React, { useState } from "react";

const CobelProjectCard = ({ image, title, article, progress }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      <div className="px-20 h-auto w-full text-justify flex text-black gap-4 max-md:flex-col max-md:w-screen max-md:px-0">
        <div className="  overflow-hidden max-md:w-screen">
          <img
            src={image}
            alt=""
            className="border-solid border-4 max-md:w-screen w-[500px]"
          />
        </div>
        <article className="w-auto max-md:flex max-md:items-center max-md:flex-col max-md:px-3">
          <h2 className="text-3xl font-mono max-md:text-lg max-md:text-center">
            {title}
          </h2>

          <p className="text-gray-700 ">
            {isExpanded ? article : `${article.substring(0, 170)}...`}
            <b
              onClick={toggleReadMore}
              className=" text-green-500 px-4 py-2 rounded  transition font-semibold cursor-pointer"
            >
              {isExpanded ? "Less" : "More"}
            </b>
          </p>

          <progress value={progress} max={100} className="self-start">
            complete
          </progress>
        </article>
      </div>
      <hr className="border-0.5 border-blue-500/30 my-6" />
    </div>
  );
};

export default CobelProjectCard;
