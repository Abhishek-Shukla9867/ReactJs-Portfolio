import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import pic from "../assets/Logo.png";

import { Link, link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItem = [
    {
      id: 1,
      text: "Home",
    },

    {
      id: 2,
      text: "About",
    },

    {
      id: 3,
      text: "Projects",
    },

    {
      id: 4,
      text: "Experience",
    },

    {
      id: 5,
      text: "Contact Us",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16  sticky top-0 bg-white z-50">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="Logo" />
            <h1 className="font-semibold text-xl cursor-pointer mt-2">
              Abhishe<span className="text-blue-800  text-2xl">K</span>
            </h1>
          </div>

          <div className="flex items-center">
            <ul className="hidden md:flex space-x-8">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer  hover:text-red-600  active:text-blue-600"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Phone Device */}

        {menu && (
          <div className="bg-white w-96">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center  space-y-4  text-xl ">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-bold  "
                  key={id}
                >
                  <Link
                  onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
