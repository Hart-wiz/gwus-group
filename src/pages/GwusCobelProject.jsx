import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/realestate4.webp";
import realestate from "../assets/property.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

const GwusCobelProject = () => {
  const content = [
    {
      image: realestate,
      title: "Facility and Property Management",
      progress: 95,
      article:
        " Our Property Management encompasses a range of services to ensure the health and safety, efficiency, welfare, comfort and functionality of a building, its residents and employees and the ground it sits on. With over four decade's hands on experience in this field, we have proven track record in property/facility management that optimize resources for investors and occupiers across all types of properties. We source, secure and select tenants for vacant properties, negotiating and collecting rents and ensuring that tenants comply with the covenants contained in the respective contractual agreements. We also attend to issues such as maintenance, repairs and carrying out such other functions that enable the optimization of investor's returns. Managing complexity is our strength, as demonstrated by the scale and quality of our portfolio; our ability to manage large portfolios is underpinned by our human and technological infrastructure, size, and national spread which provide constant monitoring and control across the entire portfolio with real-time reporting of key indicators. We complement property management with facilities management, helping our clients realize savings in the operation and maintenance of their property portfolio while meeting their service standards and sustainability goals without compromising Quality, Health, Safety and Environment (QHSE)",
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
          Property Management
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

export default GwusCobelProject;
