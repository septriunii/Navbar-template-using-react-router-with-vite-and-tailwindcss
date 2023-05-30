import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import link from "../data/link";
import "../assets/ShoppingCart.svg";

function Navbar() {
  return (
    <div className="fixed  w-full z-50">
      <div className="bg-slate-800 text-white p-3">
        <div className="h-14 flex items-center justify-between mx-3">
          {/* Middle navbar*/}
          <div className="flex justify-center items-center ">
            <div className="h-11 w-11 bg-green-900 mr-5 p-2 cursor-pointer"></div>
            <div className="flex justify-center items-center">
              <Link to="/">
                <div className="h-11 w-11 bg-slate-600 mr-2 p-2 cursor-pointer"></div>
              </Link>
              <h1 className="font-bold text-lg">DarkHaul</h1>
            </div>
          </div>

          <div className=" p-2 w-[600px] flex items-center text-black">
            <input type="text" className="h-11 w-[500px]" />
            <div className="h-11 bg-slate-600 px-2 flex items-center cursor-pointer rounded-sm text-white font-bold mr-10">
              O
            </div>
            <div className="bg-orange-600 h-10 w-10 flex items-center justify-center">
              <Link to="/" className=" p-2 cursor-pointer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-orange-600 h-10  flex items-center justify-center">
            <Link to="/" className=" p-2 cursor-pointer">
              Logout
            </Link>
          </div>
        </div>

        <div className=" h-5 flex justify-center text-sm">
          {link.map((link) => (
            <ul className="flex gap-2">
              <li key={link.id}>
                <Link to={link.link} className=" p-2 cursor-pointer ">
                  {link.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="bg-neutral-900 h-3 w-full "></div>
    </div>
  );
}

export default Navbar;
