import React from "react";
import Nav from "../components/Nav";
import front from "../assets/staffingbg.webp";
import Footer from "../components/Footer";

const GwusTradingstaff = () => {
  const data = [
    {
      aspect: "GWUS TRADING AND CONTRACTING",
      details:
        "At Gwus Trading and Contracting, we specialize in engineering staffing services, helping businesses in Qatar find highly qualified engineers and technical professionals. As a trusted engineering staffing agency, we provide top-tier staffing solutions to support construction, oil & gas, and infrastructure projects.",
    },
    {
      aspect: "EXPERT ENGINEERS, READY TO GO",
      details:
        "Hiring skilled engineers is critical for successful project execution. Our engineering staffing services ensure that businesses have access to experienced professionals who meet industry requirements.",
    },
    {
      aspect: "ENGINEERING STAFFING ",
      details:
        "Civil engineers ●	Electrical engineers,●	Mechanical engineers  ●	HSE officers/Engineers  ●	QA/QC specialists  ●	Lifting Supervisor / Riggers",
    },
  ];

  return (
    <div className="text-black">
      <Nav companyName="Gwus Trading & Contracting" />
      <main>
        <img
          src={front}
          alt="General Contracting Banner"
          className="w-full h-90 px-20 max-md:px-0"
        />
        <h1 className="text-center font-mono text-3xl py-6 flex justify-center items-center">
          <a
            href="/gwusTrading"
            className="text-sm mr-5 bg-blue-300 border border-blue-500 px-3 py-1 rounded hover:bg-blue-400 transition"
          >
            ⇦ Back
          </a>
          STAFFING SERVICES
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

export default GwusTradingstaff;
