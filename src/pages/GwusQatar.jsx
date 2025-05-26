import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import slide3 from "../assets/realestate3.webp";
import slide4 from "../assets/realestate4.webp";
import slide5 from "../assets/realestate5.webp";
import realestate from "../assets/realestate.jpg";
import agency from "../assets/agency.jpg";
import consult from "../assets/consult.jpg";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import ServiceCard from "../components/ServiceCard";
import { gwusCobelCards } from "../assets/assets";

const GwusQatar = () => {
  const images = [slide3, slide4, slide5];
  const articles = [
    "With 40+ years of experience, we deliver proven, efficient property and facility management solutions for all real estate types.",
    "Our expert team—spanning architects to engineers and analysts—provides tailored property advisory to meet every client’s needs.",
    "Ou team of consultants provides personalized solutions to acquisitions, ownership, valuation, development, occupations and disposal of properties. ",
  ];
  const title = ["REAL-ESTATE & CONSTRUCTION"];

  const gwusCobelServe = [
    {
      image: realestate,
      title: "Project Development",
      link: "/gwuscobel/project",
    },
    {
      image: consult,
      title: "Real Estate Consultancy ",
      link: "/gwuscobel/consult",
    },
    {
      image: agency,
      title: "Agency Services",
      link: "/gwusCobel/agency",
    },
  ];
  return (
    <div>
      <Nav
        companyName="GwusCobel Nigeria LTD"
        className="text-sm text-yellow-700"
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
              {gwusCobelCards.map((card) => (
                <ServiceCard
                  image={card.image}
                  title={card.title}
                  text={card.about}
                />
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

export default GwusQatar;
