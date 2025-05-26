import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import offshore from "../assets/offshore.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

const CobelHse = () => {
  const content = [
    {
      image: offshore,
      title: "Health, Safety, and Environment Management",
      progress: 95,
      article:
        " COBEL Oil & Gas is committed to having an incident free workplace, providing safe environment to those involved in or affected by our activities. Effective health, safety and environmental leadership is essential in everything that we do. In all our activities we are actively committed to stringent health and safety standards./n Protecting the environment is a high priority for us. We take a precautionary approach, identifying and assessing the potential risks and impacts of our operations on the world around us, at all stages of a project.",
    },
  ];

  return (
    <div>
      <Nav />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center">
          <a
            href="/cobel"
            className="text-black p-1 text-sm mr-5 bg-blue-300 border-3 border-blue-500 cursor-pointer "
          >
            ⇦back
          </a>
          HSE
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

export default CobelHse;
