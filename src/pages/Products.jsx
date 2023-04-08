import React from "react";
import products from "../data/product_data";

const Product = () => {
  return (
    <div className="h-[400px] grid grid-cols-5 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg overflow-hidden shadow-md relative"
        >
          <img
            className="w-full h-full object-cover "
            src={product.photo}
            alt={`${product.name}`}
          />

          <div className="absolute bottom-0 w-full bg-black bg-opacity-50">
            <div className="px-4 py-2">
              <h2 className="font-bold text-lg mb-2">{product.name}</h2>
              <p className="text-gray-700 text-base mb-2">${product.price}</p>
              <div className="flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
