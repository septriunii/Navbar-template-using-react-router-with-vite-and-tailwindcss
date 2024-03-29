import React from "react";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Ads from "../components/Ads";

function Home() {
  return (
    <div>
      <Navbar />

      <Body>
        {/* makes the product body smaller or bigger */}
        <div className="w-[90%]">
          <Ads />
          <div className=" w-full -mt-7">
            <Products />
          </div>
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default Home;
