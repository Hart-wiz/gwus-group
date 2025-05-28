import React from "react";
import Nav from "../components/Nav";
import front from "../assets/generalcontract.webp";
import Footer from "../components/Footer";

const GwusTradinggeneral = () => {
  const data = [
    {
      aspect: "CIVIL CONSTRUCTION",
      details:
        " ●	Earthworks - Excavation, Shoring, Dewatering, ●	Piling Works,  ●	Concreting Works,  ●	Structural Steel - Built-up Structural Elements, Steel Framing, Standingseam Roofing System, Structural Steel Bridge,  ●	Structural Strengthening - Concrete Jacketing Works, (CFRP) Carbon Fibre Reinforced Polymer System,  ●	Waterproofing Systems - Torch-Applied Membrane, Inverted Roofing System, Cementitous System,  ●	Concrete Repairs,  ●	Infrastructure and Roadworks",
    },
    {
      aspect: "ELECTRO-MECHANICAL",
      details:
        "●	Electrical Power Infrastructure - Low and Medium Voltage Installations,  ●	Emergency Power System Installations - Standby Generator Sets, UPS, CBS.,  ●	Authority Approved Safety & Security System Installations - MOI Approved CCTV & Access Control System,,  ●	QCDD Approved Fire Alarm & Voice Evacuation System.,  ●	LC / ELV System Installations - PA System, IPTV, Audio-Visual, Queuing Management, Parking Management, Lighting Control,,  ●	Nurse Call, Toilet Alarm, Master Clock, AFILS, BMS.,  ●	IT System Installations - Passive and Active Components for IP Telephone, Data & WIFI,  ●	HVAV - Ventilation, Air Conditioning, Pressurization and Smoke Extract Systems,  ●	Fire Fighting - Sprinkler, Fire Hose, Foam and Clean Agent Fire Protection Systems,  ●	Plumbing - Storm Water, Sewage Water Drainage Systems, Sewage Water Treatment Systems and  Cold & Hot Water Supply Systems,  ●	Irrigation - Drip, Bubbler & Sprinkler Systems,  ●	Water Features - Fountain and Artificial Lakes,  ●	Special systems - Control Room and Data Centers with Tier-3 & 4 Systems",
    },
    {
      aspect: "INTERIOR FIT-OUT",
      details:
        "●	Marble and Stone Works - Flooring, Wall Cladding, Waterjet Design, ●	Wooden Works - Cladding, Masharabiya, Louvers, Doors, Windows, ●	Built-in Works - Kitchen Cabinets, Closets, Reception Counters, ●	Interior Finishes - Tiles, Carpet, Wood Parquet, Gypsum Ceiling, Metal Ceiling Tiles, Painting Works, ●	Special Interior Finishes - Rubber Flooring, Acoustic Panels, Wallpaper, Resin-Acrylic Sheets, Metal & Stainless-Steel Cladding",
    },
    {
      aspect: " LANDSCAPE DEVELOPMENT",
      details:
        "●	Gardens and Parks, Avenue Planting, Sport Fields.   ●	Hard Landscaping - Tiled Pavements, Stamped Concrete, Stone Finish - Granite, Basalt, Pebbles, River Rocks  .   ●	Soft Landscaping - Vegetative Materials - Palm Trees, Trees, Shrubs, Groundcovers, Seasonal Flowers and Grass with Advanced Horticulture Practices.   ●	Irrigation System - Modern Automatic, Central and Computer Controlled.   ●	Landscaping and Irrigation Maintenance.   ●	Tensile Structure - Playground Covers, Aviary, Tents, Car Parking Shades.   ●	Water Features - Fountains, Dry Fountains, Swimming Pools, Artificial Lakes and Waterfalls.   ●	Street Furniture - Gazebos, Benches, Play Equipment.   ●	Urban Art Installations - Sculptures, Murals, Art Features.   ●	Special Finishes - Artificial Rock Formations, Log Finish Fences, Special Paint Finishes.   ●	Roadworks and Infrastructure Works.   .",
    },
    {
      aspect: " STAFFING SERVICES",
      details:
        "●	At Gwus Trading and Contracting, we specialize in engineering staffing services, helping businesses in Qatar find highly qualified engineers and technical professionals. As a trusted engineering staffing agency, we provide top-tier staffing solutions to support construction, oil & gas, and infrastructure projects...  ●	The Importance of Engineering Staffing Services..  ●	Hiring skilled engineers is critical for successful project execution. Our engineering staffing services ensure that businesses have access to experienced professionals who meet industry requirements...  ●	Civil engineers..  ●	Mechanical engineers..  ●	Electrical engineers..  ●	HSE officers/Engineers..  ●	QA/QC specialists..  ●	Lifting Supervisor / Riggers",
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
          General Contracting
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

export default GwusTradinggeneral;
