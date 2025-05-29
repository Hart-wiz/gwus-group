import React from "react";
import Nav from "../components/Nav";
import front from "../assets/generalcontract.webp";
import Footer from "../components/Footer";

const GwusTradinggeneral = () => {
  const data = [
    {
      aspect: "CIVIL CONSTRUCTION",
      details:
        "Earthworks - Excavation, Shoring, Dewatering ● Piling Works ● Concreting Works ● Structural Steel - Built-up Structural Elements, Steel Framing, Standingseam Roofing System, Structural Steel Bridge ● Structural Strengthening - Concrete Jacketing Works, (CFRP) Carbon Fibre Reinforced Polymer System ● Waterproofing Systems - Torch-Applied Membrane, Inverted Roofing System, Cementitous System ● Concrete Repairs ● Infrastructure and Roadworks",
    },
    {
      aspect: "ELECTRO-MECHANICAL",
      details:
        "Electrical Power Infrastructure - Low and Medium Voltage Installations ● Emergency Power System Installations - Standby Generator Sets, UPS, CBS ● MOI Approved CCTV & Access Control Systems ● QCDD Approved Fire Alarm & Voice Evacuation Systems ● ELV Installations - PA System, IPTV, Audio-Visual, Queuing, Lighting, Parking ● Nurse Call, Master Clock, AFILS, BMS ● IT Systems - IP Phones, Data, WiFi ● HVAC Systems ● Fire Fighting - Sprinkler, Hose, Foam, Clean Agent ● Plumbing - Drainage, Treatment Systems, Water Supply ● Irrigation Systems ● Water Features ● Tier-3 & 4 Data Center Systems",
    },
    {
      aspect: "INTERIOR FIT-OUT",
      details:
        "Marble and Stone Works ● Wooden Works ● Built-in Works ● Interior Finishes ● Special Interior Finishes",
    },
    {
      aspect: "LANDSCAPE DEVELOPMENT",
      details:
        "Gardens and Parks ● Hard Landscaping ● Soft Landscaping ● Irrigation Systems ● Landscaping and Irrigation Maintenance ● Tensile Structures ● Water Features ● Street Furniture ● Urban Art Installations ● Special Finishes ● Roadworks and Infrastructure Works",
    },
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
          General Contracting
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

export default GwusTradinggeneral;
