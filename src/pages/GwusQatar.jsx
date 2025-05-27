import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import slide3 from "../assets/gwusqatar.webp";
import slide4 from "../assets/gwusqatar3.webp";
import agency from "../assets/agency.jpg";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { gwusCobelCards } from "../assets/assets";
import IE from "../assets/IE-icon.png";
import install from "../assets/installation.png";
import supply from "../assets/supply.png";
import distribute from "../assets/distribute.png";
import rep from "../assets/rep.png";
import QatarCard from "../components/QatarCard";

const GwusQatar = () => {
  const images = [slide3, slide4, slide3];
  const articles = [
    "GWUSQATAR LIMITED is a diversified trading company engaged in the import, export, sales, and distribution of general goods, including vehicle and motorcycle spare parts, textiles, electrical, scientific, and industrial products",
    "The company also offers installation, fabrication, and acts as a merchant, agent, and manufacturer’s representative across multiple sectors.",
    "The company also offers installation, fabrication, and acts as a merchant, agent, and manufacturer’s representative across multiple sectors.",
  ];
  const title = ["GWUSQATAR LIMITED"];

  const gwusCobelServe = [
    {
      image: IE,
      title: "Import & Export Of General Goods And Services",
    },
    {
      image: install,
      title: "Installation Services & Fabrication ",
    },
    {
      image: supply,
      title: "Supplies ",
    },
    {
      image: rep,
      title: "  Merchants & Manufacturers Representatives, ",
    },
    {
      image: distribute,
      title: "Sales And Distribution Of General Goods And Services ",
    },
    {
      image: agency,
      title: "Agency Services",
    },
  ];
  return (
    <div>
      <Nav companyName="GwusQatar Limited" className="text-sm text-gray-700" />
      <section className="relative">
        <ImageSlider images={images} article={articles} title={title} />
      </section>
      <section className="my-10" id="services">
        <h2 className="text-4xl text-center font-thin p-9 text-black">
          OUR BUSINESS
        </h2>
        <div className="flex gap-0 justify-center  flex-wrap flex-row max-md:gap-10 ">
          {gwusCobelServe.map((card) => (
            <Link to={card.link}>
              <QatarCard
                image={card.image}
                title={card.title}
                article={card.article}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="my-15">
        <div className="bg-black">
          <p className="text-green-500 text-center max-md:px-5 max-md:text-justify max-md:text-lg text-4xl p-9">
            Dealers In All Articles Of Merchandise Including Electrical,
            Domestic, Scientific, Industrial Goods And General Goods.
          </p>
        </div>
      </section>

      <div id="about">
        <About />
      </div>

      <div id="contact" className="bg-gray-800/30">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default GwusQatar;
