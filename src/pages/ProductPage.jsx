import React from "react";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <Body>
        <div className="w-full mt-24">
          <Products />
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default ProductPage;
