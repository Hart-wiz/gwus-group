import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import slide3 from "../assets/gwustrade-slide.webp";
import slide4 from "../assets/gwustrade-slide3.webp";
import slide5 from "../assets/gwustrade-slide4.webp";
import oilproduct from "../assets/oilfield-icon.jpg";
import building from "../assets/build-icon.jpg";
import general from "../assets/general-contracting-icon.jpg";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import ServiceCard from "../components/ServiceCard";
import { gwusTrade } from "../assets/assets";

const GwusTrading = () => {
  const images = [slide3, slide4, slide5];
  const articles = [
    "GWUS offers specialized trading services in oilfield products and building materials, serving the diverse needs of clients in both the oil & gas and construction industries.",
    "GWUS efficiently manages the supply chain to ensure timely delivery of oilfield products and building materials to clients in the oil and gas and construction industries.",
    " Also, GWUS Trading and Contracting delivers end-to-end solutions in civil construction, electro-mechanical works, interior fit-outs, landscaping, and engineering staffing—serving infrastructure, oil & gas, and building projects with technical expertise and skilled professionals.",
  ];
  const title = ["Trading in Oilfield Products & Building Materials"];

  const gwusCobelServe = [
    {
      image: oilproduct,
      title: "Trading In Oilfield Products",
      link: "/gwustrading/oilproduct",
    },
    {
      image: building,
      title: "Trading In Building Materials ",
      link: "/gwustrading/building",
    },
    {
      image: general,
      title: "General Contracting",
      link: "/gwustrading/general",
    },
  ];
  return (
    <div>
      <Nav
        companyName="Gwus Trading & Contracting"
        className="text-sm text-blue-700"
      />
      <section className="relative">
        <ImageSlider images={images} article={articles} title={title} />
      </section>
      <section className="my-10" id="services">
        <h2 className="text-4xl text-center font-thin p-9 text-black">
          OUR BUSINESS
        </h2>
        <div className="flex gap-20 justify-center  flex-wrap flex-row max-md:gap-10 ">
          {gwusCobelServe.map((card) => (
            <Link to={card.link}>
              <ImageCard cardImage={card.image} title={card.title} />
            </Link>
          ))}
        </div>
      </section>
      <section className="my-15">
        <h1 className="text-center font-thin text-4xl text-black">
          OUR PROJECTS
        </h1>
        <div>
          <main className=" px-9 py-9 max-md:px-0 max-md:py-9">
            <div className="flex gap-5 flex-wrap flex-row justify-center">
              {gwusTrade.map((card) => (
                <ServiceCard image={card.image} text={card.about} />
              ))}
            </div>
          </main>
        </div>
      </section>

      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default GwusTrading;
