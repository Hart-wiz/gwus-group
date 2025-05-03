import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import MyLeafletMap from "../components/MyLeafletMap";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Nav />
      <main className="p-9 text-black flex gap-6  max-md:flex-wrap justify-center">
        <section>
          <h1 className="font-bold text-xl p-3">Find US Here </h1>
          <div className="w-xl max-md:w-screen px-3">
            <MyLeafletMap />
          </div>
          <div>
            <h1 className="p-3">Office Address</h1>
          </div>
        </section>
        <section className="w-full">
          <h1 className="font-bold text-xl py-3">Contact Us </h1>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
