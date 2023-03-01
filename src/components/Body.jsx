import React from "react";

function Body({ children }) {
  return (
    <div className="bg-neutral-900 mx-3 flex justify-center items-center mt-3 min-h-screen text-3xl text-white font-bold p-3">
      {children}
    </div>
  );
}

export default Body;

// THIS IS A TEMPLATE FOR BODY
