import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import offshore from "../assets/offshore.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

const CobelShutdown = () => {
  const content = [
    {
      image: offshore,
      title: "SHUTDOWN PROJECTS",
      progress: 95,
      article:
        " COBEL has got an experienced shutdown & maintenance department, which renders its expertise to all the clients in Qatar Oil & Gas Industry in executing their Shutdowns and Maintenance works.\n COBEL have expertise in mobilization of Skilled and experienced personnel, plant and equipment required for the shutdown activities both in onshore and offshore facilities in Qatar.\nCOBEL has successfully completed many major shutdowns in Refineries, Petrochemical, Fertilizer, LNG and other oil and gas process facilities both onshore and offshore. We are one of the pioneers in Qatar in executing Maintenance and Shutdown works.",
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
          SHUTDOWN PROJECTS
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

export default CobelShutdown;
