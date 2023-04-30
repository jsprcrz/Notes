import React, { useState } from "react";

import { close, menu } from "../../Assets";
import { navLinks } from "../../Constants";
import { RoughNotation } from "react-rough-notation";

const NavBar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-2xl bg-clip-text bg-blueColor">
          <a className="font-extrabold">
            <RoughNotation type="highlight" show={true} color="#e8d84f">
              Notes Repository
            </RoughNotation>
          </a>
        </h1>
      </div>

      <ul className="menu gap-8 list-none sm:flex hidden justify-end">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`menuList text-[#afafaf] hover:text-blueColor ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* For small devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          style={{ filter: "invert(100%)" }}
          className="h-[28px] w-[28px] object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-slate-50 absolute top-20 right-7 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="menu gap-8 list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`fmenuList text-[#afafaf] hover:text-blueColor ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
