import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import LandingPage from "./pages/LandingPage";
import Product from "./components/Products";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/prods" element={<ProductPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
