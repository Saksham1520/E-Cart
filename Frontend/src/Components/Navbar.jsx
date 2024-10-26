import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

function Navbar({ theme, darkMode }) {
  const { carts } = useSelector((store) => store.allcart);

  return (
    <div className="w-full fixed top-0 left-0 z-50 min-h-[60px] m-auto  flex items-center justify-between bg-teal-300 dark:bg-slate-900 dark:text-white">
      <div className="text-2xl ml-16">E-Cart</div>

      <div className="mr-16 flex items-center gap-4">
        <div onClick={theme}>
          {!darkMode ? (
            <CiLight className="text-2xl text-black" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </div>
        <ul className="flex items-center gap-[22px]">
          <li className="text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-2xl relative">
            <Link to="/cart">
              <FaCartShopping />
            </Link>

            {carts.length > 0 && (
              <span className="absolute top-[-8px] left-[18px] bg-red-600 rounded-full w-[18px] h-[18px] text-sm flex items-center justify-center text-white ">
                {carts.length}
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
