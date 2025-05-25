import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import slide3 from "../assets/realestate3.webp";
import slide4 from "../assets/realestate4.webp";
import slide5 from "../assets/realestate5.webp";

const GwusCobel = () => {
  const images = [slide3, slide4, slide5];
  const articles = [
    "With 40+ years of experience, we deliver proven, efficient property and facility management solutions for all real estate types.",
    "Our expert team—spanning architects to engineers and analysts—provides tailored property advisory to meet every client’s needs.",
    "Ou team of consultants provides personalized solutions to acquisitions, ownership, valuation, development, occupations and disposal of properties. ",
  ];
  const title = ["REAL-ESTATE & CONSTRUCTION"];
  return (
    <div>
      <Nav
        companyName="GwusCobel Nigeria LTD"
        className="text-sm text-yellow-700"
      />
      <section className="relative">
        <ImageSlider images={images} article={articles} title={title} />
      </section>
    </div>
  );
};

export default GwusCobel;
