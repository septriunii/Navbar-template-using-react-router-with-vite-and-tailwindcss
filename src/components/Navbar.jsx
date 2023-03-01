import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-slate-800 flex justify-between items-center p-3 text-white mb-3">
        <div className=" flex items-center ">
          <div className="h-8 w-8 bg-slate-600 mr-5 p-2 cursor-pointer"></div>
          <h1 className="font-bold">React Router</h1>
        </div>
        <div className="">
          <ul className="flex gap-12 ">
            <li>
              <Link to="/" className=" p-2 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className=" p-2 cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="/contactus" className=" p-2 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className=" p-2 w-60 flex text-black">
          <input type="text" className="w-36 rounded-sm pl-3" />
          <div className="h-8 bg-slate-600 ml-3 px-2 flex items-center cursor-pointer rounded-sm text-white font-bold">
            Search
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
