import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import menuIcon from "/menu.svg";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "CONTACT", path: "/contact" },
];

const Nav = () => {
  const [menuShow, setMenuShow] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="bg-white h-30 max-md:h-25 max-md:px-3 px-30 py-5 flex justify-between items-center">
        <div className="flex items-center text-black">
          <img src={logo} alt="company logo" className="w-25" />
          <h2 className="font-extrabold text-xl max-md:text-sm text-blue-900 ">
            GWUS GROUP OF COMPANIES
          </h2>
        </div>

        <ul className="nav max-md:hidden text-blue-950 font-semibold flex gap-15 text-md">
          {navItems.map((item) => (
            <li key={item.path} className="p-[9px]">
              <Link
                to={item.path}
                className={location.pathname === item.path ? "nav-active" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setMenuShow(!menuShow)}>
          <img src={menuIcon} alt="menu toggle" className="w-10" />
        </button>
      </div>

      {/* Mobile Nav */}
      <ul
        className={`bg-blue-900 space-y-5 p-4 text-center font-semibold text-gray-300 ${
          menuShow ? "flex flex-col w-full items-center" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="hover:bg-blue-950 hover:text-white w-full py-2"
            onClick={() => setMenuShow(false)}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <div className="bg-blue-950 flex w-full py-5 justify-end px-30 max-md:px-7 text-sm">
        <p className="text-white mr-2">NEED SUPPORT?</p>
        <p className="text-yellow-300 font-semibold">+(974) 77045197</p>
      </div>
    </>
  );
};

export default Nav;
