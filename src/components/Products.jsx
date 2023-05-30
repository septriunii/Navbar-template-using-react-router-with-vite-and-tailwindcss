import React from "react";
import products from "../data/product_data";

const Product = () => {
  return (
    <div className="h-auto w-full p-3 grid grid-cols-5 gap-2 center bg-gray-700 bg-opacity-50">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-green-700 h-[250px] w-[200px]  rounded-lg overflow-hidden shadow-md relative"
          // bg for product box when img is not shown
        >
          <img
            className="w-full h-full object-cover "
            src={product.photo}
            alt={`${product.name}`}
          />

          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white">
            <div className="px-4 py-2">
              <h2 className="font-bold text-lg mb-2">{product.name}</h2>
              <p className=" text-base mb-2">${product.price}</p>
              <div className="flex justify-between">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded px-3 py-2 hover:border-[1px] border-white border-solid text-xs">
                  Add to Cart
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold rounded px-3 py-2 hover:border-[1px] border-white border-solid text-sm">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
