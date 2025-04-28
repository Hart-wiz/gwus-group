import React, { useState } from "react";
import logo from "/logo.png";
import menuIcon from "/menu.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [servicesActive, setServicesActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  return (
    <>
      <div className=" bg-white h-30 max-md:h-25 max-md:px-3 px-30 py-5  flex flex-row justify-between  items-center ">
        <div className="flex  text-black items-center ">
          <img src={logo} alt="" className="w-25  " />
          <h2 className="font-extrabold text-xl max-md:text-sm text-blue-900 max-md:hidden ">
            GWUS GROUP OF COMPANIES
          </h2>
        </div>
        <ul className="max-md:hidden text-blue-950 font-semibold flex  gap-15 text-md">
          <li
            to="/"
            className={homeActive ? "nav-active" : "p-[9px]"}
            onClick={() => {
              setHomeActive(true);
              setAboutActive(false);
              setServicesActive(false);
              setContactActive(false);
            }}
          >
            <Link to="/">HOME</Link>
          </li>
          <li
            className={aboutActive ? "nav-active" : "p-[9px]"}
            onClick={() => {
              setAboutActive(true);
              setHomeActive(false);
              setServicesActive(false);
              setContactActive(false);
            }}
          >
            <Link to="/about">ABOUT</Link>
          </li>
          <li
            className={servicesActive ? "nav-active" : "p-[9px]"}
            onClick={() => {
              setServicesActive(true);
              setAboutActive(false);
              setHomeActive(false);
              setContactActive(false);
            }}
          >
            <Link to="/services">SERVICES</Link>
          </li>
          <li
            className={contactActive ? "nav-active" : "p-[9px]"}
            onClick={() => {
              setContactActive(true);
              setAboutActive(false);
              setHomeActive(false);
              setServicesActive(false);
            }}
          >
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <img
          src={menuIcon}
          alt="menu"
          className="w-10 md:hidden"
          onClick={() => {
            menuShow ? setMenuShow(false) : setMenuShow(true);
          }}
        />
      </div>

      <ul
        className={`bg-blue-800 p-4  ${
          menuShow
            ? "flex flex-col gap-4 w-full items-center font-semibold text-gray-300 hover:bg-blue-950 hover:text-white"
            : "hidden"
        }`}
      >
        <Link to="/" onClick={() => setMenuShow(false)}>
          HOME
        </Link>
        <Link to="/about" onClick={() => setMenuShow(false)}>
          ABOUT
        </Link>
        <Link to="/services" onClick={() => setMenuShow(false)}>
          SERVICES
        </Link>
        <Link to="/contact" onClick={() => setMenuShow(false)}>
          CONTACT
        </Link>
      </ul>
      <div className="bg-blue-950 flex w-full py-5 justify-end px-30 max-md:px-7 text-sm">
        <p className="text-white">NEED SUPPORT? : </p>
        <p className="text-yellow-300 font-semibold ">+(234) 803-414904 </p>
      </div>
    </>
  );
};

export default Nav;
