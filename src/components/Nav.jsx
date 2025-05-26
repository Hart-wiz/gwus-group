import React, { useState } from "react";
import logo from "/logo.png";
import menuIcon from "/menu.svg";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  {
    name: "Our Companies ▼",
    dropdown: [
      { name: "Cobel oil & Gas ltd", path: "/cobel" },
      { name: "GwusCobel ltd", path: "/gwuscobel" },
      { name: "GwusQatar ltd", path: "/gwusqatar" },
      { name: "Gwus Trading & Contracting", path: "/gwustrading" },
    ],
  },
  { name: "About", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
];

const Nav = ({ companyName, className }) => {
  const [menuShow, setMenuShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* fixed Navigation Header */}
      <div className="fixed w-screen top-0 z-50 bg-white/60 backdrop-blur-sm h-20 max-md:h-25 max-md:px-3 px-30 flex justify-between items-center shadow-sm">
        <div className="flex items-center text-black gap-3">
          <img
            src={logo}
            alt="company logo"
            className="w-[80px] max-md:w-[60px]"
          />

          <h2 className="font-extrabold text-xl max-md:text-sm text-blue-900">
            GWUS GROUP OF COMPANIES
            <p className={className}>{companyName}</p>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="max-md:hidden text-blue-950 font-semibold flex gap-6 text-md z-90 relative">
          {navItems.map((item) =>
            item.dropdown ? (
              <li
                key={item.name}
                className="relative group p-[9px] bg-yellow-600 text-amber-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="hover:text-blue-800">{item.name}</button>
                {dropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg border mt-0 rounded w-44 z-50">
                    {item.dropdown.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.path} className="p-[9px]">
                <a href={item.path} className="hover:text-blue-800">
                  {item.name}
                </a>
              </li>
            )
          )}
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

      {/* Mobile Nav with Dropdown */}
      <ul
        className={`md:hidden fixed top-[80px] pt-9 z-50 left-0 w-full bg-black/80 h-3/4 text-left pl-9 font-semibold text-gray-300 transform transition-all duration-300 ease-in-out ${
          menuShow
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {navItems.map((item) =>
          item.dropdown ? (
            <div key={item.name}>
              <p className="py-3">{item.name}</p>
              {item.dropdown.map((sub) => (
                <a
                  key={sub.name}
                  href={sub.path}
                  className="block hover:bg-blue-950 hover:text-white w-full py-2"
                  onClick={() => setMenuShow(false)}
                >
                  {sub.name}
                </a>
              ))}
            </div>
          ) : (
            <a
              key={item.path}
              href={item.path}
              className="block hover:bg-blue-950 hover:text-white w-full py-3"
              onClick={() => setMenuShow(false)}
            >
              {item.name}
            </a>
          )
        )}
      </ul>
    </>
  );
};

export default Nav;
