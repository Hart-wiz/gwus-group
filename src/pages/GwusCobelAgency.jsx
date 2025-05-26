import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/realestate4.webp";
import realestate from "../assets/property.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

const GwusCobelAgency = () => {
  const content = [
    {
      image: realestate,
      title: "Agency Services",
      progress: 95,
      article:
        "No matter the dynamics, when it comes to letting, buying or selling of properties of any kind, we are a trusted ally. We are experienced well enough to transact or advice across various kinds of properties such as flats, houses, land and commercial property for sale and rent in Nigeria. Our experts are available and ready to meet your needs. We are always poised to offer you the benefits of our strong market knowledge. Our in-house experts will guide you all the way through transaction conceptualization to completion. ",
    },
    {
      image: realestate,
      title: "Survey Services ",
      progress: 95,
      article:
        " Our Survey Services include: Perimeter/Boundary Survey, Drone Survey, Mapping, Topographic Survey, As-Built Survey, Setting Out, Pipeline Survey, Route Survey, and  Bathymetric Survey",
    },
  ];

  return (
    <div>
      <Nav />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center max-md:text-lg">
          <a
            href="/gwuscobel"
            className="text-black p-1 text-sm mr-5   bg-blue-300 border-3 border-blue-500 cursor-pointer "
          >
            ⇦back
          </a>
          Real-estate Agency Services
        </h1>

        <section className="flex gap-1 m-9 flex-col max-md:m-0">
          {content.map((content) => (
            <CobelProjectCard
              image={content.image}
              title={content.title}
              article={content.article}
              progress={content.progress}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GwusCobelAgency;
