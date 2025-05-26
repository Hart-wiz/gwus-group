import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import offshore from "../assets/offshore.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

const CobelConstruction = () => {
  const content = [
    {
      image: offshore,
      title: "CONSTRUCTION",
      progress: 70,
      article:
        "COBEL’s construction execution model is built on experience, collaboration, integration, Safety and Quality. This consistent and structured approach to project execution allows the company to be more creative and responsive in synchronizing parallel activities, allocating optimal resources, communicating effectively, managing stake holder, mitigating, and managing tasks.\n Its formula for success combines comprehensive in-house resources, regional assets, strong project construction method, diversity and depth of experience, a project construction focuses on accomplishment approach, consistent work processes, and uncompromising methodology.\n COBEL focuses on Oil & Gas construction in both Onshore and Offshore projects. Depending on the size and scope of the project. COBEL will manage and lead a range of projects from beginning to end.\n Construction stage is a creative activity to crystallize worldwide materials and components to be assembled into one complete entity as project only possible by assorted standards, people, and cultures. COBEL always admire and respect racial varieties and cultural multiplicities.",
    },
  ];

  return (
    <div>
      <Nav />
      <main>
        <img src={slide4} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-wrap text-3xl py-6 flex flex-row justify-center">
          <a
            href="/cobel"
            className="text-black p-1 text-sm mr-5 bg-blue-300 border-3 border-blue-500 cursor-pointer  max-md:mr-0 "
          >
            ⇦back
          </a>
          COBEL FACILITY CONSTRUCTION
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

          <div className="text-black pl-40 w-screen max-md:pl-0 max-md:px-3">
            <h2 className="text-black text-2xl font-bold py-9 max-md:text-lg max-md:px-4 ">
              We offer multidisciplinary construction and installation services
              not limited to the following –
            </h2>
            <ul className=" list-disc list-inside max:md:px-4 ">
              <li>All types of Oil and Gas plant modifications</li>
              <li>Mechanical rotating & static equipment installation</li>
              <li>Shutdown works</li>
              <li>Piping welding and installation</li>
              <li>Pipelines installation</li>
              <li>
                All civil works including buildings, roads, foundations, etc.
              </li>
              <li>Electrical equipment installation</li>
              <li>Electrical wiring and termination</li>
              <li>
                Instrumentation & control equipment installation including
                wiring and termination
              </li>
              <li>Telecommunication equipment installation</li>
              <li>Offshore and onshore heavy lifting</li>
              <li>Critical activities execution such as hot taps</li>
              <li>Pre-commissioning and commissioning support</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CobelConstruction;
