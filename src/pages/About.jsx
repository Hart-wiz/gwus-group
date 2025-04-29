import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import gwusposter from "../assets/gwusposter.png";

const About = () => {
  return (
    <div>
      <Nav />
      <main className="text-black flex justify-between  text-sm px-30 py-20 max-md:flex-col max-md:items-center">
        <section className="w-[400px] mx-10 space-y-4 max-md:w-[300px] max-md:mx-0">
          <div>
            <h1 className="text-xl font-extrabold">ABOUT GWUS GROUP</h1>
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
          </div>
        </section>
        <section className="w-[400px] m-8 max-md:w-[300px] ">
          <h2 className="mb-4 font-bold text-xl">Allied Companies</h2>
          <ul className="list-disc space-y-5">
            <li>
              <b>COBEL Oil and Gas Limited –</b> A dynamic energy company
              engaged in exploration, production, and distribution within the
              oil and gas sector.
            </li>
            <li>
              <b>CWUSQatar Limited – </b>A trusted player in international
              contracting, logistics, and engineering services based in Qatar.
            </li>
            <li>
              <b> GWUSCobel Limited – </b>A strategic joint venture focused on
              infrastructure development and energy services.
            </li>
            <li>
              <b>GWUS Trading and Contracting –</b> A leading provider of
              construction, procurement, and general contracting solutions.
            </li>
          </ul>
        </section>
        <section className="w-[400px] m-8  space-y-5 max-md:w-[300px] text-justify">
          <div>
            <h1 className=" font-bold text-xl mb-4">Mission</h1>
            <p>
              Our mission is to consistently deliver exceptional quality,
              attention to details and timely delivery with the environment in
              mind that exceeds all of our clients' expectations on every
              project we undertake.
            </p>
          </div>
          <div>
            <h1 className=" font-bold text-xl mb-4">VALUES</h1>
            <p>
              Our mission is embodied in five core values that guide every
              project we undertake.
            </p>
            <ul className="space-y-3 font-bold italic mt-5">
              <li>Quality</li>
              <li>Service</li>
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Efficiency</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
