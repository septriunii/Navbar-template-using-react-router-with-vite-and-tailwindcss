import React from "react";
import { Link } from "react-router-dom";
import link from "../data/link";

function Body({ children }) {
  return (
    <div className="bg-neutral-900 min-h-screen flex">
      <div className=" px-7 h-[450px] left-0 flex flex-col justify-end items-center gap-5">
        {link.map((link) => (
          <div className="bg-blue-700 h-12 w-12">
            <ul className="flex gap-2">
              <li key={link.id}>
                <Link to={link.link} className=" p-2 cursor-pointer ">
                  {link.name}
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

export default Body;

// THIS IS A TEMPLATE FOR BODY
