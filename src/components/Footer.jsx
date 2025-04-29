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
          <h2>FOLLOW US</h2>
          <ul className="flex gap-3 pt-3">
            <li className="w-9 bg-white rounded-xl">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="" className="rounded-xl" />
              </a>
            </li>
            <li className="w-9 bg-white rounded-xl">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={fb} alt="" />
              </a>
            </li>
            <li className="w-9 bg-white rounded-xl">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="" />
              </a>
            </li>
            <li className="w-9 bg-white rounded-xl">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={call} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>WHY CHOOSE US</h2>
          <p>
            At Gwus Group of Companies, every member of our team is dedicated to
            achieving operational excellence each and every day.
          </p>
        </div>
        <div>
          <h2>NEWS</h2>
          <p>
            Exciting News! Gwus Group of Companies has chosen Weconetdata
            Technologies to power its IT solutions and digital growth.
          </p>
        </div>
        <div>
          <h2>CONNECT WITH US</h2>
          <ul>
            <li>info@gwusgroup.com</li>
            <li>Tel :+ (234) 803-4113355</li>
            <li>Web:www.gwusgroup.com</li>
          </ul>
        </div>
      </section>
      <section className=" text-blue-950 px-9 py-4">
        Gwus Group of Companies © All Rights Reserved | Powered By : Weconetdata
        hub
      </section>
    </div>
  );
};

export default Footer;
