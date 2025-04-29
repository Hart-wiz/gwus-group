import React from "react";

const CompanyCard = ({ company, frameBg, textBg }) => {
  return (
    <div>
      <div className={`${frameBg} max-md:w-[300px]`}>
        <h2
          className={`${textBg} p-8 max-md:p-0 max-md:py-5 max-md:text-center`}
        >
          {company}
        </h2>
      </div>
      {/* <h2 className="bg-blue-800 p-10">GWUSQATAR LIMITED</h2>
          <h2 className="bg-amber-700 p-10">GWUSCOBEL LIMITED</h2>
          <h2 className="bg-gray-800 p-10">GWUS TRADING & CONTRACTING</h2> */}
    </div>
  );
};

export default CompanyCard;
