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
    </div>
  );
};

export default CompanyCard;
