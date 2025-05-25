import React from "react";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider";
import slide3 from "../assets/cobol3.png";
import slide4 from "../assets/cobol4.jpg";
import slide5 from "../assets/cobol5.jpg";
import ServiceCard from "../components/ServiceCard";
import { cards } from "../assets/assets";

const Cobel = () => {
  const images = [slide3, slide4, slide5];
  const articles = [
    "COBEL focuses on Oil & Gas construction in both Onshore and Offshore projects. Depending on the size and scope of the project. COBEL will manage and lead a range of projects from beginning to end.",
    "COBEL has got an experienced shutdown & maintenance department, which renders its expertise to all the clients in Qatar Oil & Gas Industry in executing their Shutdowns and Maintenance works.",
    "COBEL Oil & Gas is committed to having an incident free workplace, providing safe environment to those involved in or affected by our activities. Effective health, safety and environmental leadership is essential in everything that we do. ",
  ];

  return (
    <div className="text-black">
      <Nav
        companyName="cobel Oil & Gas Nigeria Limited"
        className="text-sm text-red-700"
      />
      <section className="relative">
        <ImageSlider
          images={images}
          article={articles}
          title="COBEL Oil & Gas Nigeria Limited"
        />
      </section>
      <section>
        <h1>OUR PROJECTS</h1>
        <div>
          <main className=" px-9 py-9 max-md:px-0 max-md:py-9">
            <div className="flex gap-5 flex-wrap flex-row">
              {cards.map((card) => (
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
    </div>
  );
};

export default Cobel;
