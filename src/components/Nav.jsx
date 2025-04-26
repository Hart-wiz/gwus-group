import React from "react";
import logo from "/logo.png";
import menu from "/menu.svg";

const Nav = () => {
  //   const [menu, setMenu] = useState(true);
  return (
    <>
      <div className=" bg-white h-30 max-md:h-25 max-md:px-3 px-30 py-5  flex flex-row justify-between  items-center ">
        <div className="flex  text-black items-center ">
          <img src={logo} alt="" className="w-25" />
          <h2 className="font-extrabold text-xl max-md:text-sm text-blue-900 max-md:hidden ">
            GWUS GROUP OF COMPANIES
          </h2>
        </div>
        <ul className="max-md:hidden text-blue-950 font-semibold flex  gap-15 text-md">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
        <img src={menu} alt="menu" className="w-10" />
      </div>
      <div className="bg-blue-950 flex w-full py-5 justify-end px-30 max-md:px-7 text-sm">
        <p>NEED SUPPORT? : </p>
        <p className="text-yellow-300 font-semibold ">+(234) 803-414904 </p>
      </div>
    </>
  );
};

export default Nav;
