import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

const CobelProject = () => {
  return (
    <div>
      <Nav />
      <main>
        <img src={slide4} alt="" className="h-90 w-full" />

        <section className="flex gap-3 m-9 flex-col">
          <div className="h-90 flex text-black gap-4">
            <div className="border-solid border-4 w-[500px] overflow-hidden">
              <img src={slide5} alt="" className="size-[500px]" />
            </div>
            <article>
              <h2 className="text-3xl font-mono">
                Offshore and Onshore Projects
              </h2>
              <details className="text-justify transition-all ease-in-out">
                COBEL Oil & Gas is well established multi-disciplined Onshore
                and Offshore EPIC contracting company that has delivered EPIC
                projects. COBEL Oil & Gas have a capable team of experienced
                Project Management personnel and Construction Management
                personnel overseeing Engineering, Procurement, Construction and
                Commissioning of Projects. Our In-house capabilities cater for
                Majority of Project activities and we aim to provide
                one-stop-shop services to our clients. Offshore works include
                works such as boat landings, Electrical & Instrumentation
                upgrades, Brownfield Hook up on platforms and associated deck
                extensions and MOC works undertaken by clients for Process and
                production improvements. Onshore works include works such as
                Electrical & Instrument upgrades, Process Plant upgrades
                includes Vessels, equipment, piping and structures, associated
                civil works for plant upgrades, Construction of buildings and
                commissioning works in all disciplines.{" "}
              </details>
              <progress value={90} max={100}>
                complete
              </progress>
            </article>
          </div>
          <div className="h-90 flex text-black gap-4">
            <div className="border-solid border-4 w-[500px] overflow-hidden">
              <img src={slide5} alt="" className="" />
            </div>
            <article>
              <h2>Offshore and Onshore Projects</h2>
              <details>
                COBEL Oil & Gas is well established multi-disciplined Onshore
                and Offshore EPIC contracting company that has delivered EPIC
                projects. COBEL Oil & Gas have a capable team of experienced
                Project Management personnel and Construction Management
                personnel overseeing Engineering, Procurement, Construction and
                Commissioning of Projects. Our In-house capabilities cater for
                Majority of Project activities and we aim to provide
                one-stop-shop services to our clients. Offshore works include
                works such as boat landings, Electrical & Instrumentation
                upgrades, Brownfield Hook up on platforms and associated deck
                extensions and MOC works undertaken by clients for Process and
                production improvements. Onshore works include works such as
                Electrical & Instrument upgrades, Process Plant upgrades
                includes Vessels, equipment, piping and structures, associated
                civil works for plant upgrades, Construction of buildings and
                commissioning works in all disciplines.{" "}
              </details>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CobelProject;
