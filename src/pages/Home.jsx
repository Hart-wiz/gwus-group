import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import poster from "../assets/gwusposter.png";

const Home = () => {
  return (
    <div className="text-black">
      <Nav />
      <main className=" max-md:flex-col px-12 flex">
        <section className=" text-left ">
          <h1 className="font-semibold text-3xl py-5 text-blue-950 max-md:px-3 max-md:text-2xl max-md:py-5">
            MARKET SERVED
          </h1>
          <div className="flex gap-8 flex-wrap   max-md:px-4 ">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </section>
        <section className="w-[400px]">
          <h1 className="font-semibold text-3xl py-5 text-blue-950 max-md:px-3 max-md:text-2xl max-md:py-5">
            WELCOME
          </h1>
          <div className="py-6  px-4 w-[350px]">
            <img src={poster} alt="" className="w-[300px]" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti quasi cum, consectetur molestias, accusantium deserunt
              </p>
            </div>
            <button className="bg-yellow-700 text-white w-full py-5 cursor-pointer hover:bg-red-700">
              CONNECT WITH US
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
