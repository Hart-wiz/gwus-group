import React, { useState } from "react";
import logo from "/logo.png";
import menuIcon from "/menu.svg";

const navItems = [
  { name: "HOME", path: "#" },
  { name: "ABOUT", path: "#about" },
  { name: "SERVICES", path: "#services" },
  { name: "CONTACT", path: "#contact" },
];

const Nav = () => {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <>
      {/* Sticky Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/60 backdrop-blur-sm h-20 max-md:h-25 max-md:px-3 px-30 flex justify-between items-center shadow-sm">
        <div className="flex items-center text-black gap-3">
          <img
            src={logo}
            alt="company logo"
            className="w-[80px] max-md:w-[60px]"
          />
          <h2 className="font-extrabold text-xl max-md:text-sm text-blue-900">
            GWUS GROUP OF COMPANIES
          </h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="max-md:hidden  text-blue-950 font-semibold flex gap-9 text-md z-50">
          {navItems.map((item) => (
            <li key={item.path} className="p-[9px] ">
              <a href={item.path} className="hover:text-blue-800">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuShow(!menuShow)}
          aria-label="Toggle Menu"
        >
          <img src={menuIcon} alt="menu toggle" className="w-10" />
        </button>
      </div>

      {/* Mobile Nav with Animation */}
      <ul
        className={`md:hidden fixed top-[80px] pt-9 z-50 left-0 w-full bg-black/80 h-1/2 text-center font-semibold text-gray-300 transform transition-all duration-300 ease-in-out ${
          menuShow
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="block hover:bg-blue-950 hover:text-white w-full py-3"
            onClick={() => setMenuShow(false)}
          >
            {item.name}
          </a>
        ))}
      </ul>

      {/* Support Bar */}
      <div className="bg-blue-950 flex w-full py-5 justify-end px-30 max-md:px-7 text-sm">
        <p className="text-white mr-2">NEED SUPPORT?</p>
        <p className="text-yellow-300 font-semibold">+(974) 77045197</p>
      </div>
    </>
  );
};

export default Nav;
