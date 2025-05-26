import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import offshore from "../assets/offshore.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

const CobelCallOff = () => {
  const content = [
    {
      image: offshore,
      title: "Call Off Services",
      progress: 70,
      article:
        " COBEL Oil & Gas have a large team of experienced professionals and technicians for short term urgent work scopes and for long term contracts. Our database has developed over many years and includes the top people in their fields. All trades are covered by this database, we have no limit to our scope of supply.\n We can offer solutions that include total project management and planning, to supplying teams of people to work under the client’s supervision.Our teams are experienced in working inside live plants in onshore and offshore environments.Safety is the first internal training that everyone receives, safety is a part of everyone’s daily routine, safety training never stops in COBEL.",
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
          CALL OFF SERVICE
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

export default CobelCallOff;
