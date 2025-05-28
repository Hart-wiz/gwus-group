import React from "react";
import Nav from "../components/Nav";

import Footer from "../components/Footer";
import oilproduct from "../assets/oilproduct.jpg";
const GwusTradingOilProduct = () => {
  const data = [
    {
      aspect: "Product Range",
      details:
        "Gwus engages in the trading of a diverse range of oilfield products, including equipment, tools, machinery, spare parts, chemicals, and other supplies required for upstream, midstream, and downstream activities in the oil and gas sector.",
    },
    {
      aspect: "Supply Chain Management",
      details:
        "Gwus manages the supply chain effectively, ensuring that oilfield products are delivered on time to clients in the oil and gas industry.",
    },
    {
      aspect: "Quality Assurance",
      details:
        "The company may implement stringent quality control measures to ensure that the oilfield products meet industry standards and specifications, promoting reliability and safety.",
    },
    {
      aspect: "Client Support",
      details:
        "Gwus provides expert guidance and assistance to clients in selecting the right oilfield products to meet their specific project requirements, ensuring compatibility and compliance with industry standards.",
    },
  ];
  return (
    <div className="text-black">
      <Nav
        companyName="Gwus Trading & Contracting"
        className="text-sm text-blue-700"
      />
      <main>
        <img
          src={oilproduct}
          alt=""
          className="h-90 w-screen px-9 max-md:px-0"
        />
        <h1 className="text-black text-center font-mono text-3xl py-6 flex flex-row justify-center">
          <a
            href="/gwusTrading"
            className="text-black p-1 text-sm mr-5 bg-blue-300 border-3 border-blue-500 cursor-pointer "
          >
            ⇦back
          </a>
          Trading In Oilfield Products
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

export default GwusTradingOilProduct;
