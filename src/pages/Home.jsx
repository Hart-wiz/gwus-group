import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import poster from "../assets/gwusposter.png";
// import oilpump from "../assets/oilpump.jpg";
import { cards } from "../assets/assets";
import CompanyCard from "../components/CompanyCard";
import ImageSlider from "../components/ImageSlider";
import slide3 from "../assets/cobol3.png";
import slide4 from "../assets/cobol4.jpg";
import slide5 from "../assets/cobol5.jpg";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Home = () => {
  const images = [slide3, slide4, slide5];
  const articles = [
    "COBEL focuses on Oil & Gas construction in both Onshore and Offshore projects. Depending on the size and scope of the project. COBEL will manage and lead a range of projects from beginning to end.",
    "COBEL has got an experienced shutdown & maintenance department, which renders its expertise to all the clients in Qatar Oil & Gas Industry in executing their Shutdowns and Maintenance works.",
    "COBEL Oil & Gas is committed to having an incident free workplace, providing safe environment to those involved in or affected by our activities. Effective health, safety and environmental leadership is essential in everything that we do. ",
  ];
  return (
    <div className="text-black">
      <Nav />
      <main className="flex flex-col  bg-gray-300 ">
        <section className="relative">
          <ImageSlider images={images} article={articles} />
        </section>
        <div className="flex-row flex max-md:flex-col px-12 pb-9  justify-center max-md:items-center max-md:px-4">
          <section className=" text-left pt-20 " id="services">
            <h1 className="text-center font-semibold text-3xl  text-blue-950 max-md:px-3 max-md:text-2xl max-md:py-5">
              MARKETS SERVED
            </h1>
            <Services />
          </section>
          <hr className="border-3 w-full border-white/60 md:hidden" />
          <section className="w-[350px] max-h:full max-md:flex max-md:flex-col max-md:items-center px-4 pt-30 max-md:pt-9">
            <h1 className="font-semibold text-3xl py-5 text-blue-950  max-md:text-2xl max-md:py-5 ">
              WELCOME
            </h1>
            <div className=" w-[300px] flex flex-col max-md:items-center ">
              <img src={poster} alt="" className="w-full h-[200px]" />

              <p className="py-5 text-justify">
                GWUS Group of Companies is a multi-sector conglomerate committed
                to excellence, innovation, and sustainable growth, with
                subsidiaries driving impact across key regional and global
                industries.
              </p>

              <button className="bg-yellow-700 text-white w-full  cursor-pointer p-3 hover:bg-red-900">
                CONNECT WITH US
              </button>
            </div>
          </section>
        </div>
      </main>
      <div className="pt-20" id="about">
        <About />
      </div>
      <div id="contact" className="bg-blue-700/20 pt-20">
        <Contact />
      </div>
      <section className="bg-blue-900 w-full h-auto  justify-between p-20  items-center font-bold text-white max-md:flex-col max-md:p-0  max-md:py-9  ">
        <h1 className="text-xl font-semibold lined mb-4 max-md:text-center max-md:mb-0.5  ">
          Allied Companies
        </h1>

        <div className="w-full h-auto flex justify-between  items-center font-bold text-white max-md:flex-col max-md:gap-0.9 max-md:flex max-md:gap-6 ">
          <CompanyCard
            company="COBEL OIL & GAS"
            textBg="red-light-frame"
            frameBg=""
          />
          <CompanyCard
            company="GWUSQATAR LIMITED"
            textBg="blue-light-frame "
            frameBg="bg-green-400"
          />
          <CompanyCard
            company="GWUSCOBEL LIMITED"
            textBg="amber-light-frame"
            frameBg=""
          />
          <CompanyCard
            company="GWUS TRADING & CONTRACTING"
            textBg="gray-light-frame"
            frameBg=""
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
