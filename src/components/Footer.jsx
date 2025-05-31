import React from "react";
import x from "../assets/x.png";
import fb from "../assets/facebook.png";
import call from "../assets/call.webp";
import whatsapp from "../assets/whatsapp.png";

const Footer = () => {
  return (
    <div>
      <section className="footer p-9 footer-text flex gap-19 text-blue-gray-800 max-md:flex-col max-md:gap-5 ">
        <div>
          <h2>WHY CHOOSE US</h2>
          <p>
            At Gwus Group of Companies, every member of our team is dedicated to
            achieving operational excellence each and every day.
          </p>
        </div>
        <div>
          <h2>International Address:</h2>
          <p>
            Building N0: 41, Street 400, Zone 56, Salwa Road, Doha, Qatar. Phone
            numbers : +97455925866 +97477426368
          </p>
          <p></p>
        </div>
        <div>
          <h2>Nigerian Address: </h2>
          <p>
            15 Trinity College Road, Umuizu Afara, off Uchenna Bus stop, Ubakala
            Road, Umuahia, Abia State, Nigeria.
            <br />
            Phone number: +2347020514858, +2348129522650, +2349065910188,
          </p>
        </div>
        <div>
          <h2>CONNECT WITH US</h2>
          <ul>
            <li>contact@gwusgroup.com</li>

            <li>Web:www.gwusgroup.com</li>
            <li>
              <div>
                <h2>FOLLOW US</h2>
                <ul className="flex gap-3 pt-3">
                  {/* <li className="w-9 bg-white rounded-xl">
                    <a
                      href="https://wa.me/2348029971941
"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={whatsapp} alt="" className="rounded-xl" />
                    </a>
                  </li> */}
                  <li className="w-9 bg-white rounded-xl">
                    <a
                      href="tel:+2347020514858"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={call} alt="" />
                    </a>
                  </li>
                  <li className="w-9 bg-white rounded-xl">
                    <a>
                      <img src={fb} alt="" />
                    </a>
                  </li>
                  <li className="w-9 bg-white rounded-xl">
                    <a>
                      <img src={x} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className=" text-blue-950 px-9 py-4">
        Gwus Group of Companies © All Rights Reserved | Powered By : Weconetdata
      </section>
    </div>
  );
};

export default Footer;
