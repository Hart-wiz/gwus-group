import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ServiceCard from "./ServiceCard";
import { cards } from "../assets/assets";

const Services = () => {
  return (
    <div>
      <main className=" px-9 py-9 max-md:px-0 max-md:py-9">
        <div className="flex gap-3 flex-wrap flex-row">
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
    </div>
  );
};

export default Services;
