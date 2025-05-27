import React from "react";

const QatarCard = ({ title, image, article }) => {
  return (
    <div>
      <div className="w-70 h-auto text-center  text-blue-800  rounded-2xl flex flex-col items-center">
        <img src={image} alt="" className="w-40 h-30 rounded-full" />
        <h2 className="text-blue-800">{title}</h2>
        <article className="text-blue-800">{article}</article>
      </div>
    </div>
  );
};

export default QatarCard;
