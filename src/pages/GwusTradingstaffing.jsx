import React from "react";
import Nav from "../components/Nav";
import front from "../assets/generalcontract.webp";
import Footer from "../components/Footer";
import staffing from "../assets/staffingbg.webp";

const GwusTradingstaffing = () => {
  const data = [
    {
      aspect: "STAFFING SERVICES",
      details:
        "Engineering staffing services for construction, oil & gas, and infrastructure ● Civil Engineers ● Mechanical Engineers ● Electrical Engineers ● HSE Officers ● QA/QC Specialists ● Lifting Supervisors / Riggers",
    },
  ];

  return (
    <div className="text-black">
      <Nav companyName="Gwus Trading & Contracting" />
      <main>
        <img
          src={staffing}
          alt="General Contracting Banner"
          className="w-full h-90 px-20"
        />
        <h1 className="text-center font-mono text-3xl py-6 flex justify-center items-center">
          <a
            href="/gwusTrading"
            className="text-sm mr-5 bg-blue-300 border border-blue-500 px-3 py-1 rounded hover:bg-blue-400 transition"
          >
            ⇦ Back
          </a>
          Staffing Services
        </h1>

        <section className="m-9 max-md:m-3">
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead className="bg-gray-100">
                <tr>
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
                      <ul className="list-disc list-inside space-y-1">
                        {item.details.split("●").map((point, i) => (
                          <li key={i}>{point.trim()}</li>
                        ))}
                      </ul>
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

export default GwusTradingstaffing;
