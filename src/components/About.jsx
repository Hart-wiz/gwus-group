import React from "react";
import gwusposter from "../assets/gwusposter.png";
import check from "/check.svg";

const About = () => {
  return (
    <div>
      <main className="text-blue-950 flex justify-between  text-sm px-30 py-9 max-md:flex-col max-md:items-center">
        <section className="w-[400px] mx-10 space-y-4 max-md:w-[300px] max-md:mx-0">
          <div>
            <h1 className="text-xl font-extrabold text-blue-800">
              ABOUT GWUS GROUP
            </h1>
          </div>
          <div className="w-[400px]  space-y-7 max-md:w-[300px]">
            <img
              src={gwusposter}
              alt="poster"
              className="w-[400px] max-md:w-[300px]"
            />

            <p className="font-bold text-justify">
              GWUS Group of Companies is a diversified conglomerate with a
              strong presence across multiple sectors, unified by a commitment
              to excellence, innovation, and sustainable growth. Our
              subsidiaries operate in key industries that drive both regional
              and global progress.
            </p>
            <div className="flex gap-30font-bold italic gap-20 w-4 ">
              <ul className="flex flex-col gap-4">
                <li className="flex  items-center">
                  <img src={check} alt="" />
                  Quality
                </li>
                <li className="flex items-center">
                  <img src={check} alt="" />
                  Service
                </li>
                <li className="flex items-center">
                  <img src={check} alt="" />
                  Integrity
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center">
                  <img src={check} alt="" />
                  Innovation
                </li>
                <li className="flex items-center">
                  <img src={check} alt="" />
                  Efficiency
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-[400px] m-8 max-md:w-[300px] ">
          <h2 className="mb-4 font-bold text-xl text-blue-900">
            Allied Companies
          </h2>
          <ul className="list-disc space-y-5">
            <li>
              <b className="text-blue-900">COBEL Oil and Gas Limited –</b>COBEL
              Oil & Gas is a trusted EPIC contractor delivering onshore and
              offshore engineering, procurement, construction, and commissioning
              projects. With an experienced in-house team, we offer end-to-end
              solutions—from platform upgrades and brownfield modifications
              offshore to plant improvements, civil works, and commissioning
              onshore.
            </li>
            <li>
              <b className="text-blue-900">GWUSQatar Limited – </b>GWUSQATAR
              LIMITED is a diversified company engaged in general trading,
              import and export, and the sales and distribution of vehicles,
              motorcycles, spare parts, textiles, and a wide range of goods. We
              also offer installation, fabrication, and supply services, acting
              as merchants, manufacturers’ representatives, agents, and dealers
              in electrical, domestic, scientific, industrial, and general
              merchandise.
            </li>
            <li>
              <b className="text-blue-900"> GWUSCobel Limited – </b>GWUSCOBEL
              LTD is into Real Estate Services, Survey Services and General
              Construction Services; Construction of Road, Drainages, Culverts
              and buildings.
            </li>
            <li>
              <b className="text-blue-900">GWUS Trading and Contracting –</b>
              GWUS provides trading services in oilfield products and building
              materials, serving both the oil & gas and construction sectors. We
              also specialize in engineering staffing, supplying qualified
              professionals—such as civil, mechanical, and electrical engineers,
              HSE officers, QA/QC specialists, and riggers—to support major
              projects across Qatar.
            </li>
          </ul>
        </section>
        {/* <section className="w-[400px] m-8  space-y-5 max-md:w-[300px] text-justify">
          <div>
            <h1 className=" font-bold text-xl mb-4 text-blue-900">Mission</h1>
            <p>
              Our mission is to consistently deliver exceptional quality,
              attention to details and timely delivery with the environment in
              mind that exceeds all of our clients' expectations on every
              project we undertake.
            </p>
          </div>
          <div>
            <h1 className=" font-bold text-xl mb-4 text-blue-900">VALUES</h1>
            <p>
              Our mission is embodied in five core values that guide every
              project we undertake.
            </p>
            <ul className="space-y-3 font-bold italic mt-5">
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Quality
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Service
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Integrity
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Innovation
              </li>
              <li className="flex gap-3 items-center">
                <img src={check} alt="" />
                Efficiency
              </li>
            </ul>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default About;
