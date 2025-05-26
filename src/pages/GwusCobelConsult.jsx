import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/realestate4.webp";
import realestate from "../assets/property.jpg";
import CobelProjectCard from "../components/CobelProjectCard";

const GwusCobelConsult = () => {
  const content = [
    {
      image: realestate,
      title: "Real Estate Consultancy Services",
      progress: 95,
      article: `With years of extensive experience in the industry, our teams of consultants offer advisory on vast areas of real estate to the delight of our clients (institutions, individuals, government and businesses.

      We provide comprehensive property advice in the form of estate strategies, asset management planning and cost reduction initiatives.
      
      We undertake feasibility studies, options appraisals and business case work which underpin capital investment decisions and funding approvals in all areas. We add value through the planning and development process, as well as help structure Public Private Partnerships (PPP) or Joint Ventures (JV).
      
      Our lease advisory team specializes in minimizing lease exit costs. We have extensive experience of advising on strategic sourcing, Private Finance Initiative (PFI) solutions and PFI contract management. We are also adept at valuing public sector property.
      
      In addition, we provide professional services in the following areas to ensure realization of set goals within reasonable time frame and cost limit:
      
      - Representing owners of acquired properties on compensation assessment, verification and claims
      - Representing Government or Corporate Organizations on all land acquisition and compensation matters
      - Rendering relevant professional advice to individuals and corporate bodies on PUBLIC PRIVATE PARTNERSHIP relationships
      - Receivership / Recovery Services on behalf of Clients in event of insolvency or liquidation
      - Processing of Governor's consent on subsequent land transactions.`,
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
          Consultancy Services
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

export default GwusCobelConsult;
