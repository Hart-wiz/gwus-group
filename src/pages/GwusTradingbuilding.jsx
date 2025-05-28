import React from "react";
import Nav from "../components/Nav";
import front from "../assets/gwustrade-slide3.webp";
import Footer from "../components/Footer";
import oilproduct from "../assets/oilproduct.jpg";
const GwusTradingbuilding = () => {
  const data = [
    {
      aspect: "Product Range",
      details:
        " Gwus trading services encompass a broad array of building materials, including construction equipment, raw materials, finishing products, and more, catering to the needs of the construction industry.",
    },
    {
      aspect: "Project Support",
      details:
        "The company assists clients in choosing suitable building materials for construction projects, taking into account factors such as project specifications, budget constraints, and timelines.",
    },
    {
      aspect: "Logistics and Delivery",
      details:
        "The company manages logistics and delivery processes to transport building materials to construction sites promptly and efficiently.",
    },
    {
      aspect: "Quality Control",
      details:
        "Gwus Trading  may implement quality control and assurance measures to guarantee the durability, safety, and performance of building materials.",
    },
  ];
  return (
    <div className="text-black">
      <Nav
        companyName="Gwus Trading & Contracting"
        className="text-sm text-blue-700"
      />
      <main>
        <img src={front} alt="" className="h-90 w-screen" />
        <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center">
          <a
            href="/gwusTrading"
            className="text-black p-1 text-sm mr-5 bg-blue-300 border-3 border-blue-500 cursor-pointer "
          >
            ⇦back
          </a>
          Trading In Building Materials
        </h1>

        <section className="flex gap-1 m-9 flex-col max-md:m-0">
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 text-left px-4 py-2">
                    Aspect
                  </th>
                  <th className="border border-gray-300 text-left px-4 py-2">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={idx}>
                    <td className="border border-gray-300 px-4 py-2 font-semibold">
                      {item.aspect}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {item.details}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GwusTradingbuilding;
