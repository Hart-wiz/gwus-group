import React from "react";

const ImageCard = ({ cardImage, title }) => {
  return (
    <div className="flex">
      <div className="flex flex-col text-center ">
        <div className="hover:scale-95 hover:shadow-lg hover:shadow-black hover:border-none cursor-pointer  rounded-full bg-gray-300/30 overflow-hidden flex justify-center">
          <img src={cardImage} alt="" className="w-40" />
        </div>
        <h2 className="font-bold text-2xl text-blue-950">{title}</h2>
      </div>
    </div>
  );
};

export default ImageCard;
