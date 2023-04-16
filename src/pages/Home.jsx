import React from "react";
import Body from "../components/Body";
import Navbar from "../components/Navbar";
import Products from "./Products";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Body>
        <div className=" m-5 w-full">
          <Products />
        </div>
      </Body>
      <Footer />
    </div>
  );
}

export default Home;
