import React from "react";

import ServiceCard from "./ServiceCard";
import { cards } from "../assets/assets";

const Services = () => {
  return (
    <div>
      <main className=" px-9 py-9 max-md:px-0 max-md:py-9">
        <div className="flex gap-5 flex-wrap flex-row">
          {cards.map((card) => (
            <ServiceCard
              image={card.image}
              title={card.title}
              text={card.about}
              RN={`RN: ${card.RN}`}
              link={card.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
