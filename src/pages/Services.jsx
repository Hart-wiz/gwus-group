import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { cards } from "../assets/assets";

const Services = () => {
  return (
    <div>
      <Nav />
      <main className=" px-30 py-20 max-md:px-0 max-md:py-9">
        <h1 className="text-black font-bold text-xl max-md:text-lg max-md:px-4">
          OUR SERVICES
        </h1>
        <div className="flex gap-8 flex-wrap justify-center  max-md:px-0 max-md:py-2">
          {cards.map((card) => (
            <ServiceCard
              image={card.image}
              title={card.title}
              text={card.about}
              RN={card.RN}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
